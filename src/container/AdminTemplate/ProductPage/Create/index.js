import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import apiInstance from "../../../../services/index"
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
    const [gender, setGender] = useState("")


    useEffect(() => {
        async function fetchBrand() {
            const { data } = await apiInstance({
                url: "/brand/all",
                method: "GET",
            })
            if (data.code === 200) {
                setBrand(data.data)
            } else {
                toast.error("Fetch Data Error")
            }
        }
        async function fetchCategory() {
            const { data } = await apiInstance({
                url: "/category/all",
                method: "GET",
            })

            if (data.code === 200) {
                setCategory(data.data)
            } else {
                toast.error("Fetch Data Error")
            }
        }
        fetchBrand()
        fetchCategory()
    }, [])

    const handleSubmitProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("gender", gender)
        formData.append("id_brand", brandId)
        formData.append("id_category", categoryId)

        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
        // console.log(images)

        const { data } = await apiInstance({
            url: "/product/add",
            method: "POST",
            data: formData,
        })
        if (data.code === 200) {
            toast.success(data.message)
            setTimeout(() => {
                history.push("/admin/product")
            }, 2000)
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
                <div className="form-group">
                    <label className="my-1 mr-2" className="brand_prouduct" >Brand Product</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={e => setBrandId(e.target.value)}>
                        <option selected>Choose...</option>
                        {
                            brand?.map(item => (
                                <><option value={item.id}>{item.name}</option></>))
                        }
                    </select>

                    <label className="my-1" className="category_prouduct" >Category Product</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={e => setCategoryId(e.target.value)}  >
                        <option selected>Choose...</option>
                        {
                            category?.map(item => {
                                return (<option value={item.id}>{item.name}</option>)
                            })
                        }
                    </select>
                    <label className="my-1" className="category_prouduct" >Gender Product</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={e => setGender(e.target.value)}  >
                        <option selected>Choose...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                </div>
                <div className="form-group">
                    <label>Must choose less than or equal to 3 image</label>
                    <input type="file" className="form-control-file custom-file-input" onChange={e => setImages(e.target.files)} accept='image/*' multiple />
                </div>
                <div className="previre_image_before_upload">
                    {

                    }

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
