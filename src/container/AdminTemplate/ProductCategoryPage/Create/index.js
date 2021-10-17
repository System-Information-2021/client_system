import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="create_category_product_form">
            <div className="form_title">Create New Category Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Category Name</label>
                        <input type="text" className="form-control" placeholder="Name Category Product" />
                    </div>
                </div>
            </form>
            <div style={{ textAlign: "center" }}>
                <button className="btn_submit">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Index
