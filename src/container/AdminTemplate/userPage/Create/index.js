import React from 'react'
import "./index.css"

const Index = () => {
    return (
        <div className="user_add">
            <div className="title">Add User Admin</div>
            <div className="form_add">
                <form>
                    <div className="form-group" >
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">This is email with role for admin.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px', color: "#ffffff" }}>
                        <button type="submit" className="btn submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Index
