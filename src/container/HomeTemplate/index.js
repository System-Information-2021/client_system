import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SearchForm from "../../components/SearchForm"
import useUser from '../../hook/useUser';
import "./index.css"

const HomeTemplate = ({ routes }) => {

    const user = useUser();

    if (user.data && user.data.isadmin) return <Redirect to="/admin" />



    return (
        <div className="home__container">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={'dark'}
            />
            <Header />
            <SearchForm />

            <div className="main">
                <Suspense fallback={<div className="container">Processing...</div>}>
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
