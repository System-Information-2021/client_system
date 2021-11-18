import React from 'react'
import "./index.css"

const Index = ({ title }) => {
    console.log(title)
    return (
        <div className="search_from_admin">
            <form>
                <input type="text" placeholder="search item" />
            </form>
        </div>
    )
}

export default Index
