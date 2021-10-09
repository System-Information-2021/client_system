import React, { Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from "react-router";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SearchForm from "../../components/SearchForm"
import MenuCategory from "../../components/MenuCategory"
import "./index.css"

const HomeTemplate = ({ routes }) => {
    return (
        <div className="home__container">
            <Header />
            <SearchForm />
            <MenuCategory />

            <div className="main">
                <Suspense fallback={<div className="contaner">Processing...</div>}>
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
            <Footer />
        </div>
    )
}

export default HomeTemplate
