import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiInstance from '../../../services'
import "./index.css"

const Index = () => {
    let { id } = useParams()
    let history = useHistory()

    const [valueBrand, setValueBrand] = useState("")


    const submitEditBrand = async (e) => {
        e.preventDefault()
        const { data } = await apiInstance({
            url: `brand/update/${id}`,
            method: "PUT",
            data: { name_brand: valueBrand }
        })
        if (data.code === 200) {
            toast.success(data.status)
            setTimeout(() => {
                history.push("/admin/product/brand")
            }, 2000);
        } else {
            toast.error(`Status_code: ${data.code}...!`)
        }
    }

    useEffect(() => {
        async function getBrandById() {
            const { data } = await apiInstance({
                url: `/brand/${id}`,
                method: "GET"
            })
            if (data.code === 200) {
                setValueBrand(data.data.name)
            }
        }
        getBrandById();
    }, [])

    console.log(valueBrand)

    return (
        <div className="product_brand_edit_form">
            <div className="form_title">Edit Brand Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Brand Name</label>
                        <input type="text" className="form-control" placeholder="Name Brand Product" onChange={e => setValueBrand(e.target.value)} value={valueBrand} />
                    </div>
                </div>
                <div style={{ textAlign: "center" }} onClick={submitEditBrand} >
                    <button className="btn_submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Index
