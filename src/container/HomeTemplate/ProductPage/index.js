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

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            // partialVisibilityGutter: 500
        },
    };
    return (
        <div className="products container">
            <Banner />
            <div className="product_title">Featured Products</div>
            <div className="list_products_slider">
                <Carousel responsive={responsive} partialVisible={true} >
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                </Carousel>
            </div>

            <div className="product_title">NEW RELEASES</div>
            <div className="list_products_slider">
                <Carousel responsive={responsive} partialVisible={true} >
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                    <ProductItemSlider />
                </Carousel>
            </div>

            <Introduction />
        </div>
    )
}

export default Index
