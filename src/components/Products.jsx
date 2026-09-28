import React from 'react'

const Products = () => {
  return (
    <section className='min-h-screen bg-white pt-20'>
        <section className='mt-0 m-10 rounded-2xl bg-black h-100'></section>
        <h1 className='font-bold text-4xl text-center text-gray-900'>Available Products</h1>
        <p className='text-lg font-light text-center text-gray-800'>Power Your Future with Solar</p>
        <section className='m-5 h-150 grid grid-cols-4 gap-5'>
          <div className='h-3/4 w-full bg-red-300'></div>
          <div className='h-3/4 w-full bg-blue-300 place-self-end'></div>
          <div className='h-3/4 w-full bg-green-300'></div>
          <div className='h-3/4 w-full bg-yellow-300 place-self-end'></div>

        </section>
    </section>
  )
}

export default Products