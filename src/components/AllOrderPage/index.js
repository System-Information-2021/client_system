import React, { useState, useEffect } from 'react'
import "./index.css"
import Pagination from "react-pagination-library";

const Index = () => {
    const [status, setStatus] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    }

    useEffect(() => {

    }, [])
    return (
        <div className="page_order">
            <div className="header_order">
                <ul>
                    <li onClick={() => setStatus("all")}>All</li>
                    <li onClick={() => setStatus("pending")}>Pending</li>
                    <li onClick={() => setStatus("received")}>Received</li>
                    <li onClick={() => setStatus("delivering")}>Delivering</li>
                    <li onClick={() => setStatus("delivered")}>Delivered</li>
                    <li onClick={() => setStatus("cancel")}>Cancel</li>
                </ul>
            </div>
            <div className="main_order">
                <div className="list_order">

                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPage}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
            />
        </div>
    )
}

export default Index
