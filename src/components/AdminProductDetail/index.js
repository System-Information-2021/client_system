import React, { useState, useEffect } from 'react'
import "./index.css"
import Modal from 'react-awesome-modal';
import { useHistory } from 'react-router-dom';
import ModalDetailProduct from "../../components/ModalDetailProduct"
import apiInstance from "../../services/index"
import { toast } from 'react-toastify';



const Index = ({ item }) => {
    let history = useHistory()

    const [visible, setVisible] = useState(false);
    const [activeCur, setActiveCur] = useState()

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const changeStatusProduct = async (id, active) => {
        setActiveCur(active)
        closeModal()
        const { data } = await apiInstance({
            url: `/product/active/${id}`,
            method: "POST",
            data: { value: active }
        })
        console.log(data)
        if (data.code === 200) {
            toast.success("active successfully")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error("Change status have error")
        }


    }

    const deleteProduct = async (id) => {
        const { data } = await apiInstance({
            url: `/product/delete/${id}`,
            method: "DELETE"
        })

        if (data.code === 200) {
            toast.success(data.messsage)
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } else {
            toast.error(`Status_code: ${data.code}...!`)
        }
    }

    useEffect(() => {
        setActiveCur(item.active)
    }, [item.active])

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td className="name">{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand?.name}</td>
            <td>{item.category?.name}</td>


            <td>
                <div className="btn btn_edit" onClick={() => history.push("/admin/product/edit")} style={{ marginRight: "10px" }}><ion-icon name="create-outline"></ion-icon></div>
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
                <ModalDetailProduct data={item} closeModal={closeModal} active={activeCur} isAdmin={true} changeStatusProduct={changeStatusProduct} />

            </Modal>
        </tr>
    )
}

export default Index
