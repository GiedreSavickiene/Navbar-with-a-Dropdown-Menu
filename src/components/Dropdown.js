import React, { useState } from 'react'
import { serviceDropdown } from '../items/NavItems'
import { Link } from 'react-router-dom'
import '../styles/Dropdown.css'

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
                {serviceDropdown.map((item) =>
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName}
                            onClick={() => setDropdown(false)}
                        >
                            {item.title}</Link>
                    </li>
                )}

            </ul>

        </>
    )
}

export default Dropdown
