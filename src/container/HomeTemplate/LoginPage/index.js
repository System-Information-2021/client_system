import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actLogin } from "../../../redux/User/user.actions"
import { useHistory } from 'react-router-dom'
import "./index.css"

const Index = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitValue = (e) => {
        e.preventDefault();
        dispatch(actLogin({ email, password }, history))
    }

    return (
        <div className="form_login container">
            <div className="title_login">My Account</div>
            <div className="row">
                <div className="side_left col-12 col-md-6">
                    <div className="side_left--title">New Customer</div>
                    <p>If you don't have an account, please proceed by clicking the following button to continue first-time registration.</p>
                    <button className="btn_create_new_account">create new account</button>
                </div>

                <div className="side_right col-12 col-md-6">
                    <div className="side_left--title">RETURNING CUSTOMERS
                    </div>
                    <div className="please_login">Please log in to your account.
                    </div>
                    <form>
                        <div className="row">
                            <div className="form-group ">
                                <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn_login" onClick={submitValue} type="submit"><ion-icon name="log-in" ></ion-icon> Login</button>
                        <button className="btn_reset_form" type="reset"> <ion-icon name="refresh-outline"></ion-icon> reset form</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index
