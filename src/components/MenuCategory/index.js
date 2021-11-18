import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { actFetchBrand, actFetchCategory } from "../../redux/Product/product.actions"
import { useDispatch, useSelector } from "react-redux"
import "./index.css"

const Index = ({ setBrandId, setCateId }) => {
    let history = useHistory();
    const dispatch = useDispatch()
    const listBrand = useSelector((state) => state.products.listBrands)
    const listCategory = useSelector((state) => state.products.listCategorys)


    useEffect(() => {
        dispatch(actFetchBrand())
        dispatch(actFetchCategory())
    }, [dispatch])

    console.log(listCategory)

    const setBrandAndCate = () => {
        setBrandId("")
        setCateId("")
    }

    return (
        <div className="menu_category container">
            <ul>
                <li className="hambuger_category"><ion-icon name="reorder-four-outline"></ion-icon></li>
                <li className="" onClick={() => setBrandAndCate()}>All</li>
                {listBrand?.map((item, index) => {
                    return (<li key={index} onClick={() => setBrandId(item.id)}>{item.name}</li>)
                })}
            </ul>
            <div className="dropdow__content">
                {listCategory?.map((item) => {
                    return <p onClick={() => setCateId(item.id)}>{item.name}</p>
                })}
            </div>
        </div>
    )
}

export default Index
