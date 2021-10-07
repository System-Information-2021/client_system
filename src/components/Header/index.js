import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="header">
            <div className="header_left">
                <ul className="header_left--menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>My Account</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="header_right">
                <div className="header__right--groupButton">
                    <ul>
                        <li className="login">
                            <li><ion-icon name="log-in"></ion-icon> Login</li>
                        </li>
                        <li className="register">
                            <li><ion-icon name="pencil-outline"></ion-icon> Register</li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index
