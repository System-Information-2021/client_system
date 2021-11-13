import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./index.css"
import demoImage from "../../assets/images/product_03_thumbnail.jpg"
import { addToCart, removeToCart, updateToCart } from "../../redux/ShoppingCart/shopping.actions"
import Modal from 'react-awesome-modal';
import { useHistory } from "react-router-dom"

const Index = ({ item }) => {

    let history = useHistory()
    const dispatch = useDispatch()


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
                    <button className="product_button">Add To Cart</button>
                </div>
                <div className="btn_detail" onClick={() => history.push("/all-product")}>Redirect</div>
            </div >
        </>
    )
}

export default Index
