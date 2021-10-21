import React from 'react'
import "./index.css"
import { Carousel, } from "react-bootstrap"
import ImageBanner from "../../assets/images/banner.png"
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"

const index = () => {
    return (
        <div className="banner container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={ImageBanner}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default index
