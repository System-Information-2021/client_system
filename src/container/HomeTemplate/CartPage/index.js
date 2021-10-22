import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./index.css"
import { useHistory } from 'react-router-dom'
import ItemInCart from "../../../components/ItemInCart"

const Index = () => {
    let history = useHistory()

    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
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


    return (
        <div className="view_cart_page container">
            <div className="view_cart_title">Shopping Cart</div>
            <div className="view_cart_content row">
                <div className="list_cart col-md-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody >
                            <ItemInCart />
                            <ItemInCart />
                            <ItemInCart />
                        </tbody>
                    </table>
                </div>
                <div className="cart_sumary col-md-3">
                    <div className="sumary_title">order sumary</div>
                    <div className="sumary_sub_total">
                        <div style={{ fontSize: "18px", fontWeight: "bold", }}>Subtotal</div><div>${totalPrice}</div>
                    </div>
                    <div className="sumary_total" style={{ fontSize: "20px", fontWeight: "bold" }}><div>Total</div><div>${totalPrice}</div>
                    </div>
                    <div className="sumary_btn" onClick={() => history.push("/checkout")}>proceed to checkout</div>

                    <div className="sumary_payment">
                        <div className="payment_title" >Payment</div>
                        <div>Not Yet</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
