import React, { useState } from 'react'
import Modal from 'react-awesome-modal';
import apiInstance from "../../services/index"
import { toast } from "react-toastify"
import "./index.css"

const Index = ({ item, status }) => {

    const [visible, setVisible] = useState(false);

    const closeModal = () => {
        setVisible(false)
    }

    const openModal = () => {
        setVisible(true)
    }

    const deleteOrder = async (id) => {
        const { data } = await apiInstance({
            url: `/cart/cancel/${id}`,
            method: "PUT"
        })
        if (data.code === 200) {
            toast.success(data.message)
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }
    }

    // const dateTime = new Date(item.createdAt).toUTCString()


    // console.log(item)
    return (
        <>
            <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.firstname} {item.lastname}</td>
                    <td>{item.numberphone}</td>
                    <td>{item.createdAt}</td>
                    <td>${item.total_price}</td>

                    <td><button className="detail_button" onClick={() => openModal()}>Detail</button></td>
                    {status === 1 && <td><button className="detail_button" onClick={(e) => { if (window.confirm('Are you sure you wish to cancel this item?')) deleteOrder(item.id) }}>Cancel</button></td>}
                    {status === 2 && <td><button className="detail_button" onClick={(e) => { if (window.confirm('Are you sure you wish to cancel this item?')) deleteOrder(item.id) }}>Cancel</button></td>}
                    <Modal
                        visible={visible}
                        width="80%"
                        height="80%"
                        effect="fadeInUp"
                        onClickAway={() => closeModal()}
                    >
                        <div className="modal_order row">

                            <div style={{ textAlign: 'center', marginBottom: '15px', fontWeight: "bold", fontSize: '24px' }}>Order Detail</div>
                            <div className="col-4">
                                <ul className="list-group">
                                    <li className="list-group-item">First Name: {item.firstname}</li>
                                    <li className="list-group-item">Last Name: {item.lastname}</li>
                                    <li className="list-group-item">Address: {item.address}</li>
                                    <li className="list-group-item">City: {item.city}</li>
                                    <li className="list-group-item">Phone Number: {item.numberphone}</li>
                                    <li className="list-group-item">Status: {item.status}</li>
                                    <li className="list-group-item">Date Order: {item.createdAt}</li>
                                    <li className="list-group-item">Date Order: {item.note}</li>



                                </ul>
                            </div>
                            <div className="col-8">
                                <div className="order_product_list">
                                    {item.products.map((prop) => {
                                        return (
                                            <>
                                                <div className="order_product_list_item">
                                                    <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
                                                        <img src={prop.image1} alt="img" />
                                                        <div className="name">{prop.name}</div>
                                                        <div className="qty">x {prop.qty}</div>
                                                    </div>
                                                    <div style={{ marginLeft: "auto", display: 'flex', columnGap: "10px" }}>

                                                        <div className="total">Total Item: ${parseInt(prop.price) * parseInt(prop.qty)}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="order_total">
                                Total Order: ${item.total_price}
                            </div>
                        </div>
                    </Modal>
                </tr>
            </tbody>
        </>
    )
}

export default Index
