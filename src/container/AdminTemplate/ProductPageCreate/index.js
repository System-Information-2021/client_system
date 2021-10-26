import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import apiInstance from "../../../services/index"
import { toast } from 'react-toastify'
import "./index.css"

const Index = () => {
    let history = useHistory()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState([])
    const [category, setCategory] = useState([])
    const [brandId, setBrandId] = useState(1)
    const [categoryId, setCategoryId] = useState(1)
    const [images, setImages] = useState([])


    useEffect(() => {
        async function fetchBrand() {
            const { data } = await apiInstance({
                url: "/brand",
                method: "GET",
            })
            // if(data.)
        }
    }, [])

    const handleSubmitProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("id_brand", 1)
        formData.append("id_category", 2)

        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }

        const { data } = await apiInstance({
            url: "/product/add",
            method: "POST",
            data: formData,
        })
        if (data.code === 200) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }


    return (
        <div className="create_product_form">
            <div className="form_title">Create New Product</div>
            <form className="container" onSubmit={handleSubmitProduct} encType="multipart/form-data">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name Product" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Price</label>
                        <input type="text" className="form-control" placeholder="Price Product Must be number" onChange={e => setPrice(e.target.value)} />
                    </div>
                    {/* <div className="form-group col-md-4">
                        <label>Quantity</label>
                        <input type="text" className="form-control" placeholder="Quantity product" />
                    </div> */}
                </div>
                <div className="form-group">
                    <label>Description Product</label>
                    <textarea className="form-control" rows="6" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                {/* <div className="form-group">
                    <label className="my-1 mr-2" className="brand_prouduct" >Brand Product</label>
                    <select className="custom-select my-1 mr-sm-2" >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <label className="my-1" className="category_prouduct" >Category Product</label>
                    <select className="custom-select my-1 mr-sm-2" >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}
                <div className="form-group">
                    <label>Select 3 Image</label>
                    <input type="file" className="form-control-file" onChange={e => setImages(e.target.files)} accept='image/*' multiple />
                </div>

                <div style={{ textAlign: "center" }} onClick={handleSubmitProduct}>
                    <button className="btn_submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Index
