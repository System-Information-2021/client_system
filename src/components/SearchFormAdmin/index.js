import React, { useState } from 'react'
import "./index.css"

const Index = ({ title, setState }) => {

    return (
        <div className="search_from_admin">
            <form>
                <input type="text" placeholder={title === "bill" ? "search email" : `search ${title}`} onChange={e => setState(e.target.value)} />
            </form>
        </div>
    )
}

export default Index
