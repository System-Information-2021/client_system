import React from "react"
import HomeTemplate from "../container/HomeTemplate"
import AdminTemplate from "../container/AdminTemplate"

const appRoutes = [
    {
        exact: false,
        path: "/admin",
        component: AdminTemplate,
        routes: [
            {
                exact: true,
                path: "/admin",
                component: React.lazy(() => import("../container/AdminTemplate/Admin"))
            },
            {
                exact: true,
                path: "/admin/product",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPage"))
            },
            {
                exact: true,
                path: "/admin/product/create",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPageCreate"))
            },
            {
                exact: true,
                path: "/admin/product/edit",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPageEdit"))
            },
            {
                exact: true,
                path: "/admin/product/brand",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPageBrand"))
            },
            {
                exact: true,
                path: "/admin/product/brand/create",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPageBrandCreate"))
            },
            {
                exact: true,
                path: "/admin/product/brand/edit",
                component: React.lazy(() => import("../container/AdminTemplate/ProductPageBrandEdit"))
            },
            {
                exact: true,
                path: "/admin/product/category",
                component: React.lazy(() => import("../container/AdminTemplate/ProductCategoryPage"))
            },
            {
                exact: true,
                path: "/admin/product/category/edit",
                component: React.lazy(() => import("../container/AdminTemplate/ProductCategoryPage/Edit"))
            },
            {
                exact: true,
                path: "/admin/product/category/create",
                component: React.lazy(() => import("../container/AdminTemplate/ProductCategoryPage/Create"))
            },
            {
                exact: true,
                path: "/admin/user",
                component: React.lazy(() => import("../container/AdminTemplate/userPage"))
            },

        ]
    },
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
                path: "/",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/ProductPage")
                ),
            },
            {
                exact: true,
                path: "/about-us",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/AbourUs")
                ),
            },
            {
                exact: true,
                path: "/all-product",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/AllProductPage")
                ),
            },
            {
                exact: true,
                path: "/cart-detail",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/CartPage")
                ),
            },
            {
                exact: true,
                path: "/checkout",
                component: React.lazy(() =>
                    import("../container/HomeTemplate/CheckoutPage")
                ),
            }
        ]
    },

]
export default appRoutes;