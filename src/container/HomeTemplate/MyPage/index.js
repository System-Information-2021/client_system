import React, { useState, useEffect } from 'react'
import MyAccount from "../../../components/MyAccount"
import AllOrderPage from "../../../components/AllOrderPage"
import Personal from "../../../components/Personal"
import useUser from "../../../hook/useUser"
import "./index.css"
import { Redirect } from 'react-router-dom'

const Index = () => {
    const user = useUser()
    const [activeTab, setAvtiveTab] = useState("account");

    // if user not login
    if (!user.data) return <Redirect to="/" />;

    return (
        <div className="my_page container">
            <div className="row">
                <div className="sidebar_list col-md-3">
                    <ul>
                        <li onClick={() => setAvtiveTab("account")}><ion-icon name="shield-half" style={{ marginRight: "10px" }}></ion-icon> My Account</li>
                        <li onClick={() => setAvtiveTab("order")}><ion-icon name="browsers" style={{ marginRight: "10px" }}></ion-icon> List Order</li>
                        <li onClick={() => setAvtiveTab("personal")}><ion-icon name="browsers" style={{ marginRight: "10px" }}></ion-icon>Personal</li>
                    </ul>
                </div>
                <div className="my_page_main col-md-9">
                    {activeTab === "account" && <MyAccount />}
                    {activeTab === "order" && <AllOrderPage />}
                    {activeTab === "personal" && <Personal />}
                </div>
            </div>
        </div>
    )
}

export default Index
