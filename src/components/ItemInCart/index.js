import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateToCart, removeToCart } from "../../redux/ShoppingCart/shopping.actions"

const Index = ({ data }) => {
    const dispatch = useDispatch()
    const [qtyUpdate, setQtyUpdate] = useState(data.qty);

    const handleOnchangeUpdate = (e) => {
        setQtyUpdate(e.target.value)
    }

    return (
        <tr>
            <th scope="row" style={{ display: 'flex', alignItems: "center", borderBottom: "1px solod gray", paddingBottom: "15px" }}>
                <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                    <img src={`https://system-server-postgres.herokuapp.com/uploads/${data.image1}`} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div>
                    <div className="cart_item_name">{data.name}</div>
                    <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }} onClick={() => dispatch(removeToCart(data.id))}><ion-icon name="close-outline"></ion-icon>Delete</div>
                </div>

            </th>
            <td style={{ color: "gray", }}>
                ${data.price}
            </td>
            <td>
                <div className="qty_update" style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column", color: 'gray', justifyContent: "center" }}>
                    <div>
                        <input type="number" style={{ width: "40px" }} min={1} onChange={handleOnchangeUpdate} value={qtyUpdate} />
                    </div>
                    <button onClick={() => dispatch(updateToCart(data.id, qtyUpdate))} >update</button>
                </div>
            </td>
            <td style={{ color: "gray" }}>${data.qty * data.price}</td>
        </tr>
    )
}

export default Index
