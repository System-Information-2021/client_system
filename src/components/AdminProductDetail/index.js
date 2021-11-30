import React, { useState, useEffect } from 'react'
import "./index.css"
import Modal from 'react-awesome-modal';
import ModalDetailProduct from "../../components/ModalDetailProduct"
import apiInstance from "../../services/index"
import { toast } from 'react-toastify';

const Index = ({ item, deleteProduct }) => {

    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const changeStatusProduct = async (id, active) => {
        closeModal()
        const { data } = await apiInstance({
            url: `/product/active/${id}`,
            method: "POST",
            data: { value: active }
        })
        if (data.code === 200) {
            toast.success("Toggle Successfully")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error("Change status have error")
        }
    }

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td className="name">{item.name}</td>
            <td>${item.price}</td>
            <td>{item.brand?.name}</td>
            <td>{item.category?.name}</td>
            <td>{item.quantity}</td>
            <td>
                <select value={item.active} onChange={e => changeStatusProduct(item.id, e.target.value)} >
                    <option value={true}>active</option>
                    <option value={false}>Hidden</option>
                </select>
            </td>
            <td>
                <div className="btn btn_delete" onClick={(e) => { if (window.confirm('Are you sure you wish to cancel this item?')) deleteProduct(item.id) }}><ion-icon name="trash-outline"></ion-icon></div>
            </td>
            <td>
                <button className="btn see_more" onClick={openModal}>Detail</button>
            </td>
            <Modal
                visible={visible}
                width="80%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <ModalDetailProduct data={item} closeModal={closeModal} isAdmin={true} changeStatusProduct={changeStatusProduct} />

            </Modal>
        </tr >
    )
}

export default Index
