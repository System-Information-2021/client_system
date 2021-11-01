import React, { useState } from 'react'
import "./index.css"
import Modal from 'react-awesome-modal';
import { useHistory } from 'react-router-dom';
import apiInstance from "../../services/index"
import { toast } from 'react-toastify';



const Index = ({ item }) => {
    let history = useHistory()

    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const activeProduct = async (id, active) => {

        const { data } = await apiInstance({
            url: `/product/active/${id}`,
            method: "POST",
            data: { value: active }
        })
        console.log(data)
        if (data.code === 200) {
            toast.success(data.messsage)
            window.location.reload()
        } else {
            toast.error(data.code)
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


    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.brand?.name}</td>
            <td>{item.category?.name}</td>
            <td>{item.quantity}</td>

            <td className="button_active">{item.active === true ? (<button className="btn" onClick={() => activeProduct(item.id, false)}>Unactive</button>) : (<button className="btn" onClick={() => activeProduct(item.id, true)}>Active</button>)}</td>
            <td>
                <div className="btn btn_edit" onClick={() => history.push("/admin/product/edit")} style={{ marginRight: "10px" }}><ion-icon name="create-outline"></ion-icon></div>
                <div className="btn btn_delete" onClick={() => deleteProduct(item.id)}><ion-icon name="trash-outline"></ion-icon></div>
            </td>
            <td>
                <button className="btn" onClick={openModal}>See More</button>
            </td>
            <Modal
                visible={visible}
                width="80%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => closeModal()}

            >
                <div className="admin_product_detail_modal">

                    <div className="group_image">
                        <img src={item.image1} />
                        <img src={item.image2} />
                        <img src={item.image3} />
                    </div>

                    <p className="admin_product_detail_description">{item.description}</p>
                    <button onClick={() => closeModal()} className="close btn">Close</button>

                </div>

            </Modal>
        </tr>
    )
}

export default Index
