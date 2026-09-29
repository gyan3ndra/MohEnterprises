import React from 'react'
import { useState, useEffect } from 'react'
import panelimg from '../assets/products/panel.jpg'
import wireimg from '../assets/products/wire.jpg'
import inverterimg from '../assets/products/inverter.jpg'
import structureimg from '../assets/products/structure.jpg'

const Products = () => {
  const [current, setCurrent] = useState(0);
  const boxes = [
    { id: 1, color: "bg-red-400", text: "Box 1" },
    { id: 2, color: "bg-blue-400", text: "Box 2" },
    { id: 3, color: "bg-green-400", text: "Box 3" },
    { id: 4, color: "bg-purple-400", text: "Box 4" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % boxes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [boxes.length]);


  return (
    <section className='min-h-screen bg-white md:pt-15 pt-20'>
      <section className='mt-0 m-5 md:m-10 rounded-2xl bg-black h-110 lg:p-3 grid lg:grid-cols-2'>
        <div className="h-full p-2 flex flex-col justify-between gap-3">

          <div className='grid grid-cols-2 gap-2'>
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <div className="bg-red-400 h-32 rounded-xl">

              </div>

              <div className="bg-green-400 h-52 rounded-xl">

              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <div className="bg-blue-400 h-52 rounded-xl">

              </div>

              <div className="bg-purple-400 h-32 rounded-xl">

              </div>
            </div>
          </div>
          <div className='w-full bg-white rounded-2xl h-full flex items-center p-2'>
            <button className='bg-black p-4 md:p-2 w-40 rounded-2xl text-sm text-white cursor-pointer'>More Products</button>
          </div>
        </div>
        {/* grid 2 */}
        <div className='h-full flex justify-center items-center'>
          <div className="w-full lg:w-3/4 overflow-hidden rounded-2xl">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {boxes.map((box) => (
                <div
                  key={box.id}
                  className={`min-w-full h-80 ${box.color} flex items-center justify-center text-3xl font-bold`}
                >
                  {box.text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <h1 className='font-bold text-4xl text-center text-gray-900'>Available Products</h1>
      <p className='text-lg font-light text-center text-gray-800'>Power Your Future with Solar</p>
      <section className='m-2 md:m-5 h-200 md:h-150 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5'>
        <div className='h-3/4 w-full bg-red-300 p-2'>
          <div className='w-full bg-white h-1/2'><img src={panelimg} className='w-full h-full object-contain' /></div>
        </div>
        <div className='h-3/4 w-full bg-blue-300 place-self-end p-2'>
          <div className='w-full bg-white h-1/2'><img src={wireimg} className='w-full h-full object-contain' /></div>
        </div>
        <div className='h-3/4 w-full bg-green-300 p-2'>
          <div className='w-full bg-white h-1/2'><img src={structureimg} className='w-full h-full object-contain' /></div>
        </div>
        <div className='h-3/4 w-full bg-yellow-300 place-self-end p-2'>
          <div className='w-full bg-white h-1/2'><img src={inverterimg} className='w-full h-full object-contain' /></div>
        </div>

      </section>
    </section>
  )
}

export default Products