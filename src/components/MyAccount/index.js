import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import useUser from "../../hook/useUser"
import apiInstance from "../../services/index"
import "./index.css"

const Index = () => {
    const user = useUser();
    const [email, setEmail] = useState(user.data.email)
    const [password, setPassword] = useState("")
    const [resetPassword, setResetPassword] = useState("")

    const changePassword = async (e) => {
        e.preventDefault();
        if (password === "" || resetPassword === "") {
            toast.warning("input value not null...!")
            return;
        }
        const { data } = await apiInstance({
            url: `/user/${user.data.id}/change-password`,
            method: "POST",
            data: {
                email: user.data.email,
                password: password,
                re_password: resetPassword
            }
        })
        console.log(data)
        if (data.code === 200) {
            toast.success(data.message)
            localStorage.clear()
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error(data.message)
        }

    }


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
                    <button type="submit" className="btn submit" onClick={changePassword}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Index
