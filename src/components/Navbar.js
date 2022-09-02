import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { GiBonsaiTree } from 'react-icons/gi'
import { navItems } from '../items/NavItems'
import Button from './Button'
import Dropdown from './Dropdown'
import { useState } from 'react'


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
                    NATURE <GiBonsaiTree />
                </Link>
                <ul className='nav-items'>
                    {navItems.map((item) => {
                        if (item.title === 'Winter') {
                            return (
                                <li key={item.id} className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>
                                        {item.title}</Link>
                                    {dropdown && <Dropdown />}
                                </li>)
                        }
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    }
                    )}
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar
