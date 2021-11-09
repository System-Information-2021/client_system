import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useUser from '../../hook/useUser'
import "./index.css"

const Index = () => {
    const user = useUser()
    let history = useHistory();

    const activeMenu = () => {
        let headerEl = document.getElementById("header_menu")

        if (headerEl) {
            headerEl.classList.toggle("active_menu")
        }
    }

    return (
        <div className="header container">
            <div className="header_left">
                <div className="hambuger" id="hambuger" onClick={activeMenu}><ion-icon name="reorder-four-outline"></ion-icon></div>
                <ul className="header_left--menu" id="header_menu">
                    <li onClick={() => history.push("/")}>Home</li>
                    <li>About Us</li>
                    <li onClick={() => history.push("/login")}>My Account</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="header_right">
                <div className="header__right--groupButton">
                    <ul>
                        {
                            user.data ? (<li onClick={() => history.push("/login")}>
                                Hello {user?.data.lastname + user?.data.firstname || user?.data.email}
                            </li>) : <li className="login" onClick={() => history.push("/login")} >
                                <ion-icon name="log-in"></ion-icon> Login
                            </li>
                        }
                        {
                            user.data ? (<li onClick={user.logout} >
                                <ion-icon name="log-out-outline"></ion-icon> Logout
                            </li>) : (<li className="register" onClick={() => history.push("/register")}>
                                <ion-icon name="pencil-outline"></ion-icon> Register
                            </li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="header_cart" onClick={() => history.push("/cart-detail")}>
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
    )
}

export default Index
