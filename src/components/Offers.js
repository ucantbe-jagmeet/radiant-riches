import React from 'react'
import Icon1 from "../assets/icon-1.png"
import Icon2 from "../assets/icon-2.png"
import Image from 'next/image'

const Offers = ({ bestChoice, bestValue }) => {

    if (!bestChoice && !bestValue) return null
    return (
        <div className='absolute bg-[#FF7724] h-9 w-32 -top-2 md:-left-4 right-0 rounded-tr-lg rounded-br-lg flex items-center '>
            <Image src={bestChoice ? Icon1 : Icon2} alt="Best Choice" width={20} height={20} className='ml-2' />
            <p className='text-white ml-2 text-[14px]'>
                {
                    bestChoice ? "Best Choice" : "Best Value"
                }
            </p>
        </div>
    )
}

export default Offers
