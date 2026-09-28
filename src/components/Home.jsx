import React from 'react'
import { useState } from 'react'
import msgimg from '../assets/msg.png'
import sunimg from '../assets/sun.png'
import s1 from '../assets/logo/s1.png'
import s2 from '../assets/logo/s2.png'
import s3 from '../assets/logo/s3.png'
import s4 from '../assets/logo/s4.png'
import s5 from '../assets/logo/s5.png'
import s6 from '../assets/logo/s6.png'

const Home = () => {
    const logo = [s6,s5,s3,s4,s2,s1]
    return (
        <>
            <section className='bg-white h-screen pt-13'>
                <section className='flex flex-col items-center justify-center h-[65vh]'>
                    <div className='p-3'>
                        <span className='flex gap:7 md:gap-10 justify-center w-full items-center'>
                            <h1 className='text-[#2F2F2F] text-5xl lg:text-8xl font-extrabold'>MOH</h1>
                            <button className='animate-pop-in lg:p-5 p-3 h-10 justify-center items-center gap-5 lg:gap-9 flex lg:h-15 rounded-md bg-[#F87061] text-white font-bold text-sm lg:text-md cursor-pointer transition-all duration-800 hover:bg-[#ba4b3e]'>Lets Start A Talk! <img className='w-7 h-7 lg:w-10 lg:h-10 invert' src={msgimg} /></button>
                        </span>
                        <h1 className='text-[#2F2F2F] text-5xl lg:text-8xl font-extrabold'>ENTERPRISES</h1>
                        <p className='lg:text-lg text-slate-500 font-light'>Smart solar solutions designed to maximize your energy independence and lifetime savings.</p>
                    </div>
                </section>
                <section className='grid grid-cols-1 lg:grid-cols-3 h-100 lg:h-[25vh] p-4 gap-5'>
                    <div className='bg-red-300 h-full'></div>
                    <div className='bg-blue-300 h-full'></div>
                    <div className='bg-green-300 h-full'></div>
                </section>
            </section>
            <section className='bg-gray-100 h-20 flex justify-between p-2 pl-10 pr-10'>
                {
                    logo.map((e)=>{
                        return(
                            <img src={e} alt="" />
                        )
                    })
                }
            </section>
            <section className='bg-slate-100 h-fit pt-10 pb-10 *:mt-10'>
                <div className='relative w-150 h-80 bg-red-300 p-4 flex justify-end'>
                    <div className='absolute bg-white h-60 w-90 rounded-2xl top-0 right-0 translate-x-30 translate-y-10'></div>
                </div>
                <div className='relative p-4 w-150 h-80 bg-blue-300 place-self-end'>
                    <div className='absolute bg-white h-60 w-90 rounded-2xl top-0 left-0 -translate-x-30 translate-y-10'></div>
                </div>
                <div className='relative p-4 w-150 h-80 bg-yellow-300 flex justify-end'>
                    <div className='absolute bg-white h-60 w-90 rounded-2xl top-0 right-0 translate-x-30 translate-y-10'></div>
                </div>
                <div className='relative p-4 w-150 h-80 bg-green-300 place-self-end'>
                    <div className='absolute bg-white h-60 w-90 rounded-2xl top-0 left-0 -translate-x-30 translate-y-10'></div>
                </div>
            </section>
        </>
    )
}


export default Home