import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./index.css"
import demoImage from "../../assets/images/product_03_thumbnail.jpg"
import { addToCart, removeToCart, updateToCart } from "../../redux/ShoppingCart/shopping.actions"


const Index = () => {

    const dispatch = useDispatch()

    const submitCart = (e) => {
        dispatch(addToCart(3))
        console.log("click")
    }

    return (
        <div className="product_item_slider">
            <div className="product_image">
                <img src={demoImage} alt="image item" />
            </div>
            <div className="product_description">
                <div className="product_name">Women GolfShorts</div>
                <div className="product_price">$14.99</div>
                <span className="product_infor">In Stock.</span>
                <button className="product_button" onClick={submitCart}>Add To Cart</button>
            </div>
        </div >
    )
}

export default Index
