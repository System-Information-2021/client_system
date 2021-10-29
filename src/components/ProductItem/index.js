import React, { useState } from 'react'
import Modal from 'react-awesome-modal';
import "./index.css"

const Index = ({ data }) => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    console.log(data)
    return (
        <div className="product_item">
            <div className="product_image">
                <img src={`https://system-server-postgres.herokuapp.com/uploads/${data.image1}`} alt="image item" />
            </div>
            <div className="product_description">
                <div className="product_name">{data.name}</div>
                <div className="product_price">${data.price}</div>
                <div className="product_infor">In Stock</div>
                <div className="product_button">Add To Cart</div>
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
                        <img src={`https://system-server-postgres.herokuapp.com/uploads/${data.image2}`} alt="product2" />
                        <img src={`https://system-server-postgres.herokuapp.com/uploads/${data.image3}`} alt="product3" />
                    </div>
                    <button onClick={() => closeModal()} className="close">Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default Index
