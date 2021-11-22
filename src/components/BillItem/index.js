import React, { useState, useEffect } from 'react'
import apiInstance from '../../services/index'
import Modal from 'react-awesome-modal';
import "./index.css"
import { toast } from 'react-toastify';

const Index = ({ item }) => {
    // eslint-disable-next-line no-use-before-define
    const [curStatus, setCurStatus] = useState();
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    // const dateTime = new Date(item.createdAt).toUTCString()


    const changeStatus = async (id, status) => {
        closeModal()
        setCurStatus(status)
        const { data } = await apiInstance({
            url: `/cart/update/${id}/${status}`,
            method: 'PUT',
        })
        if (data.code === 200) {
            toast.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error("change status error")
        }
    }
    const transferStatus = (status) => {
        let messageStatus
        switch (status) {
            case "pending":
                messageStatus = 1
                break;
            case "received":
                messageStatus = 2
                break;
            case "delivering":
                messageStatus = 3
                break;
            case "delivered":
                messageStatus = 4
                break;
            case "cancel":
                messageStatus = 5
                break;
            default:
                break;
        }
        return messageStatus;
    }

    const deleteOrder = async (e, id) => {
        e.preventDefault();
        closeModal()
        const { data } = await apiInstance({
            url: `/cart/deleteorder/${id}`,
            method: "DELETE"
        })
        // console.log(data)
        if (data.code === 200) {
            toast.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error("fail delete order")
        }
    }


    useEffect(() => {
        setCurStatus(transferStatus(item.status))
    }, [item.status])


    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.firstname} {item.lastname}</td>
            <td>{item.status}</td>
            <td>{item.email || "Not email"}</td>
            <td>{item.createdAt || ""}</td>
            <td>$ {item.total_price}</td>
            <td><button className="btn" onClick={() => openModal()}>Detail</button></td>

            <Modal
                visible={visible}
                width="70%"
                height="70%"
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
                                <th scope="col">Phone</th>
                                <th scope="col">Total_price</th>
                                <th scope="col">Change status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstname} {item.lastname}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.numberphone}</td>
                                <td>${item.total_price}</td>
                                <td><select className="" onChange={e => changeStatus(item.id, e.target.value)} value={curStatus}>
                                    <option value={1}>Pending</option>
                                    <option value={2}>Received</option>
                                    <option value={3}>Delivering</option>
                                    <option value={4}>Delivered</option>
                                    <option value={5}>Cancel</option>
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="note">Note: {item.note}</div>
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
                    <button className="btn" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteOrder(e, item.id) }}>Delete Order</button>
                </div>
            </Modal>
        </tr>
    )
}

export default Index
