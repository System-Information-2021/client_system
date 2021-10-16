import React from 'react'
import "./index.css"
import { useHistory } from 'react-router-dom'
import imageDemo from "../../../assets/images/product_03_thumbnail.jpg"

const Index = () => {
    let history = useHistory()

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
                        <tbody style={{}}>
                            <tr>
                                <th scope="row" style={{ display: 'flex', alignItems: "center", borderBottom: "1px solod gray", paddingBottom: "15px" }}>                                    <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                                    <img src={imageDemo} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                                    <div>
                                        <div className="cart_item_name">Womens Elegents Blouse</div>
                                        <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }}><ion-icon name="close-outline"></ion-icon> Delete</div>
                                    </div>

                                </th>
                                <td style={{ color: "gray", }}>
                                    $999
                                </td>
                                <td>
                                    <div className="qty_update" style={{ display: 'flex', alignItems: "center", color: 'gray' }}>
                                        <div className="btn_add_qty" style={{ cursor: "pointer" }}><ion-icon name="add-circle-outline"></ion-icon></div>
                                        <div style={{ marginRight: "10px", marginLeft: "10px" }} >15</div>
                                        <div className="btn_sub_qty" style={{ cursor: "pointer" }}><ion-icon name="remove-circle-outline"></ion-icon></div>
                                    </div>
                                </td>
                                <td style={{ color: "gray" }}>$999</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ display: 'flex', alignItems: "center" }}>                                    <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                                    <img src={imageDemo} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                                    <div>
                                        <div className="cart_item_name" >Womens Elegents Blouse</div>
                                        <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }}><ion-icon name="close-outline"></ion-icon> Delete</div>
                                    </div>

                                </th>
                                <td style={{ color: "gray", }}>
                                    $999
                                </td>
                                <td>
                                    <div className="qty_update" style={{ display: 'flex', alignItems: "center", color: 'gray' }}>
                                        <div className="btn_add_qty" style={{ cursor: "pointer" }}><ion-icon name="add-circle-outline"></ion-icon></div>
                                        <div style={{ marginRight: "10px", marginLeft: "10px" }} >15</div>
                                        <div className="btn_sub_qty" style={{ cursor: "pointer" }}><ion-icon name="remove-circle-outline"></ion-icon></div>
                                    </div>
                                </td>
                                <td style={{ color: "gray" }}>$999</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ display: 'flex', alignItems: "center" }}>                                    <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                                    <img src={imageDemo} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                                    <div>
                                        <div className="cart_item_name">Womens Elegents Blouse</div>
                                        <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }}><ion-icon name="close-outline"></ion-icon> Delete</div>
                                    </div>

                                </th>
                                <td style={{ color: "gray", }}>
                                    $999
                                </td>
                                <td>
                                    <div className="qty_update" style={{ display: 'flex', alignItems: "center", color: 'gray' }}>
                                        <div className="btn_add_qty" style={{ cursor: "pointer" }}><ion-icon name="add-circle-outline"></ion-icon></div>
                                        <div style={{ marginRight: "10px", marginLeft: "10px" }} >15</div>
                                        <div className="btn_sub_qty" style={{ cursor: "pointer" }}><ion-icon name="remove-circle-outline"></ion-icon></div>
                                    </div>
                                </td>
                                <td style={{ color: "gray" }}>$999</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ display: 'flex', alignItems: "center" }}>                                    <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                                    <img src={imageDemo} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                                    <div>
                                        <div className="cart_item_name">Womens Elegents Blouse</div>
                                        <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }}><ion-icon name="close-outline"></ion-icon> Delete</div>
                                    </div>

                                </th>
                                <td style={{ color: "gray", }}>
                                    $999
                                </td>
                                <td>
                                    <div className="qty_update" style={{ display: 'flex', alignItems: "center", color: 'gray' }}>
                                        <div className="btn_add_qty" style={{ cursor: "pointer" }}><ion-icon name="add-circle-outline"></ion-icon></div>
                                        <div style={{ marginRight: "10px", marginLeft: "10px" }} >15</div>
                                        <div className="btn_sub_qty" style={{ cursor: "pointer" }}><ion-icon name="remove-circle-outline"></ion-icon></div>
                                    </div>
                                </td>
                                <td style={{ color: "gray" }}>$999</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_sumary col-md-3">
                    <div className="sumary_title">order sumary</div>
                    <div className="sumary_sub_total">
                        <div style={{ fontSize: "18px", fontWeight: "bold", }}>Subtotal</div><div>$9999</div>
                    </div>
                    <div className="sumary_total" style={{ fontSize: "20px", fontWeight: "bold" }}><div>Total</div><div>$9999</div>
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
