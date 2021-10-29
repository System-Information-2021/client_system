import React, { Suspense, useEffect, useState } from 'react'
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import SidebarAdmin from "../../components/SidebarAdmin"
import { ToastContainer, toast } from 'react-toastify';
import BreadCrumb from "../../components/Breadcrumb"
import CPAnimationAdmin from "../../components/CPAnimationAdmin"
import useUser from '../../hook/useUser'
import music from "../../assets/music/Giang-Sinh-Cuoi-Minh-Vuong-M4U.mp3"

import "./index.css"

const Index = ({ routes }) => {
    const [animation, setAnimation] = useState(false)
    const user = useUser()

    // If user is not an admin
    if (!user.data) return <Redirect to="/" />;

    if (user.data && !user.data.isadmin) return <Redirect to="/" />;

    setTimeout(() => {
        setAnimation(false)
    }, 6000);

    return (
        <div className="admin_dashboard">
            {animation === true && <CPAnimationAdmin />}

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
            <SidebarAdmin />
            <div className="main_admin">
                <div className="header_admin">
                    <div className="breadcrumb_container">
                        <BreadCrumb />
                    </div>
                    {/* <audio  loop id="playAudio" src={music} controls  /> */}

                    <button className="logout_button" onClick={user.logout}>
                        <ion-icon name="log-out-sharp"></ion-icon>
                        Log out
                    </button>
                </div>
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

        </div>
    )
}

export default Index
