import React, { useState, useEffect } from 'react'
import "./index.css"

const Index = () => {
    const [listBill, setListBill] = useState("")

    return (
        <div className="list_bill">
            <div className="bill_title">Bill</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First And Lastname</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date Time</th>
                        <th scope="col">Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className="btn">Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Index
