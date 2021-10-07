import React, { Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from "react-router";

const HomeTemplate = ({ routes }) => {
    console.log("route_homepage", routes.routes)

    return (
        <div className="home__container">
            <header>this is header</header>
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
            <footer>This is footer</footer>
        </div>
    )
}

export default HomeTemplate
