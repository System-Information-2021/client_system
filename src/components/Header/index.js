import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="header container">
            <div className="header_left">
                <div className="hambuger"><ion-icon name="reorder-four-outline"></ion-icon></div>
                <div className="show_icon">Show Icon</div>
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
