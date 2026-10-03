import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuimg from '../assets/menu.png'
//h
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // const navigate = (path) => {
  //   onNavigate(path)
  //   setMenuOpen(false)
  // }

  return (
    <header className='z-50 p-3 flex gap-10 items-center fixed top-0 w-full'>

      <nav className='flex bg-black/70 backdrop-blur-lg w-fit p-2 items-center rounded-full gap-5 md:gap-10'>
        <div className='h-9 w-9 rounded-full bg-white font-semibold flex justify-center items-center'>M</div>
        <ul className=' text-slate-200 text-sm gap-10 *:hover:text-blue-300 *:cursor-pointer hidden md:flex'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/services'>Services</Link></li>
          {/* <li><button type='button' onClick={() => onNavigate('/contact')}>Contact</button></li> */}
        </ul>
        <div onClick={()=>{setMenuOpen(!menuOpen)}} className={`flex md:hidden w-10 h-10 ${menuOpen?'bg-white':'bg-white'} rounded-full cursor-pointer`}>
          <img className='w-full h-full p-2' src={menuimg} alt="" />
          {
            menuOpen && <ul className='absolute flex flex-col top-15 left-0 w-full h-fit bg-black/30 *:border-2 *:inset-shadow-[0_2px_4px_rgba(0,0,0,0.5)] *:border-black font-extrabold backdrop-blur-lg text-center *:h-fit text-slate-200 *:hover:text-blue-300 rounded-md *:bg-black/70 *:rounded-md *:backdrop-blur-lg p-2 gap-2 text-sm'>
              <li><Link className="block p-4" to='/'>Home</Link></li>
              <li><Link className="block p-4" to='/about'>About</Link></li>
              <li><Link className="block p-4" to='/contact'>Contact</Link></li>
              <li><Link className="block p-4" to='/products'>Products</Link></li>
              <li><Link className="block p-4" to='/services'>Services</Link></li>
            </ul>
          }
        </div>
        <a href={`tel:${import.meta.env.VITE_PHONE}`} className="relative flex items-center font-semibold overflow-hidden bg-white rounded-full px-5 h-9 cursor-pointer text-sm font-mono group">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            {import.meta.env.VITE_PHONE}
          </span>

          <span className="absolute inset-y-0 left-0 w-0 bg-[#F87061] transition-all duration-700 ease-in-out group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  )
}

export default Navbar