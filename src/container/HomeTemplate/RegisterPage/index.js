import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import apiInstance from '../../../services'
import Swal from 'sweetalert2'

import "./index.css"

const Index = () => {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [company, setCompany] = useState("")
    const [address, setAddresss] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState()
    const [comment, setComment] = useState("")



    const disableButton = email.trim() === "" || password.trim() === "" || repassword.trim() === ""

    const handleSubmitRegister = async (e) => {

        e.preventDefault();
        try {
            const { data } = await apiInstance({
                url: "/register",
                method: "POST",
                data: {
                    firstname, lastname, password, email: email.toLowerCase(), mobile_number: phone, re_password: repassword, company, comment, address, city
                }
            })

            if (data.code === 201) {
                Swal.fire(
                    'Good job! Register Successully',
                    'You clicked the button!',
                    'success'
                )
                setTimeout(() => {
                    history.push("/login")
                }, 3000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message,
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }

    return (
        <form className="container form_register">
            <div className="register__title">Create Account</div>
            <div className="new_customer">New Customer</div>
            <div className="form-row row">
                <div className="form-group col-md-4">
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <input type="password" className="form-control" placeholder="Repeat password" onChange={(e) => setRePassword(e.target.value)} />
                </div>
            </div>
            <div className="new_infor">Information Customer</div>
            <div className="form-row row">
                <div className="form-group col-md-6">
                    <input type="email" className="form-control" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Address" onChange={(e) => setAddresss(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
                </div>
            </div>
            <button type="submit" className="btn_register" onClick={handleSubmitRegister} disabled={disableButton}>Register</button>
        </form>
    )
}

export default Index
