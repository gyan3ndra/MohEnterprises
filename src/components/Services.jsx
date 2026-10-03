import React, { useState } from "react";
import Footer from "./Footer.jsx";
import { ContactPartition } from "./Partition.jsx";
import solarImage from "../assets/solar.png";
import wrenchImage from "../assets/wrench.png";
import powerImage from "../assets/power.png";

const ProjectCarousel = ({ photos, title }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      {/* Images */}
      {photos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`${title} - image ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Previous button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={previousImage}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-slate-900 shadow-md transition hover:bg-white"
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      {/* Next button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-slate-900 shadow-md transition hover:bg-white"
          aria-label="Next image"
        >
          →
        </button>
      )}

      {/* Image counter */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {current + 1} / {photos.length}
        </div>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-6 bg-[#F87061]" : "w-2 bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Industrial"];

  const projects = [
    {
      title: "Residential Rooftop Solar Installation",
      category: "Residential",
      location: "Residential Project",
      year: "2024",
      description:
        "A rooftop solar installation designed to provide reliable and efficient clean energy for a residential property.",
      photos: ["/works/img1.jpg", "/works/img2.jpg", "/works/img3.jpg", "/works/img4.jpg"],
      highlights: [
        "Rooftop solar installation",
        "High-efficiency solar panels",
        "Professional mounting structure",
      ],
    },
    {
      title: "Commercial Solar Power System",
      category: "Commercial",
      location: "Commercial Project",
      year: "2024",
      description:
        "A commercial solar power system designed to support business operations with efficient and dependable renewable energy.",
      photos: ["/works/img3.jpg", "/works/img5.png"],
      highlights: [
        "Large-scale panel layout",
        "Optimized energy generation",
        "Commercial rooftop installation",
      ],
    },
    {
      title: "Industrial Solar Installation",
      category: "Industrial",
      location: "Industrial Project",
      year: "2025",
      description:
        "A robust solar installation designed for an industrial facility, focusing on long-term energy efficiency and reliable performance.",
      photos: [
        "/works/img5.jpg",
        "/works/img6.jpg",
        "/works/img1.jpg",
        "/works/img2.jpg",
        "/works/img3.jpg",
        "/works/img4.jpg",
        "/works/img5.jpg",
        "/works/img6.jpg",
      ],
      highlights: [
        "Heavy-duty infrastructure",
        "Large rooftop installation",
        "Long-term energy efficiency",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const services = [
    {
      title: "Solar Panel Installation",
      description:
        "Panel installation for homes, businesses, and other properties, planned around the site and energy requirements.",
      image: solarImage,
    },
    {
      title: "Solar Panel Cleaning",
      description:
        "Panel cleaning to remove dust and surface buildup as part of regular solar system care.",
      image: wrenchImage,
    },
    {
      title: "Solar System Maintenance",
      description:
        "System checks and maintenance support to help identify issues and keep equipment in good condition.",
      image: wrenchImage,
    },
    {
      title: "Product Delivery",
      description:
        "Delivery of solar panels, inverters, batteries, and other solar equipment for your project.",
      image: powerImage,
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white pt-24">
        <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">
            Services
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Solar solutions from planning to ongoing care
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Explore our solar installation, panel cleaning, system maintenance,
            and product delivery services.
          </p>
          <a
            href="#project-work"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[#F87061] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ba4b3e]"
          >
            View our work
          </a>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">
              What we provide
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Services for your solar system
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex min-h-52 items-start gap-5 border-t-2 border-slate-200 bg-slate-50 p-5 md:p-6"
              >
                <img
                  className="h-12 w-12 shrink-0 object-contain"
                  src={service.image}
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="project-work"
          className="bg-slate-50 px-4 py-20 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            {/* Section heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F87061]">
                Our work
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Solar projects we've worked on
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Explore some of our residential, commercial, and industrial
                solar installation work.
              </p>
            </div>

            {/* Category filters */}
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? "border-[#F87061] bg-[#F87061] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-[#F87061] hover:text-[#F87061]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Project images */}
                  <div className="h-72 overflow-hidden bg-slate-100">
                    <ProjectCarousel
                      photos={project.photos}
                      title={project.title}
                    />
                  </div>

                  {/* Project information */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {project.category}
                      </span>

                      <span className="text-sm text-slate-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#F87061]">
                      {project.location}
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                        Project highlights
                      </p>

                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <span className="mt-1 text-[#F87061]">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
                <p className="text-slate-600">
                  Projects in this category will be added soon.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-t-2 border-[#F87061] bg-slate-50 p-6">
                <p className="text-3xl font-extrabold text-slate-900">01</p>
                <h3 className="mt-3 font-bold text-slate-900">
                  Project Planning
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understanding site requirements and planning the right solar
                  solution.
                </p>
              </div>

              <div className="border-t-2 border-[#F87061] bg-slate-50 p-6">
                <p className="text-3xl font-extrabold text-slate-900">02</p>
                <h3 className="mt-3 font-bold text-slate-900">Installation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Professional installation of solar panels and supporting
                  equipment.
                </p>
              </div>

              <div className="border-t-2 border-[#F87061] bg-slate-50 p-6">
                <p className="text-3xl font-extrabold text-slate-900">03</p>
                <h3 className="mt-3 font-bold text-slate-900">System Setup</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Electrical integration, inverter setup, testing, and
                  commissioning.
                </p>
              </div>

              <div className="border-t-2 border-[#F87061] bg-slate-50 p-6">
                <p className="text-3xl font-extrabold text-slate-900">04</p>
                <h3 className="mt-3 font-bold text-slate-900">
                  Ongoing Support
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Maintenance and support to help keep the solar system
                  performing well.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Planning a solar project?
          </h2>
          <a
            href="/contact"
            className="mt-4 inline-block font-semibold text-[#ba4b3e] underline underline-offset-4"
          >
            Contact MOH Enterprises
          </a>
        </section>
        <ContactPartition />
      </main>
      <Footer />
    </>
  );
};

export default Services;
