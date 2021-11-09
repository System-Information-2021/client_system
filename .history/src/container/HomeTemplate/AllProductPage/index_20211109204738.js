import React, { useEffect, useState } from 'react'
import ProductItem from "../../../components/ProductItem"
import MenuCategory from "../../../components/MenuCategory"
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
    const [selectBrand, setSelectBrand] = useState("")
    const [selectCate, setSelectCate] = useState("")
    const [gender, setGender] = useState("")
    const [currentPage, setCurrentPage] = useState(1);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }
    useEffect(() => {
        dispatch(actFetchProduct(currentPage, selectBrand, selectCate, gender))
    }, [currentPage, selectCate, gender, selectBrand])

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

    return (
        <div className="all_product container">
            <MenuCategory setBrandId={setSelectBrand} />
            <div className="filter_group">
                <div className="filter_product">
                    <select onChange={(e) => setGender(e.target.value)}>
                        <option value="">Please select gender if filter</option>
                        <option value="male">Men</option>
                        <option value="female">Women</option>
                    </select>
                </div>
                <div className="filter_product" onChange={e => setSelectCate(e.target.value)}>
                    <select>
                        <option value="">Please select category if filter ...</option>
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
