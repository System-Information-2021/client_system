import React from 'react'
import { useHistory } from 'react-router-dom'
import "./index.css"

const Index = () => {
    let history = useHistory();

    return (
        <div className="menu_category container">
            <ul>
                <li className="hambuger_category"><ion-icon name="reorder-four-outline"></ion-icon></li>
                <li onClick={() => history.push("/all-product")}>All</li>
                <li >Asava</li>
                <li >BOYY</li>
                <li >Adidas</li>
                <li>Jodan</li>
                <li>Other</li>
            </ul>

        </div>
    )
}

export default Index
