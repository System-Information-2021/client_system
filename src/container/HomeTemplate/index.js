import React, { Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from "react-router";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const HomeTemplate = ({ routes }) => {
    console.log("route_homepage", routes.routes)

    return (
        <div className="home__container">
            <Header />
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
            <Footer />
        </div>
    )
}

export default HomeTemplate
