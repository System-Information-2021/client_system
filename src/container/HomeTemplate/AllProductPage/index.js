import React, { useEffect, useState } from 'react'
import ProductItem from "../../../components/ProductItem"
import MenuCategory from "../../../components/MenuCategory"
import { actFetchProduct, actFetchCategory } from "../../../redux/Product/product.actions"
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-pagination-library";
import "./index.css"

const Index = () => {
    const listProducts = useSelector((state) => state.products.listProducts)
    const totalPageProduct = useSelector((state) => state.products.totalPageProduct)
    const dispatch = useDispatch()
    const [selectBrand, setSelectBrand] = useState("")
    const [selectCate, setSelectCate] = useState("")
    const [gender, setGender] = useState("")
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }
    useEffect(() => {
        dispatch(actFetchProduct(currentPage, selectBrand, selectCate, gender))
    }, [currentPage, selectCate, gender, selectBrand, dispatch])


    return (
        <div className="all_product container">
            <MenuCategory setBrandId={setSelectBrand} setCateId={setSelectCate} />
            <div className="list_product">
                {listProducts?.map((item, index) => {
                    return (<ProductItem data={item} key={index} />)
                })}
            </div>
            {listProducts.length === 0 && <div>No product item</div>}

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
