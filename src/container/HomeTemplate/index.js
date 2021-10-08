import React, { Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from "react-router";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SearchForm from "../../components/SearchForm"
import MenuCategory from "../../components/MenuCategory"
import Banner from '../../components/Banner'
import Introduction from "../../components/Introduction"
import "./index.css"

const HomeTemplate = ({ routes }) => {
    console.log("route_homepage", routes.routes)
    return (
        <div className="home__container">
            <Header />
            <SearchForm />
            <MenuCategory />
            {/* <Banner /> */}

            <div className="main">
                <Suspense fallback={<div>Processing...</div>}>
                    <Switch>
                        {routes.map((item, idx) => (
                            <Route
                                key={idx}
                                exact={item.exact}
                                path={item.path}
                                component={item.component}
                            />
                        ))}
                    </Switch>
                </Suspense>
            </div>
            {/* <Introduction /> */}
            <Footer />
        </div>
    )
}

export default HomeTemplate
