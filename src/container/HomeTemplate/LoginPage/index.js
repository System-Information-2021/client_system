import React from 'react'
import "./index.css"

const index = () => {
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
                            <div class="form-group ">
                                <input type="text" class="form-control" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <button className="btn_login" type="submit"><ion-icon name="log-in"></ion-icon> Login</button>
                        <button className="btn_reset_form" type="reset"> <ion-icon name="refresh-outline"></ion-icon> reset form</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index
