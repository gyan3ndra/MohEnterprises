import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import panelimg from '../assets/products/panel.jpg'
import Footer from './Footer'
import whatsappimg from '../assets/whatsapp.png'
import phoneimg from '../assets/phone.png'
import { useSearchParams } from 'react-router-dom'
import { ContactPartition,whatsappUrl } from './Partition'

const Preview = () => {
  
  const [params] = useSearchParams()
  const productType = params.get('type')
  const [products, setproducts] = useState([])
  const [previewimg, setpreviewimg] = useState(null)
  // const images = [{ color: 'bg-red-300' }, { color: 'bg-blue-300' }, { color: 'bg-green-300' }, { color: 'bg-yellow-300' }]

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products?type=${productType?.toLowerCase()}`)
      const data = await res.json()
      if (res.ok) {
        setproducts(data)
        setpreviewimg(data[0].imageUrl)
      }
      // console.log()

    }
    fetchproducts()
  }, [])
  console.log(productType)

  return (
    <section className='pt-15 h-screen'>
      <section className=' min-h-120 m-5 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col p-3 h-full gap-3 rounded-lg bg-slate-900'>
          <div className={`h-100 w-full`}>
            <img
              className='h-full w-full object-contain'
              src={previewimg}
              alt=""
            />
          </div>
          <div className='flex gap-2 md:gap-5 justify-center w-full'>
            {
              products.map((e) => {
                return (<div key={e._id} onClick={() => { setpreviewimg(e.imageUrl) }} className={`cursor-pointer rounded-md w-10 h-10 bg-white shadow-md shadow-black/20`}>
                  <img className='w-full h-full object-cover rounded-md' src={e.imageUrl} alt="" />
                </div>)
              })
            }
          </div>
        </div>
        <div className='h-full bg-slate-50 p-2 sm:p-3 flex flex-col gap-3 scrollbar-thin lg:pl-5'>
          <div className='h-fit p-2 flex flex-col justify-center items-center'>
            <h3 className='text-2xl sm:text-3xl tracking-tight text-slate-800 text-center'>Find the right {productType.toLocaleLowerCase()} for your solar setup</h3>
            <p className='font-extralight text-md mt-1 mb-2 text-center'>Explore our available {productType.toLocaleLowerCase()} models and specifications.</p>
            <button onClick={() => { document.getElementById('TYPES').scrollIntoView({ behavior: 'smooth' }) }} className='font-semibold w-fit font-mono  text-slate-800 p-2 pr-4 pl-4 cursor-pointer rounded-md border'>View {productType.toLocaleLowerCase()}</button>
          </div>
          {/* info */}
          <div className='mt-1 max-h-55 p-1 md:p-4'>
            <div className='flex flex-col w-full h-full gap-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300'>
              {
                products.map((e, index) => {
                  return (
                    <div key={e.productId} className='w-full bg-slate border text-black p-3 text-[13px] font-light rounded-3xl flex gap-2 items-center'>
                      <div className='h-full w-6 rounded-full bg-gray-300 flex justify-center items-center text-[10px]'>{index + 1}</div>
                      {e.productInfo}
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex gap-2 mt-auto justify-between items-center border-gray-200'>
            <a href={`tel:${import.meta.env.VITE_PHONE}`} className='relative w-1/2 text-slate-900 border font-semibold overflow-hidden group p-2 text-center'>
              <span className='z-5 font-bold relative flex justify-center items-center gap-1 sm:gap-2 text-md'>
                <img className='w-8 h-8 sm:w-10 sm:h-10' src={phoneimg} />
                CALL US
              </span>
              <span className='absolute top-0 w-0 left-0 bg-gray-200 h-full group-hover:w-full transition-all duration-500'></span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='relative w-1/2 bg-green-400 border border-green-400 text-white font-semibold overflow-hidden group p-2 text-center'>
              <span className='z-5 text-white font-bold relative flex justify-center items-center gap-1 sm:gap-2 text-md'>
                <img className='w-8 h-8 sm:w-10 sm:h-10' src={whatsappimg} />
                WHATSAPP
              </span>
              <span className='absolute top-0 w-0 left-0 bg-green-500 h-full group-hover:w-full transition-all duration-500'></span>
            </a>
          </div>
        </div>
      </section>
      <div id='TYPES' className=''>

      </div>
      <section className='p-2 w-full mx-auto grid grid-cols-2 md:w-fit mb-10 mt-10 md:grid-cols-4 lg:grid-cols-5 gap-3'>
        {
          products.map((e) => {
            return (
              <div key={e._id} className='w-full md:w-45 h:60 sm:h-55 bg-white p-2 shadow-md rounded-md hover:scale-101 transition-all duration-300 cursor-pointer' >
                <div className='w-full rounded-md h-3/4 bg-white'>
                  <img className='w-full h-full object-contain' src={e.imageUrl} alt="" />
                </div>

                <div className='flex-1 p-1 min-w-0'>
                  <h3 className='text-[12px] font-bold mt-1 font-mono text-slate-200 bg-slate-700 rounded-md w-fit pr-2 pl-2'>
                    {e.productType}
                  </h3>

                  <p className='text-[10px] mt-1 font-light text-slate-900 truncate pl-1'>
                    {e.productInfo}
                  </p>
                </div>
              </div>
            )
          })
        }
      </section>
      <ContactPartition/>
      <Footer />
    </section>
  )
}

export default Preview