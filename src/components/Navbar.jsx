import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onNavigate }) => {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const navigate = (path) => {
  //   onNavigate(path)
  //   setMenuOpen(false)
  // }

  return (
    <header className='z-50 p-3 flex gap-10 items-center fixed top-0 w-full'>

      <nav className='flex bg-black/70 backdrop-blur-lg w-fit p-2 items-center rounded-full gap-10'>
        <div className='h-9 w-9 rounded-full bg-white font-semibold flex justify-center items-center'>M</div>
        <ul className='flex text-slate-200 text-sm gap-10 *:hover:text-blue-300 *:cursor-pointer'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/Products'>Products</Link></li>
          <li>Services</li>
          {/* <li><button type='button' onClick={() => onNavigate('/contact')}>Contact</button></li> */}
        </ul>
        <a className='site-nav-phone' href='tel:+919800000000'>+91 98XXXXXXXX</a>
      </nav>
    </header>
  )
}

export default Navbar