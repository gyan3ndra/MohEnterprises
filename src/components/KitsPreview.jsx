import React, { memo, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import phoneimg from '../assets/phone.png'
import messageimg from '../assets/msg.png'
import externallinkimg from '../assets/externallink.png'


const KitsPreview = memo(() => {
  const [params] = useSearchParams()
  const [viewlist, setviewlist] = useState(false)
  const ID = params.get('id')
  const kitnumber = params.get('kit')
  const [kits, setkits] = useState({})
  const whatsappNumber = import.meta.env.VITE_PHONE

  const items = kits.kitItems?.map((e) => `• ${e.productInfo}`).join("\n") || ""

  const message = encodeURIComponent(
    `Hello, I'm interested in the ${kits.kitName} solar kit [kit - ${kitnumber}].

Kit Category: ${kits.kitCategory}
Kit Details: ${kits.kitInfo}

Included Items:
${items}

I'd like to know the price, installation details, and availability. Please share more information.`
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  useEffect(() => {
    const fetchkits = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/kits?kitId=${ID}`)
      const data = await res.json()
      console.log(data)
      if (res.ok) {
        setkits(data)
      }
    }
    fetchkits()
  }, [ID])
  const kit = {
    id: 6,
    name: "Complete Solar Kit",
    category: "Agriculture",
    description: "An all-in-one solar package with generation, backup, protection and installation essentials.",
    items: [
      "TOPCon Solar Panels",
      "Hybrid Inverter",
      "Solar Battery",
      "ACDB Box",
      "DCDB Box",
      "Earthing Kit",
      "Solar Structure",
      "Solar Wires"
    ]
  }
  const productcategories = [...new Set(kits.kitItems?.map((e) => e.productType))]
  const images = [
    {
      url: "https://www.upwatt.com/media/catalog/product/cache/1381b32330b70f03b86b245acb091f9f/o/d/odoo_70100_512-6.png_1_1_1_1.webp",
      name: "Solar Inverter"
    },
    {
      url: "https://acdn-us.mitiendanube.com/stores/003/582/147/products/8kw-bdc4513eb7fff146e917424027353474-640-0.webp",
      name: "8KW Solar Inverter"
    },
    {
      url: "https://claudiomarques.pt/2695-large_default/painel-fotovoltaico-dmegc-580w-dm580m10t-72hsw-v.jpg",
      name: "DMEGC 580W Solar Panel"
    },
    {
      url: "https://alladin.pk/cdn/shop/files/PV4000-3KW_1_1_1024x1024.webp?v=1718015123",
      name: "3KW Hybrid Inverter"
    }
  ]

  function ImageSlider() {

    const images = kits.kitItems.map((e) => ({
      url: e.imageUrl,
      name: e.productInfo
    })) || []

    const [current, setCurrent] = useState(0);

    const nextImage = () => {
      setCurrent((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <div className="relative w-full max-w-2xl h-100 bg-slate-950 rounded-2xl overflow-hidden">
        <img
          src={images[current].url}
          alt={images[current].name}
          className="w-full h-full object-contain p-10"
        />

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-5 py-2 rounded-md text-gray-100 text-[10px] w-fit font-medium">
          {images[current].name}
        </div>

        <button
          onClick={prevImage}
          className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 border border-slate-700 text-white text-xl flex items-center justify-center hover:bg-orange-400 hover:text-slate-950 transition-all"
        >
          ←
        </button>

        <button
          onClick={nextImage}
          className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 border border-slate-700 text-white text-xl flex items-center justify-center hover:bg-orange-400 hover:text-slate-950 transition-all"
        >
          →
        </button>

        <div className="absolute top-3 left-3 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${current === index
                ? "w-6 bg-orange-400"
                : "w-2 bg-slate-500"
                }`}
            />
          ))}
        </div>
      </div>
    );
  }


  return (
    <section className='pt-20 grid grid-cols-1 p-4 lg:grid-cols-2'>
      <div className='pt-5 h-full order-2 lg:order-1'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg p-2 pr-6 pl-5 rounded-2xl bg-slate-900 text-white font-semibold w-fit'>KIT {kitnumber}</h3>
          <button onClick={() => setviewlist(true)} className='text-sm mr-3 md:mr-5 p-2 transition-all duration-200 hover:bg-blue-700 pr-6 pl-5 rounded-2xl bg-blue-600 cursor-pointer text-white font-semibold w-fit flex items-center gap-2'>View Items <img src={externallinkimg} className='w-5 h-5 invert' /></button>
        </div>
        <h1 className='mt-3 text-3xl md:text-4xl font-extrabold text-slate-900'>{kits.kitName}</h1>
        <h3 className='text-md p-1 pr-6 pl-5 rounded-2xl bg-slate-100 text-slate-700 border-2 mt-5 w-fit'>{kits.kitCategory}</h3>
        <p className='mt-4 text-lg md:text-2xl font-extralight pl-1 mb-5'>{kits.kitInfo}</p>
        <div className='flex gap-3 md:gap-5 flex-col md:flex-row'>
          <a target="_blank" rel="noopener noreferrer" className='text-md md:text-lg p-3 pl-4 pr-4 text-center bg-black hover:bg-gray-800 transition-all duration-200 text-white rounded-md flex gap-3 items-center justify-center lg:pr-10 lg:pl-10' href={`tel:${import.meta.env.VITE_PHONE}`}><img src={phoneimg} className='w-6 h-6 invert' /> Call Us</a>
          <a target="_blank" rel="noopener noreferrer" className='text-md md:text-lg p-3 pl-4 pr-4 text-center bg-green-400 hover:bg-green-500 transition-all duration-200  text-white rounded-md flex gap-3 items-center justify-center' href={whatsappUrl}>Ask About This Kit<img src={messageimg} className='w-6 h-6 invert' /></a>
        </div>
        <div className='mt-10'>
          <h2 className='mt-3 font-light pl-1 text-2xl'>What’s Included in This Kit?</h2>
          <div className='flex flex-wrap gap-2 mt-3 max-w-100  h-fit'>
            {
              productcategories.map((e) => {
                return (
                  <button key={e} className={`p-1 pl-3 pr-3 border text-slate-600 cursor-pointer text-md rounded-2xl`}>{e}</button>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center p-4 bg-slate-800 rounded-2xl order-1 lg:order-2'>
        {
          kits.kitItems && <ImageSlider />
        }
      </div>
      {
        viewlist && <div className='fixed top-1/2 pt-10 left-1/2 -translate-x-1/2 p-5 -translate-y-1/2 w-80 md:w-90 h-100 rounded-2xl bg-slate-900/90 flex justify-center items-center backdrop-blur-md'>
          <button onClick={() => setviewlist(false)} className='absolute top-2 left-3 cursor-pointer font-bold text-slate-200'>✖</button>
          <div className='w-full scrollbar-thin overflow-y-auto overflow-x-hidden max-h-90'>
            <ul className='text-center text-sm text-slate-300 flex flex-col gap-2 font-semibold'>
              <li>✘ Solar Structure</li>
              {
                kits.kitItems.map((e,index) => {
                  return <li key={e._id}>✘ {e.productInfo}</li>
                })
              }
            </ul>
          </div>
        </div>
      }
    </section>
  )
})

export default KitsPreview