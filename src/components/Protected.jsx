import React, { memo,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = () => {
  const navigate = useNavigate()
  const [password,setpassword] = useState('')
  const handlesubmit = async (e)=>{
    e.preventDefault()
    if (!password) return
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/protected`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({password})
    })
    // localStorage.removeItem('admin')
    const data = await res.json()
    if (data.redirect===true) {
      localStorage.setItem('admin', true)
      navigate('/admin')
      return
    }
  }
  const handlechange = (e)=>{
    setpassword(e.target.value)
  }
  return (
    <section className='bg-slate-950 h-screen p-4'>
        <form onSubmit={handlesubmit} className='w-80 h-fit p-3 mx-auto'>
            <input onChange={handlechange} placeholder='password' className='p-4 bg-white w-full focus:outline-0' type="text" />
            <button type='submit' className='bg-red-500 cursor-pointer text-white w-full p-4 mt-2'>ENTER</button>
        </form>
    </section>
  )
}

export default Protected