import React from 'react'
import msgimg from '../assets/msg.png'
import sunimg from '../assets/sun.png'

const Home = () => {
    return (
        <section className='bg-slate-100 h-screen pt-13'>
            <section className='flex flex-col items-center justify-center h-[65vh]'>
                <div className='p-3'>
                    <span className='flex gap-10 justify-center w-full items-center'>
                        <h1 className='text-[#2F2F2F] text-5xl lg:text-8xl font-extrabold'>MOH</h1>
                        <button className='lg:p-5 p-3 h-10 justify-center items-center gap-5 lg:gap-9 flex lg:h-15 rounded-md bg-[#F87061] text-white font-bold text-sm lg:text-md cursor-pointer transition-all duration-300 hover:bg-[#FF5745]'>Lets Start A Talk! <img className='w-7 h-7 lg:w-10 lg:h-10 invert' src={msgimg} /></button>
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
    )
}


export default Home