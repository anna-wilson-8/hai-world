import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className="container-nav">
            <h1>LOGO</h1>
          <nav>
            <ul>
            <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home</NavLink>
            </li>
            <li>
            <NavLink  className={({isActive}) => isActive ? "active" : ""} to="/about">About</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to="/contact">Contact</NavLink>
            </li>
            
            </ul>
          </nav>
        </div>
    )
    }

export default Nav
