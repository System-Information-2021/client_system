import React, { useState, useEffect } from 'react'
import apiInstance from '../../services/index'
import useUser from '../../hook/useUser'
import { toast } from "react-toastify"
import "./index.css"

const Index = () => {
    const user = useUser();

    const [firstname, setFirstName] = useState(user?.data.firstname)
    const [lastname, setLastName] = useState(user?.data.lastname)
    const [phone, setPhone] = useState(user?.data.mobile_number)
    const [address, setAddress] = useState(user?.data.address)
    const [city, setCity] = useState(user?.data.city)
    const [comment, setComment] = useState(user?.data.comment)
    const [company, setCompany] = useState(user?.data.company)

    const changeInforUser = async (e) => {
        e.preventDefault()
        if (firstname === "" || lastname === "" || phone === "" || address === "" || city === "") {
            toast.warning("please enter all input")
            return;
        }
        const { data } = await apiInstance({
            url: `/user/${user.data.id}/update`,
            method: "PUT",
            data: {
                firstname, lastname, mobile_number: phone, address, city, comment, company
            }
        })
        if (data.code === 200) {
            toast.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {
            toast.error(data.message)
        }
    }


    return (
        <div className="personal">
            <div className="personal_title">Personal</div>
            <form>
                <div className="form-row row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastname} />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Company" onChange={(e) => setCompany(e.target.value)} value={company} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} value={city} />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Comment" onChange={(e) => setComment(e.target.value)} value={comment} />
                    </div>
                </div>
            </form>
            <div style={{ textAlign: 'center' }}>
                <button className="btn submit" onClick={changeInforUser}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Index
