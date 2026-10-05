import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { whatsappUrl } from './Partition'
import externallinkimg from '../assets/externallink.png'

const Contact = () => {
  const contactdetails = [
    {
      title: 'Phone​',
      content:`${import.meta.env.VITE_PHONE}`
    },
    {
      title: 'Email',
      content:`${import.meta.env.VITE_EMAIL}`
    },
    {
      title: 'Head Office​',
      content: 'rb-road randikhana, room number 5'
    },
    {
      title: 'Working Hours',
      content: 'monday-friday 24/7 on bed'
    }
  ]
  const [input,setinput] = useState({
    firstname:'',
    lastname:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    setinput(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <section className='pt-20 min-h-screen p-4 bg-white'>
      <section className='max-w-7xl mx-auto p-0 sm:p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
        <div>
          <h1 className='text-4xl sm:text-5xl pl-1 md:text-6xl leading-tight font-bold'>Lets Start A Converstaion!</h1>
          <p className='text-md md:text-lg pl-1 text-slate-800 font-light'>Have questions about solar panels, pricing, or installation? Give us a call and our team will help you out.</p>
          <div className='w-full p-1 md:p-3 mt-2 grid grid-cols-2 gap-4'>
            {
              contactdetails.map((e) => {
                return (
                  <div key={e.title} className='relative bg-slate-200/50 min-w-0 rounded-b-2xl p-2'>
                    <div className='absolute top-0 left-0 w-full h-px bg-[#F87061]'></div>
                    <h3 className='font-bold text-slate-800 text-md pr-3 pl-3 w-fit rounded-md'>⸝⸝ {e.title}</h3>
                    <p className='wrap-break-words font-light text-[11px]  md:text-sm text-slate-600 pl-2 wrap-break-word'>{e.content}</p>
                  </div>
                )
              })
            }
          </div>
          <p className='font-light text-md md:text-lg mt-3 mb-2'>Tell us about your home or business and get a personalized solar solution based on your energy needs.</p>
          <a href={whatsappUrl} className='text-[14px] font-semibold bg-[#F87061] text-white hover:bg-orange-800 transition-all duration-300 p-2 pr-4 pl-4 rounded-md flex gap-2 w-fit items-center'>Get a Solar Estimate <img className='invert h-5 w-5' src={externallinkimg}/></a>
        </div>
        <div className='flex justify-center w-full p-0 sm:p-2'>
          <form className='w-full lg:w-[80%] max-w-xl bg-white p-3 sm:p-5 gap-3 flex flex-col shadow-lg shadow-slate-900/20 rounded-2xl'>
            <h3 className='text-center font-bold text-3xl mb-3'>Contact Us</h3>
            <span className='grid grid-cols-1 sm:grid-cols-2 gap-3 *:p-3 *:focus:outline-0'>
              <input onChange={handleChange} name='firstname' className='min-w-0 w-full h-13 border rounded-md' type="text" placeholder='First Name​' />
              <input onChange={handleChange} name='lastname' className='min-w-0 w-full h-13 border rounded-md' type="text" placeholder='Last Name​' />
            </span>
            <input onChange={handleChange} name='email' className='w-full h-13 focus:outline-0 border rounded-md p-3' type="text" placeholder='Email​' />
            <textarea onChange={handleChange} name='message' className='w-full min-h-35 focus:outline-0 border p-3' placeholder='How can we help?'></textarea>
            <button type='submit' className='text-white p-4 w-full hover:bg-[#ff513d] bg-[#F87061] rounded-md font-semibold cursor-pointer hover:scale-101 transition-all duration-200'>Submit</button>
          </form>
        </div>
      </section>
      
    </section>
  )
}

export default Contact