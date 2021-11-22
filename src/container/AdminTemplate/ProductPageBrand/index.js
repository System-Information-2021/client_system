import React, { useEffect, useState } from 'react'
import apiInstance from '../../../services';
import "./index.css"
import SearchFormAdmin from "../../../components/SearchFormAdmin"
import Pagination from "react-pagination-library";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Index = () => {
    let history = useHistory()
    const [brand, setBrand] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("")
    const [totalPage, setTotalPage] = useState(1)

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    const deleteBrand = async (id) => {
        const { data } = await apiInstance({
            url: `/brand/delete/${id}`,
            method: "DELETE"
        })
        if (data.code === 200) {
            toast.success(data.status)
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        async function fetchBrand() {
            const { data } = await apiInstance({
                url: "/brand",
                method: "GET",
                params: {
                    page: currentPage,
                    key: query,
                }
            })
            // console.log(data)

            if (data.code === 200) {
                setBrand(data.data)
                setTotalPage(data.totalPage)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Fetch data error",
                })
            }
        }
        fetchBrand()
    }, [currentPage, query])

    return (
        <div className="admin_product_brand">
            <div className="admin_product_brand_header">
                <div className="admin_product_brand_title">All Brand</div>
                <div className="admin_product_brand_new" onClick={() => history.push("/admin/product/brand/create")}>New Brand</div>
            </div>
            <SearchFormAdmin title="brand" setState={setQuery} />
            <div className="admin_product_brand_main_list">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Brand Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brand?.map((item) => {
                                return (<tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className="btn btn_edit" onClick={() => history.push(`/admin/product/brand/edit/${item.id}`)}><ion-icon name="create-outline"></ion-icon></div>
                                        <div className="btn btn_delete"
                                            onClick={(e) => { if (window.confirm('Are you sure you wish to cancel this item?')) deleteBrand(item.id) }}
                                        ><ion-icon name="trash-outline" ></ion-icon></div>
                                    </td>
                                </tr>)
                            })
                        }


                    </tbody>
                </table>
            </div>
            <div className="product_pagination">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPage}
                    changeCurrentPage={changeCurrentPage}
                    theme="bottom-border"
                />
            </div>
        </div>
    )
}

export default Index
