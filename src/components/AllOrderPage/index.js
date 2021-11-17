import React, { useState, useEffect } from 'react'
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import Modal from 'react-awesome-modal';
import Pagination from "react-pagination-library";
import apiInstance from "../../services/index"
import OrderItem from "../OrderItem"

const Index = () => {
    const userData = useSelector((state) => state.user.userData)
    const [status, setStatus] = useState(6)
    const [listOrder, setListOrder] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)


    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    useEffect(() => {
        async function fetchOrder() {
            const { data } = await apiInstance({
                url: `cart/getorderbyuser/${userData.id}/${status}`,
                method: "GET",
                params: {
                    page: currentPage,
                }
            })
            // console.log(data);
            if (data.code === 200) {
                setTotalPage(data.totalPage)
                setListOrder(data.data)
            }
        }
        fetchOrder()
    }, [status, userData.id, totalPage, currentPage])

    // console.log(listOrder)
    return (
        <div className="page_order">
            <div className="header_order">
                <ul>
                    <li onClick={() => setStatus(6)}>All</li>
                    <li onClick={() => setStatus(1)}>Pending</li>
                    <li onClick={() => setStatus(2)}>Received</li>
                    <li onClick={() => setStatus(3)}>Delivering</li>
                    <li onClick={() => setStatus(4)}>Delivered</li>
                    <li onClick={() => setStatus(5)}>Cancel</li>
                </ul>
            </div>
            <div className="main_order">
                <div className="list_order">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Time Order</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        {listOrder?.map((item) => {
                            return (<OrderItem
                                key={item.id} item={item} status={status} />)
                        })}
                    </table>
                    {listOrder.length === 0 && <div style={{ textAlign: 'center' }}>No order item.</div>}
                </div>
            </div>
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
