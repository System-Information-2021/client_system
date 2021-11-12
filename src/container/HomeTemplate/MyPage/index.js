import React, { useState, useEffect } from 'react'
import MyAccount from "../../../components/MyAccount"
import AllOrderPage from "../../../components/AllOrderPage"
import "./index.css"

const Index = () => {
    const [activeTab, setAvtiveTab] = useState("account");

    return (
        <div className="my_page container">
            <div className="row">
                <div className="sidebar_list col-md-3">
                    <ul>
                        <li onClick={() => setAvtiveTab("account")}><ion-icon name="shield-half" style={{ marginRight: "10px" }}></ion-icon> My Account</li>
                        <li onClick={() => setAvtiveTab("order")}><ion-icon name="browsers" style={{ marginRight: "10px" }}></ion-icon> List Order</li>
                    </ul>
                </div>
                <div className="my_page_main col-md-9">
                    {activeTab === "account" && <MyAccount />}
                    {activeTab === "order" && <AllOrderPage />}
                </div>
            </div>

        </div>
    )
}

export default Index
