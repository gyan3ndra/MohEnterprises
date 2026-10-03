import React, { memo } from 'react'

const Package = () => {
    const packages = [
        {
            title: "ON GRID DCR",
            package: "PACKAGE 01",
            system: 'DCR Solar System',
            info: "Generate clean electricity while staying connected to the grid.",
            items: [
                "Microtek — 3 KW ONGRID DCR KIT — ₹1,75,000 – ₹1,85,000",
                "Microtek — 5 KW ONGRID DCR KIT — ₹2,70,000 – ₹2,80,000",
                "Microtek — 8 KW ONGRID DCR KIT — ₹4,00,000 – ₹4,10,000",
                "Waree/Adani — 3 KW ONGRID DCR KIT — ₹1,80,000 – ₹1,90,000",
                "Waree/Adani — 5 KW ONGRID DCR KIT — ₹2,80,000 – ₹2,90,000"
            ],
            bestfor: "Best For: Homes & Businesses"
        },

        {
            title: "ON GRID NON DCR",
            package: "PACKAGE 02",
            system: 'Affordable Solar Solution',
            info: "Reliable grid-connected solar power designed to reduce your electricity bills.",
            items: [
                "Microtek/Waree/Adani — 10 KW ONGRID NON DCR KIT — ₹3,70,000 – ₹3,80,000",
                "Waree/Adani/Microtek — 8 KW ONGRID NONDCR KIT — ₹3,35,000 – ₹3,45,000",
                "Microtek/Waree/Adani — 3 KW ONGRID NON DCR KIT — ₹1,40,000 – ₹1,50,000",
                "Microtek/Waree/Adani — 5 KW ONGRID NON DCR KIT — ₹2,30,000 – ₹2,40,000"
            ],
            bestfor: "Best For: Cost-Effective Solar"
        },

        {
            title: "OFF GRID NON DCR",
            package: "PACKAGE 03",
            system: 'Solar With Battery Backup',
            info: "Independent solar power with battery backup for reliable electricity.",
            items: [
                "Microtek/Adani/Waree — OFFGRID 3 KW NON DCR KIT — ₹2,00,000 – ₹2,10,000 — With Lithium Ion Battery",
                "Microtek/Waree/Adani — OFFGRID 5 KW NONDCR KIT — ₹3,40,000 – ₹3,50,000 — With 5120Wh 100Ah 25.6V Lithium Ion Battery"
            ],
            bestfor: "Best For: Independent Power"
        },

        {
            title: "HYBRID DCR",
            package: "PACKAGE 04",
            system: 'Smart Hybrid Solar System',
            info: "Smart solar systems combining grid power with battery backup.",
            items: [
                "Microtek — 3 KW DCR HYBRID KIT — ₹2,30,000 – ₹2,40,000",
                "Microtek — 5 KW DCR HYBRID KIT — ₹3,90,000 – ₹4,00,000",
                "Waree/Adani — 3 KW DCR HYBRID KIT — ₹2,45,000 – ₹2,55,000",
                "Waree/Adani — 5 KW DCR HYBRID KIT — ₹4,20,000 – ₹4,40,000"
            ],
            bestfor: "Best For: Smart Energy & Backup"
        }
    ]
    return (
        <section className='h-screen pt-18'>
            <div className='grid grid-cols-4 gap-5 w-full h-full p-5 *:transition-all *:hover:scale-102 *:duration-200 *:cursor-pointer *:rounded-2xl'>
                {
                    packages.map((e) => {
                        return (
                            <div key={e.title} className='w-full flex flex-col h-110 p-1 shadow-lg'>
                                <div className='p-2 rounded-2xl'>
                                    <h1 className='text-2xl font-extrabold text-slate-800'>{e.title}</h1>
                                    <p className='text-red-900 text-sm font-extrabold font-mono'>{e.package}</p>
                                    <h3 className=' text-slate-100 font-semibold mt-2 p-1 pl-3 pr-3 bg-blue-950 text-sm w-fit rounded-md'>{e.system}</h3>
                                    {/* <div className='h-px bg-slate-500 w-5/6 mx-auto mt-2 rounded-full'></div> */}
                                </div>
                                <div className='p-2'>
                                    <p className='text-sm font-light'>{e.info}</p>
                                    <ul className="*:text-[10px] mx-auto w-full mt-3 space-y-2 p-2 rounded-md bg-gray-200 h-50 flex flex-col justify-center items-center">
                                        {e.items.map((list) => {
                                            return (
                                                <li>{list}</li>
                                            )
                                        })}

                                    </ul>
                                </div>
                                <h1 className='text-sm p-3'>{e.bestfor}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Package