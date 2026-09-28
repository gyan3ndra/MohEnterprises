import React from 'react'
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

const Home = () => {
    const logo = [s6,s5,s3,s4,s2,s1]

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

    return (
        <>
            <section className='bg-white h-screen pt-13'>
                <section className='flex flex-col items-center justify-center h-[65vh]'>
                    <div className='p-3'>
                        <span className='flex gap:7 md:gap-10 justify-center w-full items-center'>
                            <h1 className='text-[#2F2F2F] text-5xl lg:text-8xl font-extrabold'>MOH</h1>
                            <button className='animate-pop-in lg:p-5 p-3 h-10 justify-center items-center gap-5 lg:gap-9 flex lg:h-15 rounded-md bg-[#F87061] text-white font-bold text-sm lg:text-md cursor-pointer transition-all duration-800 hover:bg-[#ba4b3e]'>Lets Start A Talk! <img className='w-7 h-7 lg:w-10 lg:h-10 invert' src={msgimg} /></button>
                        </span>
                        <h1 className='text-[#2F2F2F] text-5xl lg:text-8xl font-extrabold'>ENTERPRISES</h1>
                        <p className='lg:text-lg text-slate-500 font-light'>Smart solar solutions designed to maximize your energy independence and lifetime savings.</p>
                    </div>
                </section>
                <section className='grid grid-cols-1 lg:grid-cols-3 h-100 lg:h-[25vh] p-4 gap-5'>
                    <div className='bg-white rounded-md h-full p-4 text-center'>
                        <h4 className=' font-bold text-sm'>INSTALL</h4>
                        <p className='text-lg font-light '>Complete solar panel installation</p>
                    </div>
                    <div className='bg-white rounded-md h-full p-4 text-center'>
                        <h4 className=' font-bold text-sm'>MAINTAIN</h4>
                        <p className='text-lg font-light '>Cleaning, inspection & repairs</p>
                    </div>
                    <div className='bg-white rounded-md h-full p-4 text-center'>
                        <h4 className=' font-bold text-sm'>POWER</h4>
                        <p className='text-lg font-light '>Solar panels, batteries & inverters</p>
                    </div>
                </section>
            </section>
            <section className='bg-gray-100 h-20 flex justify-between p-2 pl-10 pr-10'>
                {
                    logo.map((e, index) => {
                        return(
                            <img key={index} src={e} alt="" />
                        )
                    })
                }
            </section>

            <section className='bg-slate-100 py-16 px-4 lg:px-10'>
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
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <footer className='site-footer'>
                <div className='footer-inner'>
                    <div className='footer-brand'>
                        <div className='brand-mark'>MOH</div>
                        <h3>Moh Enterprises</h3>
                        <p>
                            Delivering smart, sustainable solar power systems for homes, businesses,
                            and industrial facilities with clean energy that boosts efficiency and value.
                        </p>
                    </div>

                    <div className='footer-links'>
                        <div>
                            <h4>Quick Links</h4>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Projects</li>
                                <li>Services</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Services</h4>
                            <ul>
                                <li>Residential Solar</li>
                                <li>Commercial Solar</li>
                                <li>Industrial Systems</li>
                                <li>Maintenance</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Contact</h4>
                            <ul>
                                <li>+91 98XXXXXXXX</li>
                                <li>hello@mohenterprises.com</li>
                                <li>Chennai, India</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <span>© 2026 MOH Enterprises</span>
                    <span>Powering a greener future</span>
                </div>
            </footer>
        </>
    )
}


export default Home