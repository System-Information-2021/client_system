import React, { useState } from 'react'
import Modal from 'react-awesome-modal';
import { addToCart } from "../../redux/ShoppingCart/shopping.actions"
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify"
import "./index.css"

const Index = ({ data }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const addCart = (id, name, price, image) => {
        toast.success("add to cart")
        dispatch(addToCart({ "id": id, "name": name, "price": price, "image1": image }))
    }

    return (
        <div className="product_item">
            <div className="product_image">
                <img src={data.image1} alt="item" />
            </div>
            <div className="product_description">
                <div className="product_name">{data.name}</div>
                <div className="product_price">${data.price}</div>
                <div className="product_infor">{data.description}</div>
                <div className="product_button_add" onClick={() => addCart(data.id, data.name, data.price, data.image1)}>Add To Cart</div>
                <div onClick={openModal} className="product_detail">Detail</div>
            </div>
            <Modal
                visible={visible}
                width="80%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <div className="product_modal">
                    <h1 className="name">{data.name}</h1>
                    <p className="description">{data.description}</p>
                    <div className="group_image">
                        <img src={data.image2} alt="product2" />
                        <img src={data.image3} alt="product3" />
                    </div>
                    <button onClick={() => closeModal()} className="close">Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default Index
