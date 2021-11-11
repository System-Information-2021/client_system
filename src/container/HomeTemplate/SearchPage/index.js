import React, { useState, useEffect } from 'react'
import "./index.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { actFetchCategory } from "../../../redux/Product/product.actions"
import ProductItem from "../../../components/ProductItem"
import apiInstance from "../../../services/index"
import "./index.js"
import Pagination from "react-pagination-library";

const Index = () => {
    let { query } = useParams()
    const dispatch = useDispatch()
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchProduct, setSearchProduct] = useState([])


    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    useEffect(() => {
        dispatch(actFetchCategory())
    }, [dispatch])

    useEffect(() => {
        async function searchKey() {
            const { data } = await apiInstance({
                url: "/customer/product/search",
                method: "GET",
                params: {
                    page: 1,
                    key: query
                }
            })
            if (data.code === 200) {
                setTotalPage(data.totalPage)
                setSearchProduct(data.data)
            }
        }
        searchKey()
    }, [query])

    console.log("query", query)

    return (
        <div className="search_page container">
            <div className="search_title">Search Product</div>
            <div className="search_list">
                <div className="list_item">
                    {searchProduct.length === 0 && <div>No Result...</div>}
                    {searchProduct?.map((item, index) => {
                        return (<ProductItem data={item} key={index} />)
                    })}
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
