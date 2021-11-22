import React, { useState } from 'react'
import Modal from 'react-awesome-modal';
import { addToCart } from "../../redux/ShoppingCart/shopping.actions"
import { useDispatch } from 'react-redux';
import ModalDetailProduct from '../../components/ModalDetailProduct'
import { toast } from "react-toastify"
import "./index.css"

const Index = ({ data }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [selectPro, setSelectPro] = useState(data.image1);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const addCart = (id, name, price, image) => {
        toast.success("add to cart")
        dispatch(addToCart({ "id": id, "name": name, "price": price, "image1": image }))
        closeModal()
    }

    // console.log(data)
    return (
        <div className="product_item">
            <div className="product_image">
                <img src={data?.image1} alt="item" />
            </div>
            <div className="product_description">
                <div className="product_name">{data?.name}</div>

                <div style={{ display: 'flex', flexDirection: "column", marginTop: "auto" }}>

                    <div className="product_price">${data?.price} - {data?.brand.name}</div>
                    <div className="product_stock">In stock - {data?.quantity} {data?.quantity > 0 ? "items." : "item."}</div>
                    <div className="product_button_add" onClick={() => addCart(data.id, data.name, data.price, data.image1)}>Add To Cart</div>
                </div>


                <div onClick={openModal} className="product_detail">View</div>
            </div>
            <Modal
                visible={visible}
                width="90%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <ModalDetailProduct data={data} addCart={addCart} closeModal={closeModal} selectPro={selectPro} setSelectPros={setSelectPro} isAdmin={false} />
            </Modal >
        </div >
    )
}

export default Index
