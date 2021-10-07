import React from "react"
import HomeTemplate from "../container/HomeTemplate"

const appRoutes = [
    {
        exact: false,
        path: "/",
        component: HomeTemplate,
        routes: [
            {
                exact: true,
                path: "/login",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/LoginPage")
                ),
            },
            {
                exact: true,
                path: "/register",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/RegisterPage")
                ),
            },
            {
                exact: true,
                path: "/product",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/ProductPage")
                ),
            },
        ]
    }
]
export default appRoutes;