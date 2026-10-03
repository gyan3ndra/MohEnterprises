import phoneimg from '../assets/phone.png'

export const ContactPartition = ()=>{
    return(
        <section className="p-5 flex flex-col items-center gap-5 mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl font-light text-center">
          Need Assistance? Give Us a Call
        </h1>

        <a className="relative border-2 rounded-md font-semibold overflow-hidden group px-10 py-2 " href={`tel:${import.meta.env.VITE_PHONE}`}>
          <span className="relative z-10 text-slate-900 font-bold flex gap-5 items-center text-md">
            <img className="w-8 h-8" src={phoneimg} />
            CALL US
          </span>

          <span className="absolute z-0 top-0 left-0 w-0 h-full bg-gray-100 group-hover:w-full transition-all duration-500" />
        </a>
      </section>
    )
}
const whatsappNumber = import.meta.env.VITE_PHONE;
const defaultMessage = encodeURIComponent(`Hello, I’m interested in solar panels for my home/business. I’d like to know more about the available solar systems, pricing, and installation. Please share the details.
`)
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;