import React, { memo, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
const Admin = () => {
    const isadmin = localStorage.getItem('admin')
    if(isadmin!=='true'){
        return <Navigate to="/admin/protected" replace />
    }
    const [products, setproducts] = useState([])
    const [removeitem, setremoveitem] = useState('')
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
    useEffect(() => {
        const fetchproducts = async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
            const data = await res.json()
            if (res.ok) {
                setproducts(data)
            }

            // console.log(data)
        }
        fetchproducts()
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
    // console.log(input)
    console.log(updateddetails)

    return (
        <section className='bg-white h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-center'>
                <form className='lg:fixed ld:top-0 shadow-md h-fit flex flex-col bg-slate-950 rounded-b-md w-full md:w-100 gap-5 justify-center items-center p-5' onSubmit={handleSubmit}>
                    <div className='p-2'>
                        <h1 className='text-white text-lg font-extrabold font-mono'>TOTAL ITEMS : {products.length}</h1>
                    </div>
                    <select onChange={handleChange} className='w-full p-3 rounded-md bg-white border cursor-pointer' name="productType" id="">
                        <option value="">Product Type</option>
                        <option value="panel">panel</option>
                        <option value="structure">structure</option>
                        <option value="inverter">inverter</option>
                        <option value="wire">wire</option>
                        <option value="battery">battery</option>
                        <option value="distribution-box">distribution box</option>
                        <option value="earthing-kit">earthing kit</option>
                    </select>
                    <input onChange={handleChange} name="image" className='w-full p-3 rounded-md bg-white border-2 cursor-pointer' type="file" />
                    <input placeholder='product info' onChange={handleChange} name="productInfo" className='p-3 rounded-md bg-white border-2 w-full' type="text" />
                    <button type='submit' className='w-full font-mono p-4 bg-white text-black font-bold cursor-pointer hover:scale-101 hover:bg-gray-200 transition-all duration-300'>upload</button>
                </form>
                
            </div>
            <section className='p-2 w-full mx-auto grid grid-cols-2 md:w-fit mb-10 mt-10 md:grid-cols-3 gap-3'>
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
                                <div className='absolute top-1 left-1 w-full flex gap-2'>
                                    <button onClick={() => { setremoveitem(e.productId) }} className=' bg-red-600 text-sm cursor-pointer hover:bg-red-900 transition-all duration-300 rounded-md pr-3 pl-3 text-white font-mono font-bold'>delete</button>
                                    <button onClick={() => { setupdateitem(e.productId) }} className='border-2 text-sm cursor-pointer hover:bg-slate-200 transition-all duration-300 rounded-md pr-3 pl-3 text-slate-950 font-mono font-bold'>update</button>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
            {
                removeitem && <div className={`fixed p-4 w-80 h-fit bg-slate-950/80 backdrop-blur-md rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <h1 className='text-white font-light text-2xl'>are u sure u want to delete it?</h1>
                    <div className='w-full h-fit mt-5 mb-5 md:mb-2 gap-2 flex justify-between'>
                        <button onClick={() => { setremoveitem('') }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button onClick={() => { handledelete() }} className='p-3 w-1/2 rounded-md bg-red-500 font-bold font-mono cursor-pointer hover:bg-red-800 transition-all duration-300'>delete</button>
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
                        <button onClick={() => { setupdateitem('') }} className='p-3 w-1/2 rounded-md bg-white font-bold font-mono cursor-pointer hover:bg-gray-300 transition-all duration-300'>cancel</button>
                        <button type='submit' className='p-3 w-1/2 rounded-md bg-green-500 font-bold font-mono cursor-pointer hover:bg-green-800 transition-all duration-300'>update</button>
                    </div>
                </form>
            }
            <div className={`absolute left-2 bottom-2 text-white bg-black text-lg font-semibold font-mono p-2 pl-4 pr-4 rounded-md border ${message ? 'flex' : 'hidden'}`}>{message}</div>
        </section>
    )
}

export default Admin