import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import useUser from "../../../hook/useUser"
import apiInstance from "../../../services/index"
import "./index.css"

const Index = () => {
    const user = useUser()
    let history = useHistory()

    const [totalItem, setTotalItem] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
    const cart = useSelector((state) => state.shopping.cart)
    const [firstname, setFirstName] = useState(user.data.firstname)
    const [lastname, setLastName] = useState(user.data.lastname)
    const [phone, setPhone] = useState(user.data.mobile_number)
    const [address, setAddress] = useState(user.data.address)
    const [city, setCity] = useState(user.data.city)
    const [note, setNote] = useState("")
    const [email, setEmail] = useState(user.data.email)

    // console.log("user data", user.data.id)

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


    if (!user.data) return <Redirect to="/cart-detail" />

    const submitOrder = async (e) => {
        e.preventDefault();
        const { data } = await apiInstance({
            url: "/cart/order",
            method: "POST",
            data: {
                firstname, lastname, numberphone: phone, address, city, note: note, email: email, id_user: user.data.id, total_price: totalPrice, data: cart
            }
        })
        // console.log(data)
        if (data.code === 200) {
            toast.success("Order successfully");
            setTimeout(() => {
                history.push("/my-page")
            }, 2000);
        } else {
            data.message.forEach((item) => {
                return toast.warning(item)
            })

        }
        // console.log(note)
    }


    return (
        <div className="checkout_page container">
            <div className="checkout_title">Checkout</div>
            <div className="row">
                <div className="checkout_form_info col-md-8 col-12">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastname} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="City"
                                    onChange={(e) => setCity(e.target.value)} value={city} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Phone" onChange={e => setPhone(e.target.value)} value={phone} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Email contact" onChange={e => setEmail(e.target.value)} value={email} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Note Shipper</label>
                            <textarea className="form-control" rows="3" id="noter-text-area" onChange={e => setNote(e.target.value)}></textarea>
                        </div>
                    </form>

                </div>
                <div className="col-md-4 col-12 checkout_payment">
                    <div className="checkout_sumary">
                        <div className="title">
                            Order Sumary
                        </div>
                        <div className="list_item">
                            {cart?.map((item, index) => {
                                return (<div className="checkout_item">
                                    <div className="infor">
                                        <img src={item.image1} alt="item" />
                                        <div className="qty">{item.qty}</div>
                                        <div className="name_and_price">
                                            <div>{item.name}</div>
                                            <div>${item.price}</div>
                                        </div>
                                    </div>
                                    <div className="subtotal">${item.qty * item.price}</div>
                                </div>)
                            })}
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


                        <div className={!user.data ? "hidden" : "checkout_btn"} onClick={submitOrder}>
                            Submit
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
