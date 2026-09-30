import React, { useState } from 'react'
import { useRef } from 'react'
import panelimg from '../assets/products/panel.jpg'
import Footer from './Footer'

const Preview = () => {
  const [color, setcolor] = useState('bg-white shadow-md')
  const images = [{ color: 'bg-red-300' }, { color: 'bg-blue-300' }, { color: 'bg-green-300' }, { color: 'bg-yellow-300' }]
  return (
    <section className='pt-15 h-screen'>
      <section className='bg-slate-900 rounded-2xl min-h-120 m-5 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col p-3 h-full gap-3'>
          <div className={`h-100 w-full ${color}`}>
            <img
              className='h-full w-full object-contain'
              src={panelimg}
              alt=""
            />
          </div>
          <div className='flex gap-5 justify-center w-full'>
            {
              images.map((e) => {
                return (<div key={e} onClick={() => { setcolor(e.color) }} className={`cursor-pointer w-10 h-10 ${e.color}`}></div>)
              })
            }
          </div>
        </div>
        <div className='h-full bg-slate-50 p-3 flex flex-col gap-3 scrollbar-thin lg:pl-5 '>
          <div className='h-fit'>
            <h3 className='text-3xl font-bold tracking-tight text-slate-800 '>Find the right panel for your solar setup</h3>
            <p className='font-light text-md mt-1 mb-2'>Explore our available panel models and specifications.</p>
            <a className='font-semibold font-mono bg-blue-500 text-white p-2 rounded-md' href="">View Panels →</a>
          </div>
          {/* <div className='grid-cols-2 grid gap-2'>
            <div className='h-30 bg-red-400'></div>
            <div className='h-30 bg-blue-400'></div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-1">

            {/* TOPCon */}
            <div className="h-fit rounded-2xl bg-slate-800 text-white p-4">
              <h3 className="text-lg font-semibold mb-1">TOPCon</h3>
              <p className="text-[12px] leading-relaxed font-light text-white">
                High-efficiency solar technology with low energy loss,
                excellent durability, and strong performance in hot weather.
              </p>
            </div>

            {/* HJT */}
            <div className="h-fit rounded-2xl bg-slate-800 text-white p-4">
              <h3 className="text-xl font-semibold mb-1">HJT</h3>
              <p className="text-[12px] leading-relaxed font-light text-white">
                Advanced solar technology offering high efficiency,
                excellent temperature performance, and better low-light output.
              </p>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-semibold text-center font-mono'>Power Output → <span className='text-slate-700 font-extrabold text-2xl'>550W</span></h2>
            <h2 className='text-lg font-semibold text-center font-mono'>Warranty → <span className='text-slate-700 font-extrabold text-2xl'>10 Years</span></h2>
          </div>
          <div className='flex mt-auto justify-between items-center border-t border-b border-gray-200'>
            <h1 className='text-gray-900 text-4xl font-extrabold'>100% OFF</h1>
            <a className='relative w-1/2 bg-slate-900 text-white font-semibold overflow-hidden group p-4 text-center' href="">
              <span className='z-5 text-white font-semibold relative group-hover:text-black'>
                Contact Us
              </span>
              <span className='absolute top-0 w-0 left-0 bg-gray-400 h-full group-hover:w-full transition-all duration-500'></span>
            </a>
          </div>
        </div>
      </section>
      <section className='p-2 w-full place-items-center grid grid-cols-2 md:w-fit md:grid-cols-4 gap-2'>
        <div className='h-60 w-45 bg-red-300'></div>
        <div className='h-60 w-45 bg-blue-300'></div>
        <div className='h-60 w-45 bg-green-300'></div>
        <div className='h-60 w-45 bg-yellow-300'></div>
      </section>
      <Footer />
    </section>
  )
}

export default Preview