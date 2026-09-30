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
          <li><Link to='/Products'>Products</Link></li>
          <li>Services</li>
          {/* <li><button type='button' onClick={() => onNavigate('/contact')}>Contact</button></li> */}
        </ul>
        <div onClick={()=>{setMenuOpen(!menuOpen)}} className={`flex md:hidden w-10 h-10 ${menuOpen?'bg-slate-950/50':'bg-slate-950/30'} rounded-full cursor-pointer`}>
          <img className='w-full h-full p-2 invert' src={menuimg} alt="" />
          {
            menuOpen && <ul className='absolute flex flex-col top-15 left-0 w-full h-fit bg-black/70 backdrop-blur-lg text-center *:h-fit *:p-4 text-slate-200 *:hover:text-blue-300 rounded-md *:bg-slate-950/20 *:rounded-md font-semibold *:backdrop-blur-lg p-2 gap-2 text-sm'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/Products'>Products</Link></li>
              <li>Services</li>
            </ul>
          }
        </div>
        <a className="relative flex items-center overflow-hidden bg-white rounded-full px-5 h-9 cursor-pointer text-sm font-mono group">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            +91 98XXXXXXXX
          </span>

          <span className="absolute inset-y-0 left-0 w-0 bg-[#F87061] transition-all duration-700 ease-in-out group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  )
}

export default Navbar