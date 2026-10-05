import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


function App() {
  // const [page, setPage] = useState(() => window.location.pathname)

  // useEffect(() => {
  //   const handleLocationChange = () => setPage(window.location.pathname)

  //   window.addEventListener('popstate', handleLocationChange)
  //   return () => window.removeEventListener('popstate', handleLocationChange)
  // }, [])

  // const handleNavigate = (path) => {
  //   window.history.pushState({}, '', path)
  //   setPage(path)
  // }

  // const renderPage = () => {
  //   if (page === '/about') return <About />
  //   if (page === '/contact') return <Contact />
  //   return <Home />
  // }

  return (
    <section className=''>
      {/* <Navbar onNavigate={handleNavigate} />
      {renderPage()} */}
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </section>
  )
}

export default App
