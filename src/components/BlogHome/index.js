import React from 'react'
import BlogItem from "../BlogItem"
import img1 from "../../assets/images/b1.jpg"
import img2 from "../../assets/images/b2.jpg"
import img3 from "../../assets/images/b3.jpg"
import img4 from "../../assets/images/b4.jpg"
import img5 from "../../assets/images/b5.jpg"
import img6 from "../../assets/images/b6.jpg"
import img7 from "../../assets/images/b7.jpg"
import img8 from "../../assets/images/b8.jpg"
import "./index.css"

const Index = () => {
    return (
        <div className="home_blog">
            <div className="title">Blog</div>
            <div className="list_blog">
                <BlogItem image={img1} />
                <BlogItem image={img2} />
                <BlogItem image={img3} />
                <BlogItem image={img4} />
                <BlogItem image={img5} />
                <BlogItem image={img6} />
                <BlogItem image={img7} />
                <BlogItem image={img8} />
            </div>
        </div>
    )
}

export default Index
