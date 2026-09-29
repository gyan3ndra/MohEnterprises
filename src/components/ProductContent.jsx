import warrantyimg from '../assets/products/properties/warranty.png'
import capacityimg from '../assets/products/properties/capacity.png'
import efficiencyimg from '../assets/products/properties/efficiency.png'
import durabilityimg from '../assets/products/properties/durability.png'
import materialimg from '../assets/products/properties/material.png'
import insulationimg from '../assets/products/properties/insulation.png'
import conductorimg from '../assets/products/properties/conductor.png'

export const InverterContent = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 md:p-1 gap-1 md:gap-2'>
            <div className='flex items-center gap-1'>
                <img className='h-3 w-3 sm:h-5 sm:w-5 shrink-0' src={warrantyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>warranty</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>10 years</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-3 w-3 sm:h-5 sm:w-5 shrink-0' src={capacityimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>capacity</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>3,5,8,10 kw</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-3 w-3 sm:h-5 sm:w-5 shrink-0' src={efficiencyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>efficiency</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>100%</p>
                </div>
            </div>
        </div>
    )
}

export const PanelContent = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 md:p-1 gap-1 md:gap-2'>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={warrantyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>warranty</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>10 years</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={capacityimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>capacity</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>550w</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={efficiencyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>efficiency</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>100%</p>
                </div>
            </div>
        </div>
    )
}

export const WireContent = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 md:p-1 gap-1 md:gap-2'>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={warrantyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>warranty</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>10 years</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={conductorimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>conductor</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>copper</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={insulationimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>insulation</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>UV & weather resistant</p>
                </div>
            </div>
        </div>
    )
}

export const StructureContent = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 md:p-1 gap-1 md:gap-2'>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={warrantyimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>warranty</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>10 years</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={materialimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>material</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>galvanized steel</p>
                </div>

            </div>
            <div className='flex items-center gap-1'>
                <img className='h-4 w-4 sm:h-5 sm:w-5 shrink-0' src={durabilityimg} alt="" />
                <div>
                    <h4 className='text-[9px] sm:text-[11px]'>durability</h4>
                    <p className='text-[8px] sm:text-[9px] font-light'>corrosion resistant</p>
                </div>
            </div>
        </div>
    )
}

// export const InverterContent = () => {
//     return (
//         <div className='grid grid-cols-3 p-1 gap-2'>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={warrantyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>warranty</h4>
//                     <p className='text-[9px] font-light'>10 years</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={capacityimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>capacity</h4>
//                     <p className='text-[9px] font-light'>3,5,8,10 kw</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={efficiencyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>efficiency</h4>
//                     <p className='text-[9px] font-light'>100%</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export const PanelContent = () => {
//     return (
//         <div className='grid grid-cols-3 p-1 gap-2'>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={warrantyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>warranty</h4>
//                     <p className='text-[9px] font-light'>10 years</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={capacityimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>capacity</h4>
//                     <p className='text-[9px] font-light'>550w</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={efficiencyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>efficiency</h4>
//                     <p className='text-[9px] font-light'>100%</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export const WireContent = () => {
//     return (
//         <div className='grid grid-cols-3 p-1 gap-2'>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={warrantyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>warranty</h4>
//                     <p className='text-[9px] font-light'>10 years</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={conductorimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>conductor</h4>
//                     <p className='text-[9px] font-light'>copper</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={insulationimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>insulation</h4>
//                     <p className='text-[9px] font-light'>UV & weather resistant</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export const StructureContent = () => {
//     return (
//         <div className='grid grid-cols-3 p-1 gap-2'>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={warrantyimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>warranty</h4>
//                     <p className='text-[9px] font-light'>10 years</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={materialimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>material</h4>
//                     <p className='text-[9px] font-light'>galvanized steel</p>
//                 </div>

//             </div>
//             <div className='flex items-center gap-1'>
//                 <img className='h-5 w-5 shrink-0' src={durabilityimg} alt="" />
//                 <div>
//                     <h4 className='text-[11px]'>durability</h4>
//                     <p className='text-[9px] font-light'>corrosion resistant</p>
//                 </div>
//             </div>
//         </div>
//     )
// }