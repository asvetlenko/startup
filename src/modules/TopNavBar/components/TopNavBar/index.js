import React from 'react'
import { Link } from 'react-router-dom'

import './style.less'

const NavBar = () => (
    <div className="nav-bar">
        <div>
            <Link to="/">Home</Link>
            <Link to="/hello">Hello</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/users">Users</Link>
        </div>
    </div>
)

export default NavBar
