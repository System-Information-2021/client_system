import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { actLogout } from "../../redux/User/user.actions"
import "./index.css"

const Index = () => {
    const [username, setUserName] = useState(null);
    let user = JSON.parse(localStorage.getItem("user"))
    let history = useHistory();

    useEffect(() => {
        if (user) setUserName(user.firstname + user.lastname)
        console.log(user)
    }, [user])

    return (
        <div className="header container">
            <div className="header_left">
                <div className="hambuger"><ion-icon name="reorder-four-outline"></ion-icon></div>
                <div className="show_icon">Show Icon</div>
                <ul className="header_left--menu">
                    <li onClick={() => history.push("/")}>Home</li>
                    <li>About Us</li>
                    <li>My Account</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="header_right">
                <div className="header__right--groupButton">
                    <ul>
                        {
                            username ? (<li>
                                Hello {username}
                            </li>) : <li className="login" onClick={() => history.push("/login")} >
                                <ion-icon name="log-in"></ion-icon> Login
                            </li>
                        }
                        {
                            username ? (<li onClick={() => actLogout()} >
                                <ion-icon name="log-out-outline"></ion-icon> Logout
                            </li>) : (<li className="register" onClick={() => history.push("/register")}>
                                <ion-icon name="pencil-outline"></ion-icon> Register
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Index
