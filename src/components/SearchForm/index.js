import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import { useSelector, useDispatch } from 'react-redux'
import "./index.css"

const Index = () => {
    let history = useHistory();

    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
    const cart = useSelector((state) => state.shopping.cart)

    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
        })
        setTotalItem(items)
        setTotalPrice(price)
    }, [cart, totalItem, totalPrice])
    console.log(cart)


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
            <div className="cart" onClick={() => history.push("/cart-detail")}>
                <div className="cart_icon"><ion-icon name="cart-outline"></ion-icon></div>
                <div className="cart_content">
                    <div className="cart_title">Shopping Cart</div>
                    <div className="cart_item">
                        {totalItem} items - ${totalPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
