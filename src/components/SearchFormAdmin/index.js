import React, { useState } from 'react'
import "./index.css"

const Index = ({ title, setState }) => {

    return (
        <div className="search_from_admin">
            <form className="form">
                <input type="text" placeholder={title === "bill" ? "Search Email" : `Search ${title}`} onChange={e => setState(e.target.value)} />
            </form>
        </div>
    )
}

export default Index
