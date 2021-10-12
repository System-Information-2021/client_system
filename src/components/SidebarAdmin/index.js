import React, { useEffect, useState } from 'react'
import imageLogo from "../../assets/images/logo.png"
import { useHistory } from 'react-router-dom'
import { SidebarData } from "./SidebarData"
import "./index.css"

const Index = (props) => {
    let history = useHistory();

    return (
        <div className="sidebar_admin">
            <div className="sidebar_logo" onClick={() => history.push("/admin")}>
                <img src={imageLogo} alt="logo admmin" />
            </div>
            <ul className="sidebar_list">
                {
                    SidebarData.map((item, key) => {
                        return (<li onClick={() => history.push(`${item.link}`)} className={window.location.pathname === item.link ? "active" : ""} key={key} >
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </li>)
                    })
                }


            </ul>
        </div >
    )
}

export default Index
