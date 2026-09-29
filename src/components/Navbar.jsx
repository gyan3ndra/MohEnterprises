import React, { useState } from 'react'

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (path) => {
    onNavigate(path)
    setMenuOpen(false)
  }

  return (
    <header className='site-nav'>
      <nav className='site-nav-inner'>
        <button className='site-nav-brand' type='button' onClick={() => navigate('/')} aria-label='MOH Enterprises home'>M</button>
        <button
          className='site-nav-toggle'
          type='button'
          aria-expanded={menuOpen}
          aria-controls='site-nav-links'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <ul id='site-nav-links' className={`site-nav-links ${menuOpen ? 'is-open' : ''}`}>
          <li><button type='button' onClick={() => navigate('/')}>Home</button></li>
          <li><button type='button' onClick={() => navigate('/about')}>About</button></li>
          <li>Products</li>
          <li>Services</li>
          <li><button type='button' onClick={() => navigate('/contact')}>Contact</button></li>
          
        </ul>
        <a className='site-nav-phone' href='tel:+919800000000'>+91 98XXXXXXXX</a>
      </nav>
    </header>
  )
}

export default Navbar