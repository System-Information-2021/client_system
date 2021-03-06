import React, { useEffect, useState } from 'react'
import apiInstance from '../../../services'
import { useDispatch } from "react-redux"
import { actLogin } from "../../../redux/User/user.actions"
import "./index.css"
import Banner from "../../../components/Banner"
import Carousel from 'react-multi-carousel';
import BlogHome from "../../../components/BlogHome"
import 'react-multi-carousel/lib/styles.css';
import ProductItemSlider from "../../../components/ProductItemSlider"

import Introduction from "../../../components/Introduction"

const Index = () => {
    const [newrelease, setNewRelease] = useState([])
    const [newRank, setNewRank] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actLogin())
    }, [dispatch])

    const responsive = {

        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 3000, min: 4400 },
        //     items: 3,
        //     partialVisibilityGutter: 30
        // },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 50
        },
        // tablet: {
        //     breakpoint: { max: 1024, min: 464 },
        //     items: 2,
        //     partialVisibilityGutter: 30
        // },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    useEffect(() => {
        async function fetchNewReleases() {
            const { data } = await apiInstance({
                url: "/customer/new-release",
                method: "GET"
            })
            if (data.code === 200) {
                setNewRelease(data.data)
            }
        }
        fetchNewReleases()
    }, [])

    useEffect(() => {
        async function fetchNewRank() {
            const { data } = await apiInstance({
                url: "/customer/rank",
                method: "GET"
            })
            if (data.code === 200) {
                setNewRank(data.data)
            }
        }
        fetchNewRank()
    }, [])
    // console.log(newrelease)
    return (
        <div className="products container">
            <Banner />

            <div className="destop">
                <div className="product_title">NEW FEATURES</div>
                <div className="list_products_slider">
                    <Carousel responsive={responsive} >
                        {
                            newRank?.map((item) => {
                                return (<ProductItemSlider key={item.id} item={item.item} />)
                            })
                        }
                    </Carousel>
                </div>
            </div>

            <Introduction />

            <div className="destop">
                <div className="product_title">NEW RELEASES</div>
                <div className="list_products_slider">
                    <Carousel responsive={responsive} >
                        {
                            newrelease?.map((item) => {
                                return (<ProductItemSlider key={item.id} item={item} />)
                            })
                        }
                    </Carousel>
                </div>
                <BlogHome />

            </div>

        </div>
    )
}

export default Index
