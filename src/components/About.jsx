import React from 'react'
import Footer from './Footer.jsx'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import phoneimg from '../assets/phone.png'
import { ContactPartition } from './Partition.jsx'

const About = () => {
  const highlights = [
    { title: '5+', text: 'Years of Industry Experience' },
    { title: '100+', text: 'Solar systems delivered across sectors' },
    { title: '24/7', text: 'Support for performance and maintenance' },
    { title: '100%', text: 'Commitment to efficient sustainable power' }
  ]

  return (
    <>
      <section className='about-page'>
        <div className='about-hero'>
          <div className='about-copy'>
            <p className='section-label'>About Us</p>
            <h1>Powering India with Reliable Solar Solutions.</h1>
            <p>
              MOH Enterprises is a trusted solar solutions distributor providing high-quality solar panels, inverters, mounting systems and complete solar solutions for homes, businesses and industries across India.
            </p>
            <div className='flex'>
              <a className="relative rounded-2xl font-semibold bg-slate-900 overflow-hidden group px-5 py-3 " href={`tel:${import.meta.env.VITE_PHONE}`}>
              <span className="relative z-10 text-slate-100 font-bold flex gap-2 items-center text-sm md:text-md">
                <img className="w-6 h-6 sm:w-8 sm:h-8 invert" src={phoneimg} />
                Get a Free Consultation
              </span>

              <span className="absolute z-0 top-0 left-0 w-0 h-full bg-gray-700 group-hover:w-full transition-all duration-500" />
            </a>
            </div>
            {/* <a href={`tel:${import.meta.env.PHONE}`} className='primary-button'>Get a Free Consultation</a> */}
          </div>

          <div className='about-visual'>
            <div
              className='visual-card main-card'
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.20), rgba(15, 23, 42, 0.28)), url(${pic1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>Clean Power</span>
            </div>
            <div
              className='visual-card small-card'
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.22)), url(${pic2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>Reliable Solar</span>
            </div>
          </div>
        </div>

        <div className='about-stats'>
          {highlights.map((item, index) => (
            <div key={index} className='stat-box'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className='about-content'>
          <div className='content-box'>
            <p className='mini-title'>Our Mission</p>
            <h2>To make sustainable power accessible and practical for everyone.</h2>
            <p>
              We design and deliver tailored solar solutions that match each client’s energy goals,
              operational demands, and long-term savings needs.
            </p>
          </div>

          <div className='content-box'>
            <p className='mini-title'>Why Choose Us</p>
            <ul>
              <li>Customized solar design for residential and commercial needs</li>
              <li>Expert installation and maintenance support</li>
              <li>Focus on performance, safety, and long-term value</li>
              <li>Commitment to sustainable and efficient energy use</li>
            </ul>
          </div>
        </div>
      </section>
      <ContactPartition />
      <Footer />
    </>
  )
}

export default About