import React, { useState } from 'react'
import ProductItem from "../../../components/ProductItem"


import Pagination from "react-pagination-library";


import "./index.css"

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

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
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={10}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
            />
        </div>
    )
}

export default Index
