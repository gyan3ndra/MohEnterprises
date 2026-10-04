import { section } from 'framer-motion/client'
import ScrollCard from './ScrollCard';
import React, { memo, useEffect, useState } from 'react'

const Kits = () => {
    const [kitcategory,setkitcategory] = useState('All')
    const kitCategories = [
        "All",
        "Home",
        "Business",
        "Industrial",
        "Backup",
        "Agriculture",
        "Premium"
    ];

    const kits = [
        {
            id: 1,
            name: "Basic Solar Kit",
            category: "Home",
            description: "A complete solar setup for basic home energy needs.",
            items: [
                "Solar Panels",
                "Grid-Tied Inverter",
                "DCDB Box",
                "ACDB Box",
                "Earthing Kit",
                "Solar Structure",
                "Solar Wires"
            ]
        },
        {
            id: 2,
            name: "Home Solar Kit",
            category: "Business",
            description: "A reliable solar solution designed for everyday household power needs.",
            items: [
                "Solar Panels",
                "Solar Inverter",
                "Solar Battery",
                "DCDB Box",
                "ACDB Box",
                "Earthing Kit",
                "Solar Structure",
                "Solar Wires"
            ]
        },
        {
            id: 3,
            name: "Premium Solar Kit",
            category: "Industrial",
            description: "A high-performance solar package with complete protection and backup.",
            items: [
                "TOPCon Solar Panels",
                "Hybrid Inverter",
                "Solar Battery",
                "DCDB Box",
                "ACDB Box",
                "Earthing Kit",
                "Solar Structure",
                "Solar Wires"
            ]
        },
        {
            id: 4,
            name: "Business Solar Kit",
            category: "Backup",
            description: "A complete solar system for reliable commercial power requirements.",
            items: [
                "High-Efficiency Solar Panels",
                "Grid-Tied Inverter",
                "DCDB Box",
                "ACDB Box",
                "Earthing Kit",
                "Solar Structure",
                "Solar Wires"
            ]
        },
        {
            id: 5,
            name: "Solar Backup Kit",
            category: "Premium",
            description: "Solar power with battery storage for dependable backup during outages.",
            items: [
                "Solar Panels",
                "Hybrid Inverter",
                "Microtek Solar Battery",
                "DCDB Box",
                "ACDB Box",
                "Earthing Kit",
                "Solar Structure",
                "Solar Wires"
            ]
        },
        {
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
    ]
    console.log(kitcategory)

    const filterkit = kitcategory!=='All' ? kits.filter(kit=>kit.category===kitcategory) : kits
    console.log(filterkit)
    
    return (
        <section>
            <div id='KITS' className='p-4 mt-5 mb-3'>
                <h1 className='text-4xl font-bold text-center text-slate-900'>Product kits</h1>
                <p className='font-light text-lg text-center mt-1'>Pre-selected kits for a hassle-free solar setup.</p>

            </div>

            <section className='p-2'>
                <div className='flex flex-wrap gap-2'>
                    {
                        kitCategories.map((e) => {
                            return (
                                <button key={e} onClick={()=>{setkitcategory(e)}} className='p-1 pl-3 pr-3 border text-slate-600 cursor-pointer hover:bg-orange-500/60 transition-all duration-300 hover:text-white text-md rounded-2xl'>{e}</button>
                            )
                        })
                    }
                </div>
            </section>
            <ScrollCard>
                <section className='p-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
                        {
                            filterkit.map((e) => {
                                return (
                                    <div key={e.id} className='w-full min-h-70 hover:scale-101 transition-all duration-200 bg-slate-900 p-4 gap-4 grid grid-cols-1  md:grid-cols-2 rounded-md'>
                                        <div className='h-full flex flex-col'>
                                            <div className='flex gap-3 items-center'>
                                                <h1 className='p-2 pl-5 pr-5 border font-semibold w-fit rounded-3xl text-white bg-slate-950 border-slate-600'>kit {e.id}</h1>
                                                <h2 className='font-semibold text-lg text-white'>{e.name}</h2>
                                            </div>
                                            <h2 className='p-1 pl-5 pr-5 bg-slate-100 rounded-2xl w-fit mt-2 text-sm'>{e.category}</h2>
                                            <p className='w-full text-slate-400 mt-5 pl-1 mb-2'>{e.description}</p>
                                            <a className=' text-white mt-auto hover:border border-gray-700 font-semibold p-2 pl-6 pr-6 text-center w-fit bg-slate-950 rounded-2xl' href={`/kits?id=${e.id}`}>Preview Kit</a>
                                        </div>
                                        <div className='h-full bg-slate-950 rounded-md p-3 flex justify-center items-center'>
                                            <div className='flex flex-col gap-2 h-full overflow-y-auto'>
                                                {e.items.map((item) => {
                                                    return (
                                                        <p key={item} className='text-slate-300 font-light text-[14px]'>✘ {item}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </ScrollCard>
        </section>
    )
}

export default memo(Kits)