import React from 'react'
import {Link } from 'react-router-dom';
function Nav() {
    return (
        <div className="nav">
            <h2>DashBoard</h2>
            <ul>
                <li>
                    <Link to="/tab1">Tab1</Link>
                </li>
                <li>
                <Link to="/tab2">Tab2</Link>
                </li>
                <li>
                <Link to="/tab3">Tab3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
