import React from 'react'
import "./index.css"

const index = () => {
    return (

        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>

    )
}

export default index
