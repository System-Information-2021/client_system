import React, { Suspense } from 'react'
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import SidebarAdmin from "../../components/SidebarAdmin"
import BreadCrumb from "../../components/Breadcrumb"
import useUser from '../../hook/useUser'
import "./index.css"

const Index = ({ routes }) => {
    const user = useUser()

    // If user is not an admin
    if (!user.data) return <Redirect to="/" />;

    if (!user.data.isadmin) return <Redirect to="/" />;


    return (
        <div className="admin_dashboard">
            <SidebarAdmin />
            <div className="main_admin">
                <div className="header_admin">
                    <div className="breadcrumb">
                        <BreadCrumb />
                    </div>
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
