import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiInstance from '../../../../services';
import "./index.css"

const Index = () => {
    let { id } = useParams();

    let history = useHistory()
    const [valueEdit, setValueEdit] = useState("");


    useEffect(() => {
        async function fetchCategoryById() {
            const { data } = await apiInstance({
                url: `/category/${id}`,
                method: "GET"
            })
            if (data.code === 200) {
                setValueEdit(data.data.name)
            }
        }
        fetchCategoryById()
    }, [])

    const submitEditCategory = async (e) => {
        e.preventDefault();
        const { data } = await apiInstance({
            url: `/category/update/${id}`,
            method: "PUT",
            data: { name_category: valueEdit }
        })
        if (data.code === 200) {
            toast.success(`${data.status}`)
            setTimeout(() => {
                history.push("/admin/product/category")
            }, 2000);

        } else {
            toast.error(`Status_code: ${data.code}...!`)
        }
    }

    return (
        <div className="product_category_edit_form">
            <div className="form_title">Edit Category Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Category Name</label>
                        <input type="text" className="form-control" placeholder="Name Category Product" onChange={(e) => setValueEdit(e.target.value)} value={valueEdit} />
                    </div>
                </div>
                <div style={{ textAlign: "center" }} onClick={submitEditCategory}>
                    <button className="btn_submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Index
