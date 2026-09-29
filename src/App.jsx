import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [page, setPage] = useState(() => window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => setPage(window.location.pathname)

    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path)
    setPage(path)
  }

  const renderPage = () => {
    if (page === '/about') return <About />
    if (page === '/contact') return <Contact />
    return <Home />
  }

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      {renderPage()}
    </>
  )
}

export default App
