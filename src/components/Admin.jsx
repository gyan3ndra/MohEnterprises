import React, { memo, useState, useEffect } from 'react'

const Admin = () => {
    const [products, setproducts] = useState([])
    const [message,setmessage] = useState('')
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
        }, 2000);
        setinput({
            productType: '',
            productInfo: '',
            image: null
        })


    }
    const handleChange = (e) => {
        setinput(prev => ({ ...prev, [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value }))
    }
    console.log(input)

    return (
        <section className='bg-white h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-center'>
                <form className='h-fit flex flex-col bg-slate-950 w-100 gap-5 justify-center items-center p-5' onSubmit={handleSubmit}>
                    <select onChange={handleChange} className='w-full p-4 bg-white border cursor-pointer' name="productType" id="">
                        <option value="">Product Type</option>
                        <option value="panel">panel</option>
                        <option value="structure">structure</option>
                        <option value="inverter">inverter</option>
                        <option value="wire">wire</option>
                        <option value="battery">battery</option>
                        <option value="distribution-box">distribution box</option>
                        <option value="earthing-kit">earthing kit</option>
                    </select>
                    <input onChange={handleChange} name="image" className='w-full p-4 bg-white border-2 cursor-pointer' type="file" />
                    <input placeholder='info' onChange={handleChange} name="productInfo" className='p-4 bg-white border-2 w-full' type="text" />
                    <button type='submit' className='w-full p-4 bg-blue-600 text-white font-bold cursor-pointer hover:scale-101 hover:bg-blue-800'>upload</button>
                </form>
            </div>
            <div className='p-2 overflow-y-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-3 place-content-center gap-5'>
                    {
                        products.map((e) => {
                            return (
                                <div key={e.productId} className='w-45 h-55 bg-gray-100 p-2 shadow-md'>
                                    <div className='w-full h-3/4 bg-gray-200'><img className='w-full h-full object-contain' src={e.imageUrl} alt="" /></div>
                                    <div className='flex-1'>
                                        <h3 className='text-[12px] font-bold mt-1 font-mono'>{e.productType}</h3>
                                        <p className='text-[10px] font-light'>{e.productInfo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`absolute left-2 bottom-2 text-green-500 text-lg font-semibold font-mono p-2 border ${message?'flex':'hidden'}`}>{message}</div>
        </section>
    )
}

export default Admin