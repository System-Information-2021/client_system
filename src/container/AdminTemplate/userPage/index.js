import React from 'react'
import { useHistory } from 'react-router-dom'
import "./index.css"

const Index = () => {
    let history = useHistory();

    return (
        <div className="user_page">
            <div className="admin_user_header">
                <div className="title">All Users</div>
                <div className="admin_user_new" onClick={() => history.push("/admin/user/add")}>New User</div>
            </div>

            <div className="user_list">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Admin</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Index
