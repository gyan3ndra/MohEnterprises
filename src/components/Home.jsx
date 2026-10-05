import React from 'react'
import Footer from './Footer.jsx'
import msgimg from '../assets/msg.png'
import s1 from '../assets/logo/s1.png'
import s2 from '../assets/logo/s2.png'
import s3 from '../assets/logo/s3.png'
import s4 from '../assets/logo/s4.png'
import s5 from '../assets/logo/s5.png'
import s6 from '../assets/logo/s6.png'
import ScrollCard from './ScrollCard.jsx'
import Reside from '../assets/ResidentialSolarInstallation.jpg'
import Commercial from '../assets/CommercialPowerSystem.jpg'
import Industrial from '../assets/IndustrialSolarProject.jpg'
import powerimg from '../assets/power.png'
import solarimg from '../assets/solar.png'
import wrenchimg from '../assets/wrench.png'
import { ContactPartition, whatsappUrl } from './Partition.jsx'
import Package from './Package.jsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { div } from 'framer-motion/client'

const Home = () => {
    const companyLogo = [s6, s5, s3, s4, s2, s1]
    const navigate = useNavigate()

    const offercards = [
        {
            t1: 'LIMITED TIME OFFER',
            t2: 'Upgrade to Solar & Save',
            info: 'Get special pricing on selected solar panels for your home or business.',
            t3: (<>Save up to{" "}<span className="text-white font-extrabold text-5xl">15%</span></>),
            t4: 'Explore Offer →',
            color: 'bg-red-300'
        },
        {
            t1: 'SPECIAL PACKAGE',
            t2: 'Go Solar, Save More',
            info: 'Get panels, inverter, wires and mounting structure together at a package price.',
            t3: 'Combo Deals Available',
            t4: 'View Packages →',
            color: 'bg-blue-300'
        },
        {
            t1: 'INSTALLATION DEAL',
            t2: 'Get Your Solar Setup Installed',
            info: 'Professional installation support for selected solar systems.',
            t3: 'Special Installation Pricing',
            t4: 'Know More →',
            color: 'bg-yellow-300'
        }
    ]

    const works = [
        {
            title: "Powering Homes With Solar",
            type: "Residential Solar Solutions",
            image: Reside,
            description: "We design and install reliable solar systems for homes to reduce electricity expenses, increase energy independence, and make everyday power cleaner.",
            details: [
                "Customized rooftop solar systems",
                "Professional installation & setup",
                "Lower electricity bills",
                "Clean and reliable energy"
            ]
        },
        {
            title: "Helping Businesses Save Energy",
            type: "Commercial Solar Solutions",
            image: Commercial,
            description: "We provide scalable solar solutions for businesses that help control rising electricity costs while delivering dependable power for daily operations.",
            details: [
                "System designed for business needs",
                "High-efficiency solar panels",
                "Energy cost reduction",
                "Reliable power performance"
            ]
        },
        {
            title: "Building Smarter Industrial Energy",
            type: "Industrial Solar Solutions",
            image: Industrial,
            description: "We help industries move toward efficient and sustainable energy by providing powerful solar systems built for high-demand operations and long-term savings.",
            details: [
                "High-capacity solar systems",
                "Industrial-grade components",
                "Reduced operational energy costs",
                "Long-term energy independence"
            ]
        }
    ]

    const card = [
        {
            img: solarimg,
            title: "SOLAR INSTALLATION",
            msg: "Professional installation for homes and businesses",
        },
        {
            img: wrenchimg,
            title: "SOLAR MAINTENANCE",
            msg: "Cleaning, inspection and reliable system maintenance",
        },
        {
            img: powerimg,
            title: "ENERGY SOLUTIONS",
            msg: "Panels, batteries and inverters for reliable power",
        },
    ];

    const points = [
        {
            "number": "01",
            "title": "Quality You Can Trust",
            "description": "Reliable solar panels, inverters, batteries, and accessories from trusted brands."
        },
        {
            "number": "02",
            "title": "Professional Installation",
            "description": "Carefully planned and professionally executed installations for safe, efficient, and long-lasting performance."
        },
        {
            "number": "03",
            "title": "Complete Solar Solutions",
            "description": "From consultation and product selection to installation and maintenance, everything under one roof."
        },
        {
            "number": "04",
            "title": "Support Beyond Installation",
            "description": "Ongoing assistance and maintenance to help keep your solar system performing at its best."
        }
    ]


    return (
        <>
            <section className='bg-white min-h-scrren pt-15 pb-6 lg:pt-15'>
                <div id='HOME'></div>
                <section className='flex z- min-h-[45vh] flex-col items-center justify-center px-4 py-8'>
                    <div className='w-full max-w-6xl p-3 text-center'>
                        <span className='flex gap-4 md:gap-10 justify-center w-full items-center'>
                            <h1 className='text-[#2F2F2F] text-[clamp(3.0rem,10vw,8rem)] leading-none font-extrabold [-webkit-text-stroke:2px_#2F2F2F]'>MOH</h1>
                            <a target="_blank" rel="noopener noreferrer" href={whatsappUrl} className='animate-pop-in lg:p-5 p-3 h-10 justify-center items-center gap-5 lg:gap-9 flex lg:h-15 rounded-md bg-[#F87061] text-white font-bold text-[10px] sm:text-sm md:text-md cursor-pointer transition-all duration-800 hover:bg-[#ba4b3e]'>Lets Start A Talk! <img className='w-7 h-7 lg:w-10 lg:h-10 invert' src={msgimg} /></a>
                        </span>
                        <h1 className='text-[#2F2F2F] text-[clamp(3rem,9vw,8rem)] leading-[0.98] font-extrabold [-webkit-text-stroke:2px_#2F2F2F]'>ENTERPRISES</h1>
                        <p className='mx-auto mt-4 max-w-2xl text-sm lg:text-lg text-slate-600 font-light'>Smart solar solutions designed to maximize your energy independence and lifetime savings.</p>
                    </div>
                </section>
                <section className='grid grid-cols-1 md:grid-cols-3 p-4 gap-3 md:gap-5'>
                    {card.map((e, index) => {
                        return (
                            <div key={e.title} className='rounded-b-2xl relative rounded-md min-h-28 p-4 flex justify-center items-center gap-5'>
                                <div className='bg-slate-950 p-3 rounded-2xl'>
                                    <img className='w-full h-full object-contain invert' src={e.img} alt="" />
                                </div>
                                <div className=''>

                                    <h4 className='font-extrabold text-lg'>{e.title}</h4>
                                    <p className='text-md font-light mt-1'>{e.msg}</p>
                                </div>
                            </div>
                        )
                    })}

                </section>
            </section>
            <section className="p-5 flex flex-col items-center gap-5 mt-15 mb-10">
                <h1 className="text-3xl md:text-4xl font-light text-center mb-2">
                    Explore Our Services & Available Products
                </h1>
                <div className='flex gap-2 *:cursor-pointer'>
                    <button className="relative border-2 rounded-md font-semibold overflow-hidden group px-7 sm:px-10 py-2 " onClick={() => { navigate('/services') }}>
                        <span className="relative z-10 text-slate-900 font-bold flex gap-5 items-center text-md md:text-lg">
                            Services
                        </span>

                        <span className="absolute z-0 top-0 left-0 w-0 h-full bg-gray-200 group-hover:w-full transition-all duration-500" />
                    </button>
                    <a className="relative border-2 rounded-md font-semibold bg-slate-900 overflow-hidden group px-7 sm:px-10 py-2 " href='/products'>
                        <span className="relative z-10 text-white font-bold flex gap-5 items-center text-md md:text-lg">
                            Products & Kits
                        </span>

                        <span className="absolute z-0 top-0 left-0 w-0 h-full bg-gray-700 group-hover:w-full transition-all duration-500" />
                    </a>
                </div>
            </section>
            {/* <Package /> */}
            {/* <section className='company-logos'>
                {
                    companyLogo.map((e, index) => {
                        return (
                            <img key={index} src={e} alt={`Solar partner ${index + 1}`} />
                        )
                    })
                }
            </section> */}
            <section className='grid grid-cols-1 md:grid-cols-2 p-4 mt-5'>
                <div className='p-2'>
                    <p className='text-[#F87061] font-semibold uppercase tracking-[0.2em] text-sm'>Why Choose Us?</p>
                    <div>
                        <h2 className='mt-3 text-3xl lg:text-5xl font-extrabold text-slate-800'>
                            More Than
                        </h2>
                        <span className="text-[#F87061] mt-3 text-3xl lg:text-5xl font-extrabold">Just Solar.</span>
                    </div>
                    <p className='text-slate-700 font-light text-lg sm:text-2xl mt-3 mb-10'>We don't just install solar systems , we provide reliable energy solutions designed around your needs, your property, and your long-term goals.</p>
                    <a className='p-3 pl-8 pr-8 cursor-pointer hover:bg-orange-800 transition-all duration-300 bg-[#F87061] rounded-md text-white font-bold text-lg' href={whatsappUrl}>Talk to Us</a>
                </div>
                <div className='flex flex-col gap-3 p-2 pt-8 sm:pt-0'>
                    {
                        points.map((e)=>{
                            return(
                                <div key={e.number} className='bg-slate-100 rounded-md p-3 shadow-md flex gap-3'>
                                    <h1 className='font-bold text-3xl p-2'>
                                        {e.number}
                                    </h1>
                                    <div>
                                        <h1 className='text-lg font-bold'>{e.title}</h1>
                                        <p className='text-slate-600 font-light'>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='py-16 px-4 lg:px-10'>
                <div className='max-w-6xl mx-auto'>
                    <div className='mb-12 text-center'>
                        <p className='text-[#F87061] font-semibold uppercase tracking-[0.2em] text-sm'>Our Work</p>
                        <h2 className='mt-3 text-3xl lg:text-5xl font-bold text-slate-800'>Projects that deliver real impact</h2>
                    </div>

                    <div className='space-y-10'>
                        {works.map((work, index) => (
                            <ScrollCard>
                                <article key={index} className={`work-card gap-5 hover:scale-101 transition-all duration-300  ${index % 2 === 0 ? 'work-card-left' : 'work-card-right'}`}>
                                    <div className='work-image'>
                                        <img className='' src={work.image} alt={work.title} />
                                    </div>
                                    <div className='work-content'>
                                        <span className='work-tag shadow-md'>{work.type}</span>
                                        <h3>{work.title}</h3>
                                        <p>{work.description}</p>
                                        <ul className=''>
                                            {work.details.map((detail, detailIndex) => (
                                                <li className='flex items-center gap-3 text-slate-800' key={detailIndex}><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[10px] text-white">
                                                    ✓
                                                </span> {detail}</li>
                                            ))}
                                        </ul>

                                    </div>
                                    {/* <div className='absolute bottom-0 left-0 h-2 bg-orange-400/90 w-full rounded-b-full block sm:hidden'></div> */}
                                </article>
                            </ScrollCard>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section id='OFFERS' className=' p-3'>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full p-3 lg:w-3/4 mx-auto h-fit gap-10'>
                    {
                        offercards.map((e) => {
                            return (
                                <div key={e} className={`relative shadow-lg p-4 ${e.color} h-80 md:h-90`}>
                                <div className={`absolute top-0 right-2 h-30 w-12 bg-slate-800`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%)" }} />
                                <h3 className='text-md font-bold mt-5 font-mono '>{e.t1}</h3>
                                <h2 className='text-2xl w-3/4 font-semibold font-mono'>{e.t2}</h2>
                                <p className='text-md font-light mt-3'>{e.info}</p>
                                <h1 className='text-2xl font-bold text-center text-slate-900 mt-5'>{e.t3}</h1>
                                <div className='flex w-full justify-center'><a className='text-lg font-bold font-mono text-blue-900 mt-2' href="">{e.t4}</a></div>
                                
                                </div>
                                )
                            })
                    }
                    </div>
                    </section> */}
            <ContactPartition />
            <Footer />
        </>
    )
}


export default Home