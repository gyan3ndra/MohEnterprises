import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  const contactdetails = [
    {
      title: 'Phone',
      content: '+91 8183173197'
    },
    {
      title: 'Email',
      content: 'mohchuttad69@gandmail.com'
    },
    {
      title: 'Head Office',
      content: 'rb-road randikhana, room number 5'
    },
    {
      title: 'Working Hours',
      content: 'monday-friday 24/7 on bed'
    }
  ]
  return (
    <section className='pt-24 min-h-screen relative p-4 sm:p-6 lg:p-10'>
      <section className='max-w-7xl mx-auto p-0 sm:p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
        <div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl leading-tight font-bold'>Lets Start A Converstaion!</h1>
          <p className='text-md md:text-lg font-light'>Have questions about solar panels, pricing, or installation? Give us a call and our team will help you out.</p>
          <div className='w-full p-1 md:p-3 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
              contactdetails.map((e) => {
                return (
                  <div key={e.title} className='min-w-0'>
                    <h3 className='font-bold text-slate-900 text-lg md:text-2xl'>{e.title}</h3>
                    <p className='wrap-break-words font-light text-sm md:text-md text-slate-600'>{e.content}</p>
                  </div>
                )
              })
            }
          </div>
          <p className='font-light text-md md:text-lg mt-3'>Tell us about your home or business and get a personalized solar solution based on your energy needs.</p>
          <a className='text-lg md:text-lg font-light text-blue-700 hover:text-blue-900' href="">Get a Solar Estimate</a>
        </div>
        <div className='flex justify-center w-full p-0 sm:p-2'>
          <div className='w-full max-w-xl bg-white p-3 sm:p-5 gap-3 flex flex-col shadow-md border-blue-400 md:border-b-10 md:border-r-10 rounded-2xl'>
            <h3 className='text-center font-bold text-3xl mb-3'>Contact Us</h3>
            <span className='grid grid-cols-1 sm:grid-cols-2 gap-3 *:p-3 *:focus:outline-0'>
              <input className='min-w-0 w-full h-13 border rounded-md' type="text" placeholder='first name' />
              <input className='min-w-0 w-full h-13 border rounded-md' type="text" placeholder='last name' />
            </span>
            <input className='w-full h-13 focus:outline-0 border rounded-md p-3' type="text" placeholder='email' />
            <textarea className='w-full min-h-35 focus:outline-0 border p-3' placeholder='How can we help?'></textarea>
            <button className='text-white p-4 w-full hover:bg-black bg-gray-900 cursor-pointer hover:scale-101 transition-all duration-200'>Submit</button>
          </div>
        </div>
      </section>
      {/* <div className='absolute bottom-4 left-1/2 -translate-x-1/2'>
        <ul className='flex gap-10 *:rounded-full *:cursor-pointer'>
        <li className='h-5 w-5'><NavLink className={({ isActive }) => isActive ? 'bg-amber-600' : 'bg-blue-300'} to='/contact'></NavLink></li>
        <li className='h-5 w-5 bg-amber-50'><NavLink to='contact/get-in-touch'></NavLink></li>
        <li className='h-5 w-5 bg-amber-50'><NavLink to='/contact/info'></NavLink></li>
      </ul>
      </div> */}
    </section>
  )
}

export default Contact