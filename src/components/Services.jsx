import React from 'react'
import Footer from './Footer.jsx'
import { ContactPartition } from './Partition.jsx'
import solarImage from '../assets/solar.png'
import wrenchImage from '../assets/wrench.png'
import powerImage from '../assets/power.png'

const Services = () => {
  const services = [
    {
      title: 'Solar Panel Installation',
      description: 'Panel installation for homes, businesses, and other properties, planned around the site and energy requirements.',
      image: solarImage,
    },
    {
      title: 'Solar Panel Cleaning',
      description: 'Panel cleaning to remove dust and surface buildup as part of regular solar system care.',
      image: wrenchImage,
    },
    {
      title: 'Solar System Maintenance',
      description: 'System checks and maintenance support to help identify issues and keep equipment in good condition.',
      image: wrenchImage,
    },
    {
      title: 'Product Delivery',
      description: 'Delivery of solar panels, inverters, batteries, and other solar equipment for your project.',
      image: powerImage,
    },
  ]

  const projects = [
    // Add project photos to public/works, then add one object per completed project:
    // {
    //   title: 'Project title',
    //   category: 'Residential, commercial, or industrial',
    //   location: 'City or area',
    //   year: '2026',
    //   description: 'A short description of the work completed.',
    //   photos: ['/works/project-photo-1.jpg', '/works/project-photo-2.jpg'],
    //   highlights: ['System size', 'Products used', 'Other project detail'],
    // },
  ]

  return (
    <>
      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">Services</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Solar solutions from planning to ongoing care
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Explore our solar installation, panel cleaning, system maintenance, and product delivery services.
          </p>
          <a href="#project-work" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[#F87061] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ba4b3e]">
            View our work
          </a>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">What we provide</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Services for your solar system</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="flex min-h-52 items-start gap-5 border-t-2 border-slate-200 bg-slate-50 p-5 md:p-6">
                <img className="h-12 w-12 shrink-0 object-contain" src={service.image} alt="" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="project-work" className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">Selected projects</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Work across homes, businesses, and industry</h2>
            </div>
            {projects.length > 0 ? (
              <div className="space-y-6 md:space-y-8">
                {projects.map((project, index) => (
                  <article key={project.title} className={`work-card ${index % 2 === 0 ? 'work-card-left' : 'work-card-right'}`}>
                    <div className="work-image">
                      <div className={`grid h-full w-full gap-1 ${project.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {project.photos.map((photo, photoIndex) => (
                          <img
                            key={photo}
                            src={photo}
                            alt={`${project.title}, project photo ${photoIndex + 1}`}
                            className="min-h-0 min-w-0 object-cover"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="work-content">
                      <span className="work-tag">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p className="mb-3 text-sm text-slate-500">
                        {[project.location, project.year].filter(Boolean).join(' · ')}
                      </p>
                      <p>{project.description}</p>
                      <ul>
                        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="border-t border-slate-200 py-8 text-slate-600">Our project gallery is being updated.</p>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Planning a solar project?</h2>
          <a href="/contact" className="mt-4 inline-block font-semibold text-[#ba4b3e] underline underline-offset-4">
            Contact MOH Enterprises
          </a>
        </section>
        <ContactPartition />
      </main>
      <Footer />
    </>
  )
}

export default Services