import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./index.css"
import Pagination from "react-pagination-library";




const Index = () => {
    let history = useHistory()
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    return (
        <div className="admin_product">
            <div className="admin_product_header">
                <div className="admin_product_title">All Products</div>
                <div className="admin_product_new" onClick={() => history.push("/admin/product/create")}>New Product</div>
            </div>
            <div className="admin_product_main_list">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Brand</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Active</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">3</th>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</td>

                            <td>
                                <div className="btn btn_edit" onClick={() => history.push("/admin/product/edit")}><ion-icon name="create-outline"></ion-icon></div>
                                <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>
                                <div className="btn btn_edit"><ion-icon name="create-outline"></ion-icon></div>
                                <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>
                                <div className="btn btn_edit"><ion-icon name="create-outline"></ion-icon></div>
                                <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>
                                <div className="btn btn_edit"><ion-icon name="create-outline"></ion-icon></div>
                                <div className="btn btn_delete"><ion-icon name="trash-outline"></ion-icon></div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>
                                <div className="btn btn_edit"><ion-icon name="create-outline"></ion-icon></div>
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
