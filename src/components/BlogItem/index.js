import React from 'react'

import "./index.css"

const Index = ({ image }) => {
    return (
        <div className="blog_item">
            <img src={image} alt=" blog " />
            <div className="content">
                <div className="blog_title">New clothing for brand</div>
                <span className="blog_time">Posted: December 9, 2021</span>
            </div>

        </div>
    )
}

export default Index
