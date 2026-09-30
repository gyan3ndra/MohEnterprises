import React from 'react'
import { useState, useEffect } from 'react'
import panelimg from '../assets/products/panel.jpg'
import wireimg from '../assets/products/wire.jpg'
import inverterimg from '../assets/products/inverter.jpg'
import structureimg from '../assets/products/structure.jpg'
import distributionboximg from '../assets/products/otherproducts/distributionbox.jpg'
import batteryimg from '../assets/products/otherproducts/battery.jpg'
import accessoriesimg from '../assets/products/otherproducts/accessories.jpg'
import earthingkitimg from '../assets/products/otherproducts/earthingkit.jpg'
import pantyimg from '../assets/products/otherproducts/panty.jpg'
import { InverterContent, StructureContent, PanelContent, WireContent } from './ProductContent'
import Footer from './Footer'

const Products = () => {
  const [current, setCurrent] = useState(0);
  const otherproducts = [batteryimg, accessoriesimg, distributionboximg, earthingkitimg]
  const boxes = [
    { id: 1, color: "bg-red-400", text: "Box 1", img: pantyimg },
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

  const productcards = [
    {
      img: panelimg,
      color: 'bg-red-300',
      description: 'High-efficiency solar panels with durable construction, excellent sunlight absorption and reliable long-term performance',
      content: <PanelContent />,
      type: 'PANELS',
    },
    {
      img: wireimg,
      color: 'bg-green-300 place-self-end ',
      description: 'Premium copper solar wires with strong insulation, UV resistance and reliable outdoor performance',
      content: <WireContent />,
      type: 'WIRES',
    },
    {
      img: structureimg,
      color: 'bg-blue-300',
      description: 'Heavy-duty galvanized steel structure with corrosion resistance, strong support and long-lasting durability',
      content: <StructureContent />,
      type: 'STRUCTURES',
    },
    {
      img: inverterimg,
      color: 'bg-yellow-300 place-self-end ',
      description: 'Microtech grid tied D11 inverters LED display bluetooth connectivity',
      content: <InverterContent />,
      type: 'INVERTER',
    },
  ]


  return (
    <section className='min-h-screen bg-white md:pt-15 pt-20'>
      <section className='mt-0 m-3 md:m-10 rounded-2xl bg-slate-900 shadow-md min-h-110 lg:p-3 grid grid-cols-1 lg:grid-cols-2'>
        <div className="h-full p-2 flex flex-col justify-between gap-3 order-2 sm:order-1">

          <div className='grid grid-cols-2 gap-2 '>
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <div className=" bg-white h-32 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl scale-140 group-hover:scale-160 transition-all duration-300' src={otherproducts[0]} alt="" /></div>

              <div className="bg-white h-52 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl group-hover:scale-120 transition-all duration-300' src={otherproducts[1]} alt="" /></div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <div className="bg-white h-52 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl group-hover:scale-120 transition-all duration-300' src={otherproducts[2]} alt="" /></div>

              <div className="bg-white h-32 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 group overflow-hidden"><img className='w-full h-full object-contain rounded-2xl scale-140 group-hover:scale-160 transition-all duration-300' src={otherproducts[3]} alt="" /></div>
            </div>
          </div>
          <div className='w-full bg-white rounded-full h-full flex gap-2 sm:gap-3 items-center p-2'>
            <button  onClick={() => document.getElementById("mainproducts")?.scrollIntoView({behavior: "smooth"})
  } className='bg-slate-950 overflow-hidden p-2 w-35 sm:w-40 rounded-2xl text-sm text-white cursor-pointer group relative'>
              <span className="relative z-5 transition-colors duration-500 group-hover:text-white font-light">
                More Products
              </span>
              <span className='left-0 inset-y-0  absolute h-full bottom-0 bg-violet-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out'></span>
            </button>
            <button className='relative w-25 sm:w-30 rounded-2xl text-sm font-light h-full bg-violet-600 cursor-pointer text-white group overflow-hidden'>
              <span className='relative z-5'>
                Offers
              </span>
              <span className='absolute bg-slate-950 left-0 w-0 h-full top-0 group-hover:w-full transition-all duration-500'></span>

            </button>
          </div>
        </div>
        {/* grid 2 */}
        <div className='h-full flex justify-center items-center order-1 sm:order-2'>
          <div className="w-full lg:w-3/4 overflow-hidden rounded-md">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {boxes.map((box) => (
                <div key={box.id} className={`min-w-full h-80 ${box.color} flex items-center justify-center text-3xl font-bold`}>
                  <img className='w-full h-full  object-cover' src={box.img} alt="" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <h1 id='mainproducts' className='font-bold text-4xl text-center text-gray-900'>Available Products</h1>
      <p className='text-lg font-light text-center text-gray-800'>Power Your Future with Solar</p>
      <section className='m-2 md:m-5 min-h-200 sm:min-h-130 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 *:hover:scale-101 *:cursor-pointer *:transition-all *:duration-300'>
        {
          productcards.map((e) => {
            return (
              <div key={e.type} className={`h-90 sm:h-100 lg:h-120 w-full flex flex-col gap-2 ${e.color} p-2`}>
                <div className='w-full shrink-0 bg-white h-1/2'><img src={e.img} className='w-full h-full object-contain' /></div>
                <div className='flex-1 flex flex-col p-1 justify-between'>
                  <h3 className='text-[11px] md:text-sm'>{e.type}</h3>
                  <p className='text-gray-600 text-[7px] md:text-sm'>{e.description}</p>
                  {e.content}
                  <div className='flex justify-end'>
                    <a href={`/preview?type=${e.type}`} className='p-2 text-center md:p-3 relative cursor-pointer font-light bg-slate-900 w-1/2 text-sm group'>
                      <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black">
                        Preview
                      </span>

                      <span className="absolute inset-y-0 left-0 w-0 bg-gray-100 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }

      </section>
      <Footer />
    </section >
  )
}

export default Products