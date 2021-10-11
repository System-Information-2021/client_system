import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import "./index.css"

const Index = () => {
    let history = useHistory();

    return (
        <div className="search_form container">
            <div className="logo_app" onClick={() => history.push("/")}>
                <img src={Logo} alt="logo" />
                <div>Shopping Online</div>
            </div>
            <form className="form_group">
                <input type="text" placeholder="search product ..." />
                <button type="submit">
                    <ion-icon name="search-outline"></ion-icon>
                </button>
            </form>
        </div>
    )
}

export default Index
