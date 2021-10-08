import React from 'react'
import "./index.css"
import ImageBanner from "../../assets/images/banner3.jpg"

const index = () => {
    return (
        <div className="banner container">
            <img src={ImageBanner} alt="banner" />
        </div>
    )
}

export default index
