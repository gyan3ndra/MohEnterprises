import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='z-50 p-3 flex gap-10 items-center fixed top-0 w-full'>

      <nav className='flex bg-black/70 backdrop-blur-lg w-fit p-2 items-center rounded-full gap-10'>
        <div className='h-9 w-9 rounded-full bg-white font-semibold flex justify-center items-center'>M</div>
        <ul className='flex text-slate-200 text-sm gap-10 *:hover:text-blue-300 *:cursor-pointer'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li>Services</li>
        </ul>
        {/* <button className='bg-white rounded-full pl-5 pr-5 h-9 cursor-pointer text-sm font-mono'>
          +91 98XXXXXXXX
        </button> */}
        <button className="relative overflow-hidden bg-white rounded-full px-5 h-9 cursor-pointer text-sm font-mono group">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            +91 98XXXXXXXX
          </span>

          <span className="absolute inset-y-0 left-0 w-0 bg-[#F87061] transition-all duration-700 ease-in-out group-hover:w-full"></span>
        </button>
      </nav>
    </header>
  )
}


export default Navbar