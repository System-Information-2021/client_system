import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./index.css"
import demoImage from "../../assets/images/product_03_thumbnail.jpg"
import { addToCart } from "../../redux/ShoppingCart/shopping.actions"

import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

const Index = ({ item }) => {

    let history = useHistory()
    const dispatch = useDispatch()


    const addCart = (id, name, price, image) => {
        toast.success("add to cart")
        dispatch(addToCart({ "id": id, "name": name, "price": price, "image1": image }))
    }
    return (
        <>
            <div className="product_item_slider">
                <div className="product_image">
                    <img src={item.image1} alt="item" />
                </div>
                <div className="product_description">
                    <div className="product_name">{item.name}</div>
                    <div className="product_price">${item.price}</div>
                    <span className="product_infor">In Stock.</span>
                    <button className="product_button" onClick={() => addCart(item.id, item.name, item.price, item.image1)}>Add To Cart</button>
                </div>
                <div className="btn_detail" onClick={() => history.push("/all-product")}>Redirect</div>
            </div >
        </>
    )
}

export default Index
