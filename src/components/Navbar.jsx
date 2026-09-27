import React from 'react'

const Navbar = () => {
  return (
    <nav className='z-50 h-13 p-3 bg-slate-950 flex gap-10 items-center fixed top-0 w-full'>
        <div className='h-9 w-9 rounded-full'></div>
        <ul className='flex text-slate-200 text-sm font-semibold gap-10 *:hover:text-blue-300 *:cursor-pointer'>
            <li>Home</li>
            <li>Contact</li>
            <li>Products</li>
            <li>Services</li>
        </ul>
    </nav>
  )
}


export default Navbar