import React, { useState, useEffect } from 'react'
import useUser from "../../hook/useUser"
import "./index.css"

const Index = () => {
    const user = useUser();
    const [email, setEmail] = useState(user.data.email)
    const [password, setPassword] = useState("")
    const [resetPassword, setResetPassword] = useState("")

    return (
        <div className="my_account">
            <div className="title">My Account</div>
            <form>
                <div className="form-row row">
                    <div className="form-group col-md-12">
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="password" className="form-control" placeholder="Repeat password" onChange={(e) => setResetPassword(e.target.value)} value={resetPassword} />
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
