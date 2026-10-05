import React, { memo, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
const Admin = () => {
    const isadmin = localStorage.getItem('admin')
    if (isadmin !== 'true') {
        return <Navigate to="/admin/protected" replace />
    }
    const [products, setproducts] = useState([])
    const [kits, setkits] = useState([])
    const [addtokit, setaddtokit] = useState({
        productId: '',
        kitId: ''
    })
    const [removeitem, setremoveitem] = useState('')
    const [removekit, setremovekit] = useState('')
    const [updateitem, setupdateitem] = useState('')
    const [updateddetails, setupdateddetails] = useState({
        productImage: null,
        productInfo: ''
    })
    const [message, setmessage] = useState('')
    const [input, setinput] = useState({
        productType: '',
        productInfo: '',
        image: null
    })
    const [kitinput, setkitinput] = useState({
        KitName: '',
        KitInfo: '',
        KitCategory: ''
    })
    useEffect(() => {
        const fetchproducts = async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
            const data = await res.json()
            if (res.ok) {
                setproducts(data)
            }

            // console.log(data)
        }
        const fetchkits = async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/kits`)
            const data = await res.json()
            if (res.ok) {
                setkits(data)
            }
        }
        fetchproducts()
        fetchkits()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.image || !input.productType || !input.productInfo) return

        const formData = new FormData()
        formData.append('productType', input.productType)
        formData.append('productInfo', input.productInfo)
        formData.append('image', input.image)

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        console.log(data)
        setmessage(data.message)
        setTimeout(() => {
            setmessage('')
            window.location.reload()
        }, 2000);
        setinput({
            productType: '',
            productInfo: '',
            image: null
        })

    }
    const handledelete = async () => {
        if (!removeitem) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/delete?productId=${removeitem}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            setmessage(data.message)
            setremoveitem('')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error)
            setmessage('failed to delete item!')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        }
    }
    const handleupdateddetails = (e) => {
        setupdateddetails(prev => ({ ...prev, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if ((!updateddetails.productImage && !updateddetails.productInfo) || !updateitem) return

        try {
            const formData = new FormData()
            formData.append('productImage', updateddetails.productImage)
            formData.append('productInfo', updateddetails.productInfo)
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/update?productId=${updateitem}`, {
                method: "PUT",
                body: formData
            })
            const data = await res.json()

            console.log(data)
            setupdateddetails({
                productImage: null,
                productInfo: ''
            })
            setupdateitem('')
            setmessage(data.message)
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error)
            setmessage('failed to delete item!')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        }
    }
    const handleChange = (e) => {
        setinput(prev => ({ ...prev, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value }))
    }
    const handleKitChange = (e) => {
        setkitinput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleAddToKitChange = (e) => {
        setaddtokit(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    // console.log(input)
    // console.log(updateddetails)
    // console.log(kitinput)
    const handleKitSubmit = async (e) => {
        e.preventDefault()
        if (!kitinput.KitCategory || !kitinput.KitInfo || !kitinput.KitName) return
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/createkit`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(kitinput)
            })
            const data = await res.json()
            setmessage(data.message)
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000)
        } catch (error) {
            console.log(error)
            setmessage('failed to create kit!')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        }
    }
    // console.log(kitinput)
    const handleAddToKit = async (e) => {
        e.preventDefault()
        if (!addtokit.productId || !addtokit.kitId) return
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/add-to-kit`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addtokit)
            })
            const data = await res.json()
            setmessage(data.message)
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000)
        } catch (error) {
            console.log(error)
            setmessage('failed to add item to kit!')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        }

    }

    const handlekitremove = async () => {
        if (!removekit) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/deletekit?kitId=${removekit}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            setmessage(data.message)
            setremovekit('')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error)
            setmessage('failed to delete item!')
            setTimeout(() => {
                setmessage('')
                window.location.reload();
            }, 2000);
        }
    }
    console.log(removekit)

    return (
        <section className=''>
            <section className='bg-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-950'>
                    <form className='shadow-md mx-auto h-fit flex flex-col rounded-b-md w-fit gap-3 justify-center items-center p-5' onSubmit={handleSubmit}>
                        <div className='flex gap-3'>
                            <select onChange={handleChange} className='w-1/2 p-3 rounded-md bg-white border cursor-pointer' name="productType" id="">
                                <option value="">Product Type</option>
                                <option value="panel">panel</option>
                                <option value="structure">structure</option>
                                <option value="inverter">inverter</option>
                                <option value="wire">wire</option>
                                <option value="battery">battery</option>
                                <option value="distribution-box">distribution box</option>
                                <option value="earthing-kit">earthing kit</option>
                            </select>
                            <input onChange={handleChange} name="image" className='w-1/2 p-3 rounded-md bg-white border-2 cursor-pointer' type="file" />
                        </div>
                        <input placeholder='product info' onChange={handleChange} name="productInfo" className='w-full p-3 rounded-md bg-white border-2 focus:outline-0' type="text" />
                        <button type='submit' className='pl-10 pr-10 font-mono p-3 w-full rounded-md bg-white text-black font-bold cursor-pointer hover:scale-101 transition-all duration-200'>upload product</button>
                    </form>
                    <form className='shadow-md mx-auto h-fit flex flex-col rounded-b-md w-fit gap-3 justify-center items-center p-5' onSubmit={handleKitSubmit}>
                        <div className='flex gap-3'>
                            <input onChange={handleKitChange} name="KitName" className='w-1/2 p-3 rounded-md bg-white border-2 cursor-pointer focus:outline-0' placeholder='Kit Name' type="text" />
                            <select onChange={handleKitChange} name="KitCategory" className='w-1/2 p-3 rounded-md bg-white border-2 cursor-pointer focus:outline-0' id="">
                                <option value="">Kit Category</option>
                                <option value="Home">Home</option>
                                <option value="Business">Business</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Backup">Backup</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>
                        <input placeholder='Kit Description' onChange={handleKitChange} name="KitInfo" className='w-full p-3 rounded-md bg-white border-2 focus:outline-0' type="text" />
                        <button type='submit' className='pl-10 pr-10 font-mono p-3 w-full rounded-md bg-white text-black font-bold cursor-pointer hover:scale-101 transition-all duration-200'>create kit</button>
                    </form>


                </div>
                <div className='flex justify-between p-3 items-center'>
                    <h1 className='text-3xl font-bold'>PRODUCTS</h1>
                    <h1 className='text-lg font-semibold font-mono text-slate-600'>products - {products.length}</h1>
                </div>
                <section className='p-2 w-full mx-auto grid grid-cols-2 md:w-fit mb-10 mt-10 md:grid-cols-4 lg:grid-cols-6 gap-3 overflow-y-auto h-110 md:h-150'>
                    {
                        products.map((e) => {
                            return (
                                <div key={e._id} className='relative w-full md:w-45 h:60 sm:h-55 bg-white p-2 shadow-md rounded-md hover:scale-101 transition-all duration-300 cursor-pointer'>
                                    <div className='w-full rounded-md h-3/4 bg-white'>
                                        <img className='w-full h-full object-contain' src={e.imageUrl} alt="" />
                                    </div>

                                    <div className='flex-1 p-1 min-w-0'>
                                        <h3 className='text-[12px] font-bold mt-1 font-mono text-slate-200 bg-slate-700 rounded-md w-fit pr-2 pl-2'>
                                            {e.productType}
                                        </h3>

                                        <p className='text-[10px] mt-1 font-light text-slate-900 truncate pl-1'>
                                            {e.productInfo}
                                        </p>
                                    </div>
                                    <div className='absolute top-1 left-1 w-full flex flex-wrap gap-2'>
                                        <button onClick={() => { setremoveitem(e.productId) }} className=' bg-red-500 text-sm cursor-pointer hover:bg-red-900 transition-all duration-300 rounded-md pr-3 pl-3 text-white font-mono font-bold'>Delete</button>
                                        <button onClick={() => { setupdateitem(e.productId) }} className='bg-gray-700 text-white text-sm cursor-pointer hover:bg-slate-500 transition-all duration-300 rounded-md pr-3 pl-3 font-mono font-bold'>Update</button>
                                        {
                                            e.productType !== "structure" && <button onClick={() => { setaddtokit(prev => ({ ...prev, productId: e._id })) }} className='bg-blue-600 text-sm cursor-pointer hover:bg-green-800 transition-all duration-300 rounded-md pr-3 pl-3 text-white font-mono font-bold'>Add</button>
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                </section>

            </section>
            <section className='p-3'>
                <div className='flex justify-between p-3 mb-5 items-center'>
                    <h1 className='text-3xl font-bold'>KITS</h1>
                    <h1 className='text-lg font-semibold font-mono text-slate-600'>kits - {kits.length}</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5'>
                    {
                        kits.map((e) => {
                            return (
                                <div key={e.kitId} className='w-full min-h-70 hover:scale-101 transition-all duration-200 bg-slate-900 p-4 gap-4 grid grid-cols-1  md:grid-cols-2 rounded-md'>
                                    <div className='h-full flex flex-col'>
                                        <div className='flex gap-3 items-center'>
                                            <h1 className='p-2 pl-5 pr-5 border font-semibold w-fit rounded-3xl text-white bg-slate-950 border-slate-600'>{e.kitId}</h1>
                                            <h2 className='font-semibold text-md text-white'>{e.kitName}</h2>
                                        </div>
                                        <h2 className='p-1 pl-5 pr-5 bg-slate-100 rounded-2xl w-fit mt-2 text-sm'>{e.kitCategory}</h2>
                                        <p className='w-full text-slate-400 mt-5 pl-1 mb-2'>{e.kitInfo}</p>
                                        <button onClick={() => { setremovekit(e.kitId) }} className=' text-white mt-auto hover:border cursor-pointer font-semibold p-2 pl-6 pr-6 text-center w-fit bg-red-500 rounded-2xl'>Delete Kit</button>
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
            {
                removeitem && <div className={`fixed p-4 w-80 h-fit bg-slate-950/80 backdrop-blur-md rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <h1 className='text-white font-light text-2xl'>are u sure u want to delete it?</h1>
                    <div className='w-full h-fit mt-5 mb-5 md:mb-2 gap-2 flex justify-between'>
                        <button type="button" onClick={() => { setremoveitem('') }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button onClick={() => { handledelete() }} className='p-3 w-1/2 rounded-md bg-red-500 font-bold font-mono cursor-pointer hover:bg-red-800 transition-all duration-300'>delete</button>
                    </div>
                </div>
            }
            {
                removekit && <div className={`fixed p-4 w-80 h-fit bg-slate-950/80 backdrop-blur-md rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <h1 className='text-white font-light text-2xl'>are u sure u want to delete this kit?</h1>
                    <div className='w-full h-fit mt-5 mb-5 md:mb-2 gap-2 flex justify-between'>
                        <button type="button" onClick={() => { setremovekit('') }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button onClick={() => { handlekitremove() }} className='p-3 w-1/2 rounded-md bg-red-500 font-bold font-mono cursor-pointer hover:bg-red-800 transition-all duration-300'>delete</button>
                    </div>
                </div>
            }
            {
                updateitem && <form onSubmit={handleUpdate} className={`fixed p-4 w-80 h-fit bg-slate-950/80 backdrop-blur-md rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <h1 className='text-white font-light text-lg font-mono'>update item</h1>
                    <div className=' h-fit mt-5'>
                        <input onChange={handleupdateddetails} name='productImage' placeholder='' className='p-3 rounded-md bg-slate-100 w-full cursor-pointer focus:outline-0' type="file" />
                        <input onChange={handleupdateddetails} name='productInfo' placeholder='update product info?' className='text-sm p-3 rounded-md bg-slate-100 w-full mt-3 cursor-pointer focus:outline-0' type="text" />
                    </div>
                    <div className='w-full h-fit mt-5 mb-5 md:mb-2 gap-2 flex justify-between'>
                        <button type="button" onClick={() => { setupdateitem('') }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button type='submit' className='p-3 w-1/2 rounded-md bg-green-500 font-bold font-mono cursor-pointer hover:bg-green-800 transition-all duration-300'>update</button>
                    </div>
                </form>
            }
            {
                addtokit.productId && <form onSubmit={handleAddToKit} className={`fixed p-4 w-80 h-fit bg-slate-950/80 backdrop-blur-md rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <h1 className='text-white font-light text-lg font-mono'>add item to kit</h1>
                    <h1 className='text-white font-light text-sm font-mono mt-3'>✘ choose the kit [by kit id]</h1>
                    <div className='h-fit mt-5'>
                        <select onChange={handleAddToKitChange} className='bg-white cursor-pointer focus:outline-0 w-full p-3 pl-4 pr-4 rounded-md' name="kitId" id="">
                            <option value=''>choose kit</option>
                            {
                                kits.map((e) => {
                                    return (

                                        <option key={e._id} value={e.kitId}>{e.kitId}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='w-full h-fit mt-5 mb-5 md:mb-2 gap-2 flex justify-between'>
                        <button type="button" onClick={() => { setaddtokit({ productId: '', kitId: '' }) }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button type='submit' className='p-3 w-1/2 rounded-md bg-yellow-500 font-bold font-mono cursor-pointer hover:bg-yellow-800 transition-all duration-300'>add</button>
                    </div>
                </form>
            }
            <div className={`fixed left-2 bottom-2 text-white bg-black text-lg font-semibold font-mono p-2 pl-4 pr-4 rounded-md border ${message ? 'flex' : 'hidden'}`}>{message}</div>
        </section>
    )
}

export default Admin