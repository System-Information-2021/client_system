import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import "./index.css"
import Pagination from "react-pagination-library";
import apiInstance from "../../../services/index"


const Index = () => {
    const [product, setProduct] = useState(null);
    const [totalPage, setTotalPage] = useState(1);
    let history = useHistory()
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        console.log(numPage)
        setCurrentPage(numPage);
    }

    const activeProduct = (id, active) => {
        console.log(id, active)
    }

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await apiInstance({
                url: `/product`,
                method: "GET",
                params: {
                    page: currentPage
                }
            })
            if (data.code === 200) {
                setProduct(data.data)
                setTotalPage(data.totalPage)
            }
        }
        fetchProduct()
    }, [currentPage])


    return (
        <div className="admin_product">
            <div className="admin_product_header">
                <div className="admin_product_title">All Products</div>
                <div className="admin_product_new" onClick={() => history.push("/admin/product/create")}>New Product</div>
            </div>
            <div className="admin_product_main_list">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Brand</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Image</th>
                            <th scope="col">Status</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((item) => {
                                return (<tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand?.name}</td>
                                    <td>{item.category?.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <div className="group_image">
                                            <img src={`https://system-server-postgres.herokuapp.com/uploads/${item.image1}`} alt="iamge_product" />
                                        </div>
                                    </td>
                                    <td className="button_active">{item.active === true ? (<button className="btn" onClick={() => activeProduct(item.id, false)}>Unactive</button>) : (<button className="btn" onClick={() => activeProduct(item.id, true)}>Active</button>)}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <div className="btn btn_edit" onClick={() => history.push("/admin/product/edit")} style={{ marginRight: "10px" }}><ion-icon name="create-outline"></ion-icon></div>
                                        <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
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
