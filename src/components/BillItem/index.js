import React, { useState, useEffect } from 'react'
import apiInstance from '../../services/index'
import Modal from 'react-awesome-modal';
import "./index.css"
import { toast } from 'react-toastify';

const Index = ({ item }) => {
    const [curStatus, setCurStatus] = useState(item.status);
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    const dateTime = new Date(item.createdAt).toUTCString()


    const changeStatus = async (id, status) => {
        const { data } = await apiInstance({
            url: `/cart/update/${id}/${status}`,
            method: 'PUT',
        })
        if (data.code === 200) {
            toast.success(data.message)
        }
    }

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.firstname} {item.lastname}</td>
            <td>
                {item.status}
            </td>
            <td>{dateTime}</td>
            <td>$ {item.total_price}</td>
            <td><button className="btn" onClick={() => openModal()}>Detail</button></td>


            <Modal
                visible={visible}
                width="60%"
                height="60%"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <div className="listbill_modal">
                    <div className="title_order">Order Detal</div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">Status</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Total_price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstname} {item.lastname}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{curStatus}</td>
                                <td>{item.numberphone}</td>
                                <td>$ {item.total_price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="list_bill_product">
                    {item.products.map((prod) => {
                        return (<div className="item">
                            <div className="left">
                                <img src={prod.image1} alt="item" />
                                <div className="name">{prod.name}</div>
                                <div className="">x{prod.qty}</div>
                            </div>
                            <div className="right">
                                <div>Price: {prod.price}</div>
                                <div>Total: {prod.price * prod.qty}</div>
                            </div>
                        </div>)
                    })}
                </div>

                <div className="bgr_status">
                    <button className="btn">Cancel Order</button>
                </div>
            </Modal>
        </tr>
    )
}

export default Index
