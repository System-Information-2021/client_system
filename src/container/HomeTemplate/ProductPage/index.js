import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { actLogin } from "../../../redux/User/user.actions"
import "./index.css"
import Banner from "../../../components/Banner"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from "../../../components/ProductItem"
import ProductItemSlider from "../../../components/ProductItemSlider"

import Introduction from "../../../components/Introduction"

const Index = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actLogin())
    }, [])

    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 4400 },
            items: 3,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="products container">
            <Banner />
            <div className="destop">
                <div className="product_title">Featured Products</div>
                <div className="list_products_slider">
                    <Carousel responsive={responsive} >
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                    </Carousel>
                </div>
                <div className="product_title">NEW RELEASES</div>
                <div className="list_products_slider">
                    <Carousel responsive={responsive} >
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                        <ProductItemSlider />
                    </Carousel>
                </div>
                <Introduction />
            </div>

        </div>
    )
}

export default Index
