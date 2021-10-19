import React, { useState, useEffect } from 'react'
import "./index.css"
import Pagination from "react-pagination-library";
import { useHistory, useParams } from 'react-router-dom';
import apiInstance from "../../../services/index"
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

const Index = () => {
    const [category, setCategory] = useState([])

    let history = useHistory()

    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    const deleteCategory = async (id) => {
        const { data } = await apiInstance({
            url: `/category/delete/${id}`,
            method: "DELETE",
        })
        if (data.code === 200) {
            toast.success(`${data.status}`)
            window.location.reload()
        } else {
            toast.error("Error")
        }
        console.log(data)
    }

    useEffect(() => {
        async function fetchCategory() {
            const { data } = await apiInstance({
                url: "/category",
                method: "GET"
            })
            if (data.code === 200) {
                setCategory(data.data)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Fetch data error",
                })
            }
        }
        fetchCategory();
    }, [])

    return (
        <div className="admin_product_category">
            <div className="admin_product_category_header">
                <div className="admin_product_category_title">All Brand</div>
                <div className="admin_product_category_new" onClick={() => history.push("/admin/product/category/create")}>New Category</div>
            </div>

            <div className="admin_product_category_main_list">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Brand Name</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category?.map((item, key) => {
                                return (<tr key={key}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className="btn btn_edit" onClick={() => history.push(`/admin/product/category/edit/${item.id}`)}><ion-icon name="create-outline"></ion-icon></div>
                                        <div className="btn btn_delete" onClick={() => deleteCategory(item.id)}><ion-icon name="trash-outline"></ion-icon></div>
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
                    totalPages={10}
                    changeCurrentPage={changeCurrentPage}
                    theme="bottom-border"
                />
            </div>
        </div>
    )
}

export default Index
