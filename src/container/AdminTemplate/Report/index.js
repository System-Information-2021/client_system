import React, { useState, useEffect } from 'react'
import apiInstance from '../../../services/index'
import moment from 'moment'

import "./index.css"

const Index = () => {
    const [revenue, setRevenue] = useState([])
    const [product, setProduct] = useState([])
    const [order, setOrder] = useState([])
    const [valRevenue, setValRevenue] = useState(1)

    useEffect(() => {
        async function fetchRevenue() {
            const { data } = await apiInstance({
                url: `/report/revenue/${valRevenue}`,
                method: 'GET',
            })
            console.log(data)
            if (data.code === 200) {
                setRevenue(data.data)
            }
        }
        async function fetchProduct() {
            const { data } = await apiInstance({
                url: `/report/product`,
                method: 'GET',
            })
            console.log(data)
            if (data.code === 200) {
                setProduct(data.data)
            }
        }
        async function fetchOrder() {
            const { data } = await apiInstance({
                url: `/report/order`,
                method: 'GET',
            })
            console.log(data)
            if (data.code === 200) {
                setOrder(data.data)
            }
        }
        fetchOrder()
        fetchRevenue()
        fetchProduct()
    }, [valRevenue])
    console.log(revenue)
    return (
        <div className="report">
            <div className="title">Report</div>
            <div className="report_revenue">
                <div className="top">
                    <div className="title">Revenue</div>
                    <select defaultValue={valRevenue} onChange={e => setValRevenue(e.target.value)}>
                        <option value={1}>Currnent Month</option>
                        <option value={2}>Currenrt Year</option>
                    </select>
                </div>
                <div className="revenue_table">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Total</th>
                                <th scope="col">Date Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {revenue?.map((el, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.sum}</td>
                                    <td>{moment().format(el.date_trunc)
                                    }</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="report_product">
                <div className="top">
                    <div className="title">Sale Product In Month</div>
                </div>
                <div className="product_table">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product?.map((el, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.sum
                                    }</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="report_order">
                <div className="top">
                    <div className="title">Order Bill</div>
                </div>
                <div className="order_table">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Time</th>
                                <th scope="col">Count</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order?.map((el, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{el.date_trunc}</td>
                                    <td>{el.count
                                    }</td>
                                    <td>{el.status
                                    }</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Index
