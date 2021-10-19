import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import apiInstance from '../../../services'
import "./index.css"

const Index = () => {

    const [brand, setBrand] = useState("")

    const submitBrand = async (e) => {
        e.preventDefault()
        const { data } = await apiInstance({
            url: "/brand/add",
            method: "POST",
            data: { name: brand }
        })

        if (data.code === 200) {
            toast.success(data.status)
        } else {
            toast.error(`Status_code: ${data.code}...!`)
        }
    }

    return (
        <div className="create_brand_product_form">
            <div className="form_title">Create New Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Brand Name</label>
                        <input type="text" className="form-control" placeholder="Name Brand Product" onChange={e => setBrand(e.target.value)} />
                    </div>
                </div>
                <div style={{ textAlign: "center" }} onClick={submitBrand}>
                    <button className="btn_submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Index
