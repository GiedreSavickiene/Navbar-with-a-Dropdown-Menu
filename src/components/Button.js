import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Button.css'

const Button = () => {
    return (
        <Link to='singup'>
            <button className='btn'>Sign Up</button>
        </Link>
    )
}

export default Button
