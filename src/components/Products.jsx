import React from 'react'
import { useState, useEffect } from 'react'
import panelimg from '../assets/products/panel.jpg'
import wireimg from '../assets/products/wire.jpg'
import msgimg from '../assets/msg.png'
import inverterimg from '../assets/products/inverter.jpg'
import structureimg from '../assets/products/structure.jpg'
import phoneimg from '../assets/phone.png'
import distributionboximg from '../assets/products/otherproducts/distributionbox.jpg'
import batteryimg from '../assets/products/otherproducts/battery.jpg'
import accessoriesimg from '../assets/products/structure.jpg'
import earthingkitimg from '../assets/products/otherproducts/earthingkit.jpg'
import packagebannerimg from '../assets/packagebanner.jpg'
import pantyimg from '../assets/products/otherproducts/panty.jpg'
import { InverterContent, StructureContent, PanelContent, WireContent } from './ProductContent'
import Footer from './Footer'
import { ContactPartition, ProductPartition, whatsappUrl } from './Partition'
import Package from './Package'
import ScrollCard from './ScrollCard'
import { button, p } from 'framer-motion/client'
import Kits from './Kits'

const Products = () => {
  const [current, setCurrent] = useState(0)
  const [products, setproducts] = useState([])
  const otherproducts = [batteryimg, accessoriesimg, distributionboximg, earthingkitimg]

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
      const data = await res.json()
      if (res.ok) {
        setproducts(data)
      }
      // console.log(data)
    }
    fetchproducts()
  }, [])
  const sliderProducts = products.filter(
    (e) => e.productType !== "structure"
  )
  useEffect(() => {
    if (sliderProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderProducts.length])

  const productcards = [
    {
      img: panelimg,
      color: 'bg-white',
      description: 'High-efficiency solar panels with durable construction, excellent sunlight absorption and reliable long-term performance',
      content: <PanelContent />,
      type: 'PANEL',
    },
    {
      img: wireimg,
      color: 'bg-white',
      description: 'Premium copper solar wires with strong insulation, UV resistance and reliable outdoor performance',
      content: <WireContent />,
      type: 'WIRE',
    },
    {
      img: structureimg,
      color: 'bg-white',
      description: 'Heavy-duty galvanized steel structure with corrosion resistance, strong support and long-lasting durability',
      content: <StructureContent />,
      type: 'STRUCTURE',
    },
    {
      img: inverterimg,
      color: 'bg-white',
      description: 'Microtek grid tied D11 inverters LED display bluetooth connectivity',
      content: <InverterContent />,
      type: 'INVERTER',
    },
    {
      img: batteryimg,
      color: 'bg-white',
      description: 'Microtek - protection and safe power distribution for solar systems.',
      type: 'BATTERY',
    },
    {
      img: distributionboximg,
      color: 'bg-white',
      description: 'Havells - Efficient energy storage for reliable solar backup and power supply. [DCDB,ACDB]',
      type: 'DISTRIBUTION-BOX',
    },
    {
      img: earthingkitimg,
      color: 'bg-white',
      description: 'Provides safe grounding and protection for solar systems and electrical equipment.',
      type: 'EARTHING-KIT',
    }
  ]


  return (
    <section className='min-h-screen bg-white md:pt-15 pt-20'>
      <section className='mt-0 m-3 md:m-10 rounded-2xl bg-slate-900 shadow-md min-h-110 lg:p-3 grid grid-cols-1 lg:grid-cols-2'>
        <div className="h-full p-2 flex flex-col justify-between gap-3 order-2 lg:order-1">

          <div className='grid grid-cols-2 gap-2 '>
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <a href={`/preview?type=BATTERY`} className=" bg-white h-32 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl group-hover:scale-120 transition-all duration-300' src={otherproducts[0]} alt="" /></a>

              <a href={`/preview?type=STRUCTURE`} className="bg-white h-52 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl group-hover:scale-120 transition-all duration-300' src={otherproducts[1]} alt="" /></a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <a href={`/preview?type=DISTRIBUTION-BOX`} className="bg-white h-52 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 overflow-hidden group"><img className='w-full h-full object-contain rounded-2xl group-hover:scale-120 transition-all duration-300' src={otherproducts[2]} alt="" /></a>

              <a href={`/preview?type=EARTHING-KIT`} className="bg-white h-32 rounded-xl hover:scale-101 cursor-pointer transition-all duration-300 group overflow-hidden"><img className='w-full h-full object-contain rounded-2xl scale-140 group-hover:scale-160 transition-all duration-300' src={otherproducts[3]} alt="" /></a>
            </div>
          </div>
          <div className='w-full bg-white rounded-full h-full flex gap-2 sm:gap-3 items-center p-2'>
            <button onClick={() => document.getElementById("mainproducts")?.scrollIntoView({ behavior: "smooth" })
            } className='bg-slate-900 overflow-hidden p-2 w-35 font-semibold sm:w-40 rounded-2xl text-sm text-white cursor-pointer group relative'>
              <span className="relative z-5 transition-colors duration-500 group-hover:text-white">
                More Products
              </span>
              <span className='left-0 inset-y-0  absolute h-full bottom-0 bg-slate-700 w-0 group-hover:w-full transition-all duration-700 ease-in-out'></span>
            </button>
            <button onClick={() => document.getElementById("PACKAGES")?.scrollIntoView({ behavior: "smooth" })} className='relative w-25 sm:w-30 font-semibold rounded-2xl text-sm h-full bg-slate-900 cursor-pointer text-white group overflow-hidden'>
              <span className='relative z-5'>
                Packages
              </span>
              <span className='absolute bg-slate-700 left-0 w-0 h-full top-0 group-hover:w-full transition-all duration-500'></span>

            </button>
            <button onClick={() => document.getElementById("KITS")?.scrollIntoView({ behavior: "smooth" })} className='relative w-20 sm:w-25 font-semibold rounded-2xl text-sm h-full bg-slate-900 cursor-pointer text-white group overflow-hidden'>
              <span className='relative z-5'>
                Kits
              </span>
              <span className='absolute bg-slate-700 left-0 w-0 h-full top-0 group-hover:w-full transition-all duration-500'></span>

            </button>
          </div>
        </div>
        {/* grid 2 */}
        <div className='h-full flex justify-center items-center order-1 lg:order-2'>
          <div className="w-full lg:w-3/4 overflow-hidden rounded-md">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {products.map((e) => (
                e.productType != "structure" && <div key={e._id} className={`min-w-full h-80 bg-white flex items-center justify-center text-3xl font-bold`}>
                  <img className='w-full h-full object-contain' src={e.imageUrl} alt="" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <Package />
      <ScrollCard>
        <ProductPartition />

      </ScrollCard>
      <h1 id='mainproducts' className='font-bold text-4xl text-center text-gray-900 mt-5'>Available Products</h1>
      <p className='text-lg font-extralight text-center text-gray-800'>Power Your Future with Solar</p>
      <div className='p-4 flex gap-2'>
        <a className="relative border-2 rounded-md font-semibold overflow-hidden group px-5 py-2 hover:scale-101 transition-all duration-300" href={`${whatsappUrl}`}>
          <span className="relative z-10 text-slate-800 font-semibold flex gap-5 items-center text-md">
            Get a Quote on WhatsApp
            <img className='w-8 h-8' src={msgimg} alt="" />
          </span>

          <span className="absolute z-0 top-0 left-0 w-0 h-full bg-gray-100 group-hover:w-full transition-all duration-500" />
        </a>
      </div>
      <ScrollCard>
        <section className='m-2 md:m-5 h-fit grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 *:hover:scale-101 *:cursor-pointer *:transition-all *:duration-300'>
          {
            productcards.map((e) => {
              return (
                <div key={e.type} className={`h-90 rounded-md shadow-md shadow-black/30 sm:h-90 lg:h-105 w-full flex flex-col gap-2 ${e.color} p-2`}>
                  <div className='w-full shrink-0 bg-white h-1/2'><img src={e.img} className='w-full h-full object-contain' /></div>
                  <div className='flex-1 flex flex-col p-1'>
                    <h3 className='text-[9px] md:text-xs p-1 pl-4 pr-4 w-fit rounded-md border font-semibold text-slate-900'>{e.type}</h3>
                    <div className='h-px bg-gray-300 w-5/6 mx-auto mt-3 mb-3'></div>
                    <p className='text-gray-600 text-[9px] font-light md:text-sm'>{e.description}</p>
                    <div className='flex justify-end'>
                    </div>
                  </div>
                  <a href={`/preview?type=${e.type}`} className='p-2 text-center md:p-3 relative cursor-pointer font-light bg-slate-900 w-1/2 text-sm group ml-auto'>
                    <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black">
                      Preview
                    </span>

                    <span className="absolute inset-y-0 left-0 w-0 bg-gray-100 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                  </a>
                </div>
              )
            })
          }

        </section>
      </ScrollCard>
      <div className='w-5/6 h-px bg-gray-200 mt-10 mx-auto'></div>
      <Kits/>
      <div className='w-5/6 h-px bg-gray-200 mt-10 mx-auto'></div>
      <ContactPartition />
      <Footer />
    </section >
  )
}

export default Products