import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import "./index.css"
import Pagination from "react-pagination-library";
import apiInstance from "../../../services/index"
import SearchFormAdmin from "../../../components/SearchFormAdmin"
import AdminProductDetail from "../../../components/AdminProductDetail"
// import 


const Index = () => {
    const [product, setProduct] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    let history = useHistory()
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("")

    // console.log(query)

    const changeCurrentPage = (numPage) => {
        console.log(numPage)
        setCurrentPage(numPage);
    }

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await apiInstance({
                url: `/product`,
                method: "GET",
                params: {
                    page: currentPage,
                    key: query
                }
            })
            // console.log(data)
            if (data.code === 200) {
                setProduct(data.data)
                setTotalPage(data.totalPage)
            }
        }
        fetchProduct()
    }, [currentPage, query])


    return (
        <div className="admin_product">
            <div className="admin_product_header">
                <div className="admin_product_title">All Products</div>
                <div className="admin_product_new" onClick={() => history.push("/admin/product/create")}>New Product</div>
            </div>
            <SearchFormAdmin title="product" setState={setQuery} />
            <div className="admin_product_main_list">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Category</th>
                            {/* <th scope="col">Quantity</th> */}
                        </tr>
                    </thead>
                    <tbody style={{ height: "65vh", background: "", overflow: "scroll" }}>
                        {
                            product?.map((item) => {
                                return (<AdminProductDetail item={item} />)
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
