import React, { useEffect, useState } from 'react'
import ProductItem from "../../../components/ProductItem"
import { actFetchProduct } from "../../../redux/ShoppingCart/shopping.actions"
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-pagination-library";
import apiInstance from '../../../services';
import "./index.css"

const Index = () => {
    const listProducts = useSelector((state) => state.shopping.products)
    const totalPageProduct = useSelector((state) => state.shopping.totalPageProduct)
    const dispatch = useDispatch()
    const [category, setCategory] = useState([])
    const [selectCate, setSelectCate] = useState("")
    const [selectBrand, setSelectBrand] = useState("")
    const [gender, setGender] = useState("")
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }
    useEffect(() => {
        dispatch(actFetchProduct(currentPage, selectCate, selectBrand, gender))
    }, [currentPage, selectCate, selectBrand, gender])

    useEffect(() => {
        async function fetchCategory() {
            const { data } = await apiInstance({
                url: "/customer/category",
                method: "GET"
            })
            if (data.code === 200) {
                setCategory(data.data)
            }
        }
        fetchCategory()
    }, [])

    console.log(gender)
    return (
        <div className="all_product container">
            <div className="filter_group">
                <div className="filter_product">
                    <select onChange={(e) => setGender(e.target.value)}>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div className="filter_product">
                    <select>
                        <option>Choosen ...</option>
                        {category.map((item, index) => {
                            return (<option value={item.id} key={index}>{item.name}</option>)
                        })}
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
