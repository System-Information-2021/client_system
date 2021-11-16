import React, { useState, useEffect } from 'react'
import apiInstance from '../../../services'
import BillItem from "../../../components/BillItem"
import Pagination from "react-pagination-library";
import "./index.css"

const Index = () => {
    const [listBill, setListBill] = useState([])
    const [typebill, setTypeBill] = useState(6)
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    useEffect(() => {
        async function fetchBill() {
            const { data } = await apiInstance({
                url: `/cart/filter/${typebill}`,
                method: 'GET',
                params: {
                    page: currentPage
                }
            })
            console.log(data)
            if (data.code === 200) {
                setListBill(data.data)
                setTotalPage(data.totalPage)
            }
        }
        fetchBill()
    }, [currentPage, typebill])
    // console.log(listBill)
    return (
        <div className="list_bill">
            <div className="bill_title">Bill</div>
            <select className="" onChange={e => setTypeBill(e.target.value)}>
                <option value={1}>Pending</option>
                <option value={2}>Received</option>
                <option value={3}>Delivering</option>
                <option value={4}>Delivered</option>
                <option value={5}>Cancel</option>
                <option value={6} selected>All Bill</option>
            </select>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date Time</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {listBill.length === 0 && <div>No bill item</div>}
                    {listBill?.map((item, index) => {
                        return (<BillItem item={item} key={index} />)
                    })}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPage}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
            />
        </div>
    )
}

export default Index
