import React, { useState } from 'react'
import Modal from 'react-awesome-modal';
import "./index.css"

const Index = ({ data, addCart, closeModal, selectPro, setSelectPros }) => {

    return (
        <div className="product_modal">
            <div className="modal_group_image">
                <div className="display">
                    <img src={selectPro} alt="img_display" />
                </div>
                <div className="list">
                    <img src={data.image1} alt="image1" className="img1" onClick={() => setSelectPros(data.image1)} />
                    <img src={data.image2} alt="image2" className="img2" onClick={() => setSelectPros(data.image2)} />
                </div>
            </div>

            <div className="infor">
                <div className="name">{data.name}</div>
                <div className="brand">Brand - {data.brand.name}</div>
                <div className="price">${data.price}</div>
                <div className="size">
                    Size:
                    <select>
                        <option>XL</option>
                        <option>L</option>
                        <option>M</option>
                    </select>
                </div>
                <div style={{ fontWeight: 'bold' }}>Product detail: </div>
                <div className="description"> {data.description}</div>
                <div className="add_cart" onClick={() => addCart(data.id, data.name, data.price, data.image1)}>Add To Cart</div>
            </div>
            <div onClick={() => closeModal()} className="close"><ion-icon name="close-outline"></ion-icon></div>

        </div>
    )
}

export default Index
