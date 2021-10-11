import React, { useState } from 'react'
import demoImage from "../../assets/images/product_03_thumbnail.jpg"
import Modal from 'react-awesome-modal';
import "./index.css"

const Index = () => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    return (
        <div className="product_item">
            <div className="product_image">
                <img src={demoImage} alt="image item" />
            </div>
            <div className="product_description">
                <div className="product_name">Women GolfShorts</div>
                <div className="product_price">$14.99</div>
                <div className="product_infor">In Stock</div>
                <div className="product_button">Add To Cart</div>
                <div onClick={openModal} className="product_detail">Detail</div>
            </div>

            <Modal
                visible={visible}
                width="400"
                height="300"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <div className="product_modal">
                    <h1 className="name">Women GolfShorts</h1>
                    <p className="description">Some Contents</p>
                    <button onClick={() => closeModal()} className="close">Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default Index
