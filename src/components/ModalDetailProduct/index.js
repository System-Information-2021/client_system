import React, { useState, useEffect } from 'react'
import "./index.css"

const Index = ({ data, addCart, closeModal, active, isAdmin, changeStatusProduct }) => {

    const [imgSelect, setImgSelect] = useState(data.image1)
    // console.log(active)




    return (
        <div className="product_modal">
            <div className="modal_group_image">
                <div className="display">
                    <img src={imgSelect} alt="img_display" />
                </div>
                <div className="list">
                    <img src={data.image1} alt="image1" className="img1" onClick={() => setImgSelect(data.image1)} />
                    <img src={data.image2} alt="image2" className="img2" onClick={() => setImgSelect(data.image2)} />
                    <img src={data.image3} alt="image3" className="img2" onClick={() => setImgSelect(data.image3)} />
                    <img src={data.image4} alt="image4" className="img2" onClick={() => setImgSelect(data.image4)} />
                    <img src={data.image5} alt="image5" className="img2" onClick={() => setImgSelect(data.image5)} />
                </div>
            </div>

            <div className="infor">
                <div className="name">{data.name}</div>
                <div className="brand">Brand - {data.brand.name}</div>
                <div className="price">${data.price}</div>
                {/* <div className="size">
                    Size:
                    <select>
                        <option>XL</option>
                        <option>L</option>
                        <option>M</option>
                    </select>
                </div> */}
                {isAdmin && <div className="active">
                    Status:
                    <select value={active} onChange={e => changeStatusProduct(data.id, e.target.value)} >
                        <option value={true}>active</option>
                        <option value={false}>Hidden</option>
                    </select>
                </div>}

                <div className="quantity">Quantity: {data.quantity} {data.quantity > 1 ? "items" : "item"} in stock</div>
                <div style={{ fontWeight: 'bold' }}>Product detail: </div>

                <div className="description"> {data.description}</div>
                {addCart && <div className="add_cart" onClick={() => addCart(data.id, data.name, data.price, data.image1)}>Add To Cart</div>}

            </div>
            <div onClick={() => closeModal()} className="close"><ion-icon name="close-outline"></ion-icon></div>

        </div>
    )
}

export default Index
