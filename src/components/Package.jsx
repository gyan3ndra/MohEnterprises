import React, { memo } from 'react'

const Package = () => {
    const packages = [
        {
            title: "ON GRID DCR",
            package: "PACKAGE 01",
            system: 'DCR Solar System',
            info: "Generate clean electricity while staying connected to the grid.",
            items: [
                "Microtek — 3 KW ONGRID DCR KIT",
                "Microtek — 5 KW ONGRID DCR KIT",
                "Microtek — 8 KW ONGRID DCR KIT",
                "Waree/Adani — 3 KW ONGRID DCR KIT",
                "Waree/Adani — 5 KW ONGRID DCR KIT"
            ],
            bestfor: "Best For: Homes & Businesses"
        },

        {
            title: "ON GRID NON DCR",
            package: "PACKAGE 02",
            system: 'Affordable Solar Solution',
            info: "Reliable grid-connected solar power designed to reduce your electricity bills.",
            items: [
                "Microtek/Waree/Adani — 10 KW ONGRID NON DCR KIT",
                "Waree/Adani/Microtek — 8 KW ONGRID NONDCR KIT",
                "Microtek/Waree/Adani — 3 KW ONGRID NON DCR KIT",
                "Microtek/Waree/Adani — 5 KW ONGRID NON DCR KIT"
            ],
            bestfor: "Best For: Cost-Effective Solar"
        },

        {
            title: "OFF GRID NON DCR",
            package: "PACKAGE 03",
            system: 'Solar With Battery Backup',
            info: "Independent solar power with battery backup for reliable electricity.",
            items: [
                "Microtek/Adani/Waree — OFFGRID 3 KW NON DCR KIT — With Lithium Ion Battery",
                "Microtek/Waree/Adani — OFFGRID 5 KW NONDCR KIT — With 5120Wh 100Ah 25.6V Lithium Ion Battery"
            ],
            bestfor: "Best For: Independent Power"
        },

        {
            title: "HYBRID DCR",
            package: "PACKAGE 04",
            system: 'Smart Hybrid Solar System',
            info: "Smart solar systems combining grid power with battery backup.",
            items: [
                "Microtek — 3 KW DCR HYBRID KIT",
                "Microtek — 5 KW DCR HYBRID KIT",
                "Waree/Adani — 3 KW DCR HYBRID KIT",
                "Waree/Adani — 5 KW DCR HYBRID KIT"
            ],
            bestfor: "Best For: Smart Energy & Backup"
        }
    ]
    return (
        <section id='PACKAGES' className='relative min-h-screen pt-18 bg-gray-800 pb-18'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full p-5 *:transition-all *:hover:scale-101 *:duration-200 *:cursor-pointer *:rounded-2xl'>
                {
                    packages.map((e) => {
                        return (
                            <a href={`https://wa.me/${import.meta.env.VITE_PHONE}?text=${encodeURIComponent(`Hello, I’m interested in the *${e.title}* solar package. ${e.info}

*Available options:*
${e.items.map(item => `• ${item}`).join('\n')}

Please share more details about installation, warranty, and the suitable system for my requirements.`)}`} target='_blank' rel='noopener noreferrer' key={e.title} className='relative w-[88%] sm:w-full max-w-sm sm:max-w-none mx-auto overflow-hidden flex flex-col min-h-110 sm:min-h-105 lg:min-h-110 p-1 shadow-md shadow-black/20 bg-slate-900 hover:border hover:border-white transition-all'>
                                <div className='p-2 sm:p-3 rounded-2xl mt-2'>
                                    <p className='text-gray-100 text-xs sm:text-sm font-extrabold'>{e.package}</p>
                                    <h1 className='text-xl sm:text-2xl font-extrabold text-slate-200 leading-tight'>{e.title}</h1>
                                    <h3 className='text-slate-600 font-semibold mt-2 p-1 px-2 sm:px-3 bg-white shadow-md border border-gray-400 text-xs sm:text-sm w-fit max-w-full rounded-md'>{e.system}</h3>
                                </div>
                                <div className='p-2 sm:p-3 flex-1'>
                                    <div className='h-px bg-slate-500 w-5/6 mx-auto mt-1 sm:mt-2 rounded-full mb-2'></div>
                                    <p className='text-xs sm:text-sm text-white font-light leading-relaxed'>{e.info}</p>
                                    <ul className='text-[10px] sm:text-xs text-slate-400 mx-auto w-full mt-3 space-y-1.5 sm:space-y-2 p-2 sm:p-3 rounded-md inset-shadow-sm inset-shadow-black/20 min-h-45 sm:min-h-45 lg:h-50 flex flex-col'>
                                        {e.items.map((list, index) => <li key={index} className='leading-relaxed'>✔ {list}</li>)}
                                    </ul>
                                </div>
                                <div className='px-2 sm:px-3 pb-2'>
                                    <h1 className='text-xs sm:text-sm p-2 px-3 sm:px-4 bg-slate-950 text-white font-semibold rounded-md shadow-md w-full mt-2 leading-tight'>{e.bestfor}</h1>
                                </div>
                                <div className='w-full h-1.5 sm:h-2 bg-slate-950 absolute bottom-0 left-0'></div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="block w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        fill="white"
                        d="M0,70 C180,120 300,20 480,55 C660,90 760,110 930,55 C1100,5 1250,20 1440,70 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg className="block w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        fill="white"
                        d="M0,50 C180,0 300,100 480,65 C660,30 760,10 930,65 C1100,115 1250,100 1440,50 L1440,0 L0,0 Z"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Package