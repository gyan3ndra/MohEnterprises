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
      color: 'bg-white place-self-end ',
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
      color: 'bg-white place-self-end ',
      description: 'Microtech grid tied D11 inverters LED display bluetooth connectivity',
      content: <InverterContent />,
      type: 'INVERTER',
    },
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
            <button onClick={()=> document.getElementById("PACKAGES")?.scrollIntoView({ behavior: "smooth" })} className='relative w-25 sm:w-30 font-semibold rounded-2xl text-sm h-full bg-slate-900 cursor-pointer text-white group overflow-hidden'>
              <span className='relative z-5'>
                Packages
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
      <ProductPartition />
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
      <section className='m-2 md:m-5 h-fit grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 *:hover:scale-101 *:cursor-pointer *:transition-all *:duration-300'>
        {
          productcards.map((e) => {
            return (
              <div key={e.type} className={`h-90 shadow-md shadow-black/20 sm:h-100 lg:h-120 w-full flex flex-col gap-2 ${e.color} p-2`}>
                <div className='w-full shrink-0 bg-white h-1/2'><img src={e.img} className='w-full h-full object-contain' /></div>
                <div className='flex-1 flex flex-col p-1 justify-between'>
                  <h3 className='text-[11px] md:text-sm'>{e.type}</h3>
                  <p className='text-gray-600 text-[7px] font-light md:text-sm'>{e.description}</p>
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
      <div className='w-5/6 h-px bg-gray-200 mt-10 mx-auto'></div>
      <section id='DETAILEDPRODUCTVIEW' className='lg:flex lg:gap-5 lg:items-center lg:p-4'>
        <div className='flex-1 relative bg-slate-900 border border-slate-700 shadow-lg group lg:flex hidden cursor-pointer h-120 rounded-2xl'>
          <img className='w-full h-full object-contain transition-all duration-300' src={packagebannerimg} alt="" />
          {/* <button className='absolute left-2 hidden  group-hover:flex hover:scale-102 bottom-2 pl-5 pr-5 p-3 text-sm bg-slate-900 text-white rounded-2xl font-mono cursor-pointer transition-all duration-300 hover:bg-gray-800'>VIEW PACKAGES</button> */}
        </div>
        <section className='p-2 w-full mx-auto ml-auto grid grid-cols-2 md:w-fit mb-10 mt-10 md:grid-cols-4 lg:h-120 overflow-y-auto gap-3'>
          {
            products.map((e) => {
              return (
                <div key={e._id} className='w-full md:w-45 h:60 sm:h-55 bg-slate-900 p-2 shadow-md rounded-md hover:scale-101 transition-all duration-300 cursor-pointer'>
                  <div className='w-full rounded-md h-3/4 bg-gray-300'>
                    <img className='w-full h-full object-contain' src={e.imageUrl} alt="" />
                  </div>

                  <div className='flex-1 p-1 min-w-0'>
                    <h3 className='text-[12px] font-bold mt-1 font-mono text-slate-200 bg-slate-700 rounded-md w-fit pr-2 pl-2'>
                      {e.productType}
                    </h3>

                    <p className='text-[10px] mt-1 pl-1 font-light text-slate-200 truncate'>
                      {e.productInfo}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </section>
      </section>
      {/* <section className='p-2 w-full mx-auto grid grid-cols-2 md:w-fit mb-10 mt-10 md:grid-cols-4 lg:grid-cols-6 gap-3'>
        {
          products.map((e) => {
            return (
              // ${e.productType === "inverter" ? 'bg-yellow-300' : e.productType === "panel" ? 'bg-red-300' : e.productType === "wire" ? 'bg-green-300' : 'bg-blue-300'}
              <div key={e._id} className={`w-45 h-55 } p-2 bg-slate-900 shadow-md rounded-md hover:scale-101 transition-all duration-300 cursor-pointer`}>
                <div className='w-full h-3/4 bg-gray-100 rounded-md'><img className='w-full h-full object-contain' src={e.imageUrl} alt="" /></div>
                <div className='flex-1 p-1'>
                  <h3 className='text-[12px] font-bold mt-1 font-mono text-slate-200 bg-slate-700 w-fit pr-1 pl-1 rounded-md'>{e.productType}</h3>
                  <p className='text-[10px] font-light text-slate-200'>{e.productInfo}</p>
                </div>
              </div>
            )
          })
        }
      </section> */}
      <ContactPartition />
      <Footer />
    </section >
  )
}

export default Products