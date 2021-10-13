import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="product_brand_edit_form">
            <div className="form_title">Edit Brand Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Brand Name</label>
                        <input type="text" className="form-control" placeholder="Name Brand Product" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index
