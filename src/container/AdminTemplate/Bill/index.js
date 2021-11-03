import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="list_bill">
            <div className="bill_title">Bill</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Detail</th>

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

export default index
