import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="edit_product_form">
            <div className="form_title">Edit Product</div>
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
                    <label className="my-1 mr-2" >Brand Product</label>
                    <select className="custom-select my-1 mr-sm-2" >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <label className="my-1 mr-2" >Category Product</label>
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
        </div>
    )
}

export default Index
