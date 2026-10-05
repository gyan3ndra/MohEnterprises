import React, { memo, useEffect, useState } from 'react'
import externallinkimg from '../assets/externallink.png'

const Kits = () => {
    const [kitcategory, setkitcategory] = useState('All')
    const kitCategories = [
        "All",
        "Home",
        "Business",
        "Industrial",
        "Backup",
        "Agriculture",
        "Premium"
    ];
    const [kit, setkit] = useState([])
    useEffect(() => {
        const fetchkits = async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/kits`)
            const data = await res.json()
            if (res.ok) {
                setkit(data)
            }
        }
        fetchkits()
    }, [])


    const filterkit = kitcategory !== 'All' ? kit.filter(kit => kit.kitCategory === kitcategory) : kit
    // console.log(filterkit)

    return (
        <section>
            <div id='KITS' className='p-3 mt-5 mb-3'>
                <h1 className='text-4xl font-bold text-center text-slate-900'>Product kits</h1>
                <p className='font-light text-lg text-center mt-1'>Pre-selected kits for a hassle-free solar setup.</p>

            </div>

            <section className='p-2'>
                <div className='flex flex-wrap gap-2 h-fit'>
                    {
                        kitCategories.map((e) => {
                            return (
                                <button key={e} onClick={() => { setkitcategory(e) }} className={`p-1 pl-3 pr-3 border text-slate-600 cursor-pointer hover:bg-orange-500/60 ${kitcategory === e ? 'bg-orange-500/70 border-none text-white' : 'bg-none'} transition-all duration-300 hover:text-white text-md rounded-2xl`}>{e}</button>
                            )
                        })
                    }
                </div>
            </section>
            {/* <ScrollCard> */}
            <section className='p-3 mt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
                    {
                        filterkit.map((e, index) => {
                            return (
                                <div key={e._id} className='w-full min-h-70 hover:scale-101 transition-all duration-200 bg-slate-900 p-4 gap-4 grid grid-cols-1  md:grid-cols-2 rounded-md'>
                                    <div className='h-full flex flex-col'>
                                        <div className='flex gap-3 items-center'>
                                            <h1 className='p-2 pl-5 pr-5 border font-semibold w-fit rounded-3xl text-white bg-slate-950 border-slate-600'>kit {index + 1}</h1>
                                            <h2 className='font-semibold text-md text-white'>{e.kitName}</h2>
                                        </div>
                                        <h2 className='p-1 pl-5 pr-5 bg-slate-100 rounded-2xl w-fit mt-2 text-sm'>{e.kitCategory}</h2>
                                        <p className='w-full text-slate-400 mt-5 pl-1 mb-2'>{e.kitInfo}</p>
                                        <a className=' text-white mt-auto hover:border border-gray-700 font-semibold p-2 pl-6 pr-6 text-center w-fit bg-slate-950 rounded-2xl flex gap-3 items-center' href={`/kits?id=${e.kitId}&kit=${index + 1}`}>Preview Kit <img className='w-4 h-4 invert' src={externallinkimg} /></a>
                                    </div>
                                    <div className='h-full max-h-60 bg-slate-950 rounded-md p-3 flex justify-center items-center overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800'>
                                        <div className='flex flex-col gap-1 h-full overflow-y-auto'>
                                            <p className="text-slate-300 font-light text-[14px]">
                                                ✘ Solar Structure
                                            </p>

                                            {e.kitItems.map((item) => {
                                                return (
                                                    <p key={item._id} className='text-slate-300 font-light text-[14px]'>✘ {item.productInfo}</p>
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
            {/* </ScrollCard> */}
        </section>
    )
}

export default memo(Kits)