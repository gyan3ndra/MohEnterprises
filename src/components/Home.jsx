import React from 'react'
import Footer from './Footer.jsx'
import msgimg from '../assets/msg.png'
import s1 from '../assets/logo/s1.png'
import s2 from '../assets/logo/s2.png'
import s3 from '../assets/logo/s3.png'
import s4 from '../assets/logo/s4.png'
import s5 from '../assets/logo/s5.png'
import s6 from '../assets/logo/s6.png'
import Reside from '../assets/Residential Solar Installation.png'
import Commercial from '../assets/CommercialPowerSystem.png'
import Industrial from '../assets/IndustrialSolarProject.png'
import powerimg from '../assets/power.png'
import solarimg from '../assets/solar.png'
import wrenchimg from '../assets/wrench.png'
import { ContactPartition } from './Partition.jsx'

const Home = () => {
    const companyLogo = [s6, s5, s3, s4, s2, s1]

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
            title: 'Residential Solar Installation',
            type: 'Home Energy Upgrade',
            image: Reside,
            description:
                'A complete rooftop solar solution designed to reduce electricity costs while improving long-term energy independence for a family home.',
            details: ['High-efficiency panels', 'Smart monitoring', 'Lower monthly utility bills']
        },
        {
            title: 'Commercial Power System',
            type: 'Business Energy Solution',
            image: Commercial,
            description:
                'A tailored commercial setup built to support daily operations, improve system efficiency, and deliver reliable power performance for business growth.',
            details: ['Large-scale panel layout', 'Battery backup support', 'Optimized energy usage']
        },
        {
            title: 'Industrial Solar Project',
            type: 'Sustainable Production',
            image: Industrial,
            description:
                'A robust solar installation that helps manufacturing and industrial facilities reduce overhead costs and move toward cleaner, more sustainable operations.',
            details: ['Heavy-duty infrastructure', 'Performance tracking', 'Long-term savings']
        }
    ]

    const card = [
        {
            img: solarimg,
            title: "INSTALL",
            msg: "Complete solar panel installation",
        },
        {
            img: wrenchimg,
            title: "MAINTAIN",
            msg: "Cleaning, inspection & repairs",
        },
        {
            img: powerimg,
            title: "POWER",
            msg: "Solar panels, batteries & inverters",
        },
    ];

    return (
        <>
            <section className='bg-white min-h-scrren pt-15 pb-6 lg:pt-15'>
                <section className='flex min-h-[45vh] flex-col items-center justify-center px-4 py-8'>
                    <div className='w-full max-w-6xl p-3 text-center'>
                        <span className='flex gap-4 md:gap-10 justify-center w-full items-center'>
                            <h1 className='text-[#2F2F2F] text-[clamp(3.0rem,10vw,8rem)] leading-none font-extrabold'>MOH</h1>
                            <button className='animate-pop-in lg:p-5 p-3 h-10 justify-center items-center gap-5 lg:gap-9 flex lg:h-15 rounded-md bg-[#F87061] text-white font-bold text-[10px] sm:text-sm md:text-md cursor-pointer transition-all duration-800 hover:bg-[#ba4b3e]'>Lets Start A Talk! <img className='w-7 h-7 lg:w-10 lg:h-10 invert' src={msgimg} /></button>
                        </span>
                        <h1 className='text-[#2F2F2F] text-[clamp(3rem,9vw,8rem)] leading-[0.98] font-extrabold'>ENTERPRISES</h1>
                        <p className='mx-auto mt-4 max-w-2xl text-sm lg:text-lg text-slate-500 font-light'>Smart solar solutions designed to maximize your energy independence and lifetime savings.</p>
                    </div>
                </section>
                <section className='grid grid-cols-1 md:grid-cols-3 p-4 gap-3 md:gap-5'>
                    {card.map((e, index) => {
                        return (
                            <div key={e.title} className='bg-white rounded-md min-h-28 p-4 flex justify-center items-center gap-5'>
                                <img src={e.img} alt="" />
                                <div>
                                    <h4 className=' font-extrabold text-lg'>{e.title}</h4>
                                    <p className='text-lg font-light '>{e.msg}</p>
                                </div>
                            </div>
                        )
                    })}

                </section>
            </section>
            <section className='company-logos'>
                {
                    companyLogo.map((e, index) => {
                        return (
                            <img key={index} src={e} alt={`Solar partner ${index + 1}`} />
                        )
                    })
                }
            </section>

            <section className='py-16 px-4 lg:px-10'>
                <div className='max-w-6xl mx-auto'>
                    <div className='mb-12 text-center'>
                        <p className='text-[#F87061] font-semibold uppercase tracking-[0.2em] text-sm'>Our Works</p>
                        <h2 className='mt-3 text-3xl lg:text-5xl font-bold text-slate-800'>Projects that deliver real impact</h2>
                    </div>

                    <div className='space-y-10'>
                        {works.map((work, index) => (
                            <article key={index} className={`work-card ${index % 2 === 0 ? 'work-card-left' : 'work-card-right'}`}>
                                <div className='work-image'>
                                    <img src={work.image} alt={work.title} />
                                </div>
                                <div className='work-content'>
                                    <span className='work-tag'>{work.type}</span>
                                    <h3>{work.title}</h3>
                                    <p>{work.description}</p>
                                    <ul>
                                        {work.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>→ {detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
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
            <ContactPartition/>
            <Footer />
        </>
    )
}


export default Home