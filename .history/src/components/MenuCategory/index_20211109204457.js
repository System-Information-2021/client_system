import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import apiInstance from '../../services'
import "./index.css"

const Index = ({ setBrandId }) => {
    let history = useHistory();

    const [brand, setBrand] = useState([])

    useEffect(() => {
        async function fetchBrand() {
            const { data } = await apiInstance({
                url: "/customer/brand",
                method: "GET"
            })
            if (data.code === 200) {
                setBrand(data.data)
            }
        }
        fetchBrand()
    }, [])

    return (
        <div className="menu_category container">
            <ul>
                <li className="hambuger_category"><ion-icon name="reorder-four-outline"></ion-icon></li>
                {brand?.map((item, index) => {
                    return (<li key={index} onClick={() => setBrandId(item.id)}>{item.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Index
