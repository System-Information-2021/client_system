import React, { useState } from 'react'
import "./index.css"
import Pagination from "react-pagination-library";
import { useHistory } from 'react-router-dom';

const Index = () => {

    let history = useHistory()
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    return (
        <div className="admin_product_category">
            <div className="admin_product_category_header">
                <div className="admin_product_category_title">All Brand</div>
                <div className="admin_product_category_new" onClick={() => history.push("/admin/product/category/create")}>New Category</div>
            </div>

            <div className="admin_product_category_main_list">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Brand Name</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">3</th>
                            <td>@twitter</td>
                            <td>
                                <div className="btn btn_edit" onClick={() => history.push("/admin/product/category/edit")}><ion-icon name="create-outline"></ion-icon></div>
                                <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
                            </td>
                        </tr>
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
