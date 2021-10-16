import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actLogin } from "../../../redux/User/user.actions"
import { useHistory } from 'react-router-dom'
import "./index.css"
import useUser from '../../../hook/useUser'

const Index = () => {
    let history = useHistory();

    const loadingUser = useSelector(state => state.user.loading)
    const user = useUser()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const disableButton = email.trim() === "" || password.trim() === ""

    const submitValue = (e) => {
        e.preventDefault();
        dispatch(actLogin({ email: email.toLowerCase(), password }, history))
    }

    return (
        <div className="form_login container">
            <div className="title_login">My Account</div>
            <div className="row">
                <div className={user.data ? "side_left col-12 col-md-5" : "side_left col-12 col-md-6"}>
                    <div className="side_left--title">New Customer</div>
                    <p>If you don't have an account, please proceed by clicking the following button to continue first-time registration.</p>
                    <button className="btn_create_new_account" onClick={() => history.push("/register")}>create new account</button>
                </div>

                <div className={user.data ? "side_right col-12 col-md-7" : "side_right col-12 col-md-6"}>
                    {
                        user.data ? (<div className="list-group">
                            <button
                                type="button"
                                className="list-group-item list-group-item-dark"
                                aria-current="true"
                            >
                                INFORMATION
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                Email: {user.data.email || "not provided"}
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                First Name: {user.data.firstname || "not provided"}
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                Last Name: {user.data.lastname || "not provided"}
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                Address: {user.data.address || "not provided"}
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                City: {user.data.city || "not provided"}
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                Company: {user.data.company || "not provided"}
                            </button>

                            <button type="button" className="list-group-item list-group-item-action">
                                Mobile Phone: {user.data.mobile_number || "not provided"}
                            </button>
                        </div>
                        ) : (<>
                            <div className="side_left--title">RETURNING CUSTOMERS
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
                                <button className="btn_login" onClick={submitValue} type="submit" disabled={disableButton}><ion-icon name="log-in" ></ion-icon> {loadingUser === true ? "loading..." : "Login"}</button>
                                <button className="btn_reset_form" type="reset"> <ion-icon name="refresh-outline"></ion-icon> reset form</button>
                            </form>
                        </>

                        )
                    }




                </div>
            </div>
        </div>
    )
}

export default Index
