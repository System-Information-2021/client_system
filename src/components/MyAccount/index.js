import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="my_account">
            <div className="title">My Account</div>
            <form>
                <div className="form-row row">
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control" placeholder="Repeat password" />
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Company" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Comment" />
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button type="submit" className="btn submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Index
