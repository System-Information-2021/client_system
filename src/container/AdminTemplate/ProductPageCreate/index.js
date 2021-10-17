import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="create_product_form">
            <div className="form_title">Create New Product</div>
            <form className="container">
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name Product" />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Price</label>
                        <input type="text" className="form-control" placeholder="Price Product Must be number" />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Quantity</label>
                        <input type="text" className="form-control" placeholder="Quantity product" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description Product</label>
                    <textarea className="form-control" rows="6"></textarea>
                </div>
                <div className="form-group">
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

                </div>
                <div class="form-group">
                    <label>image3</label>
                    <input type="file" class="form-control-file" />
                </div>
                <div class="form-group">
                    <label>image2</label>
                    <input type="file" class="form-control-file" />
                </div>
                <div class="form-group">
                    <label>Image 1</label>
                    <input type="file" class="form-control-file" />
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

export default index
