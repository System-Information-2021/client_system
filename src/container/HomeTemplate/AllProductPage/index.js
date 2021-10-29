import React, { useEffect, useState } from 'react'
import ProductItem from "../../../components/ProductItem"
import { actFetchProduct } from "../../../redux/ShoppingCart/shopping.actions"
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-pagination-library";
import "./index.css"

const Index = () => {
    const listProducts = useSelector((state) => state.shopping.products)
    const totalPageProduct = useSelector((state) => state.shopping.totalPageProduct)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }
    useEffect(() => {
        dispatch(actFetchProduct(currentPage))
    }, [currentPage])


    return (
        <div className="all_product container">
            <div className="filter_group">
                <div className="filter_product">
                    <select>
                        <option value="1">Men</option>
                        <option value="2">Women</option>
                        <option value="3">Children</option>
                    </select>
                </div>
                <div className="filter_product">
                    <select>
                        <option value="1">Sport</option>
                        <option value="2">Classic</option>
                    </select>
                </div>
            </div>

            <div className="list_product">
                {listProducts?.map((item, index) => {
                    return (<ProductItem data={item} key={index} />)
                })}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPageProduct}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
            />
        </div>
    )
}

export default Index
