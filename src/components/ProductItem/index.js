import React from 'react'
import demoImage from "../../assets/images/product_03_thumbnail.jpg"
import "./index.css"

const Index = () => {
    return (
        <div className="product_item">
            <div className="product_image">
                <img src={demoImage} alt="image item" />
            </div>
            <div className="product_description">
                <div className="product_name">Women GolfShorts</div>
                <div className="product_price">$14.99</div>
                <div className="product_infor">In Stock</div>
                <div className="product_button">Add To Cart</div>
            </div>

        </div>
    )
}

export default Index
