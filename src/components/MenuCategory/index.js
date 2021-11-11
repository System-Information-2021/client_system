import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { actFetchBrand } from "../../redux/Product/product.actions"
import { useDispatch, useSelector } from "react-redux"
import "./index.css"

const Index = ({ setBrandId }) => {
    let history = useHistory();
    const dispatch = useDispatch()
    const listBrand = useSelector((state) => state.products.listBrands)

    useEffect(() => {
        dispatch(actFetchBrand())
    }, [])

    return (
        <div className="menu_category container">
            <ul>
                <li className="hambuger_category"><ion-icon name="reorder-four-outline"></ion-icon></li>
                {listBrand?.map((item, index) => {
                    return (<li key={index} onClick={() => setBrandId(item.id)}>{item.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Index
