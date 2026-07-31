import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className = "px-12 justify-between bg-blue-500 w-full h-[40px] flex">
        <div className='flex' >Zensho</div>
        <ul className='flex gap-15'>
            <li>Home</li>
        <li><Link to="/about">About</Link></li>
            <li>contact</li>
            <li>dashboard</li>
        </ul>
    </nav>
   
  )
}

export default Navbar