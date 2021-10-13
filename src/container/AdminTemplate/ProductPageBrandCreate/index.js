import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="create_brand_product_form">
            <div className="form_title">Create New Product</div>
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
