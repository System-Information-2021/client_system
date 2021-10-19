import React, { useState } from 'react'
import { toast } from 'react-toastify';

import apiInstance from "../../../../services/index"
import "./index.css"

const Index = () => {
    const [category, setCagory] = useState("")

    const submitCategory = async (e) => {
        e.preventDefault()

        const { data } = await apiInstance({
            url: "/category/add",
            method: "POST",
            data: { name: category }
        })
        if (data.code === 200) {
            toast.success(`${data.status}`)
        } else {
            toast.error("Error")
        }
    }

    return (
        <div className="create_category_product_form">
            <div className="form_title">Create New Category Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Category Name</label>
                        <input type="text" className="form-control" placeholder="Name Category Product" onChange={(e) => setCagory(e.target.value)} />
                    </div>
                </div>
                <div style={{ textAlign: "center" }} onClick={submitCategory}>
                    <button className="btn_submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Index
