import React, { useState } from 'react'

import imageDemo from "../../assets/images/product_03_thumbnail.jpg"

const Index = () => {
    const [qtyUpdate, setQtyUpdate] = useState(1);

    const handleOnchangeUpdate = (e) => {
        setQtyUpdate(e.target.value)
    }

    console.log(qtyUpdate)

    return (
        <tr>
            <th scope="row" style={{ display: 'flex', alignItems: "center", borderBottom: "1px solod gray", paddingBottom: "15px" }}>
                <div className="cart_item_image" style={{ width: "100px", height: "100px", marginRight: "10px" }}>
                    <img src={imageDemo} alt="image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div>
                    <div className="cart_item_name">Womens Elegents Blouse</div>
                    <div className="btn_delele" style={{ color: "burlywood", cursor: "pointer" }}><ion-icon name="close-outline"></ion-icon>Delete</div>
                </div>

            </th>
            <td style={{ color: "gray", }}>
                $999
            </td>
            <td>
                <div className="qty_update" style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column", color: 'gray', justifyContent: "center" }}>
                    <div>
                        <input type="number" style={{ width: "40px" }} min={1} onChange={handleOnchangeUpdate} value={qtyUpdate} />
                    </div>
                    <button >update</button>
                </div>
            </td>
            <td style={{ color: "gray" }}>$999</td>
        </tr>
    )
}

export default Index
