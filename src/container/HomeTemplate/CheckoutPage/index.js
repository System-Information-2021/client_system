import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./index.css"
import imageItem from "../../../assets/images/product_03_thumbnail.jpg"

const Index = () => {
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

    return (
        <div className="checkout_page container">
            <div className="checkout_title">Checkout</div>
            <div className="row">
                <div className="checkout_form_info col-md-8 col-12">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Company" aria-label="Address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="Address" aria-label="First name" />
                            </div>
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="City" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="Company" aria-label="Address" />
                            </div>
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="Phone" aria-label="Address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                    <label className="form-check-label" for="gridRadios1">
                                        I agree checkout method
                                    </label>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
                <div className="col-md-4 col-12 checkout_payment">
                    <div className="checkout_sumary">
                        <div className="title">
                            Order Sumary
                        </div>
                        <div className="list_item">
                            <div className="checkout_item">
                                <div className="infor">
                                    <img src={imageItem} alt="item image" />
                                    <div className="qty">3</div>
                                    <div className="name_and_price">
                                        <div>Women men </div>
                                        <div>$9999</div>
                                    </div>
                                </div>
                                <div className="subtotal">$999</div>
                            </div>
                            <div className="checkout_item">
                                <div className="infor">
                                    <img src={imageItem} alt="item image" />
                                    <div className="qty">3</div>
                                    <div className="name_and_price">
                                        <div>Women men</div>
                                        <div>$9999</div>
                                    </div>
                                </div>
                                <div className="subtotal">$999</div>
                            </div>
                        </div>

                        <div className="checkout_total">
                            <div className="subtotal">
                                <div>Subtotal</div>
                                <div>${totalPrice}</div>
                            </div>
                            <div className="shipping">
                                <div>Shipping</div>
                                <div>Free</div>
                            </div>
                            <div className="taxes">
                                <div>Taxes</div>
                                <div>$000</div>
                            </div>
                            <div className="total">
                                <div>Total</div>
                                <div>${totalPrice}</div>
                            </div>
                        </div>
                        <div className="checkout_btn">
                            Submit
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
