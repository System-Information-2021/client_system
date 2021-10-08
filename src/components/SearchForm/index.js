import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="search_form container">
            <div className="logo_app">Shopping Online</div>
            <form className="form_group">
                <input type="text" placeholder="search product ..." />
                <button type="submit">
                    <ion-icon name="search-outline"></ion-icon>
                </button>
            </form>
        </div>
    )
}

export default index
