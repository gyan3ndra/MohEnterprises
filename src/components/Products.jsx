import React from 'react'
import panelimg from '../assets/products/panel.jpg'
import wireimg from '../assets/products/wire.jpg'
import inverterimg from '../assets/products/inverter.jpg'
import structureimg from '../assets/products/structure.jpg'

const Products = () => {
  return (
    <section className='min-h-screen bg-white pt-20'>
      <section className='mt-0 m-5 md:m-10 rounded-2xl bg-black h-100'></section>
      <h1 className='font-bold text-4xl text-center text-gray-900'>Available Products</h1>
      <p className='text-lg font-light text-center text-gray-800'>Power Your Future with Solar</p>
      <section className='m-2 md:m-5 h-200 md:h-150 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5'>
        <div className='h-3/4 w-full bg-red-300 p-2'>
          <div className='w-full bg-white h-1/2'><img src={panelimg} className='w-full h-full object-contain'/></div>
        </div>
        <div className='h-3/4 w-full bg-blue-300 place-self-end p-2'>
          <div className='w-full bg-white h-1/2'><img src={wireimg} className='w-full h-full object-contain'/></div>
        </div>
        <div className='h-3/4 w-full bg-green-300 p-2'>
          <div className='w-full bg-white h-1/2'><img src={structureimg} className='w-full h-full object-contain'/></div>
        </div>
        <div className='h-3/4 w-full bg-yellow-300 place-self-end p-2'>
          <div className='w-full bg-white h-1/2'><img src={inverterimg} className='w-full h-full object-contain'/></div>
        </div>

      </section>
    </section>
  )
}

export default Products