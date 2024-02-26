import React from 'react'
import computer from "../assets/computer.png"
import Image from 'next/image'

const data = [
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
]

const Deals = () => {
    return (
        <div className='px-4'>
            <h2 className='text-[#2C384A] text-[32px] leading-[44px] font-normal'>Related deals you might like for</h2>
            <div className='grid grid-cols-3 gap-3 mt-2'>
                {
                    data.map((obj, index) => {
                        return <div className='p-2 bg-white flex flex-col gap-5' key={index}>
                            <Image src={computer} alt="computer" width={40} height={40} className='w-3/5 mt-5  self-center' />
                            <div className='text-sm font-normal text-[#074786] flex space-x-2'>
                                <span className='bg-[#f3f4f7] rounded-lg py-2 px-3'>{obj.discount}% Off</span>
                                <span className='bg-[#f3f4f7] rounded-lg py-2 px-3'>Limited time </span>
                            </div>
                            <p className='text-[#626E79] font-bold text-base self-center'>{obj.title}</p>
                            <p className='text-[#626E79] font-normal text-base  '>{obj.text}</p>
                            <div className='flex space-x-3 items-end'>
                                <span className='font-normal text-[#5C6874] text-xl'>${obj.price1}</span>
                                <span className='text-[#9FA9B3] font-normal text-sm'>${obj.price2}</span>
                                <span className='text-[#EF4C5D] text-[13px] leading-5'>({obj.discount}% off)</span>
                            </div>
                            <button className='bg-[#1B88F4] rounded-xl py-3 text-white w-full'>View Deals</button>
                        </div>
                    })
                }

            </div>
            <div className='flex items-center justify-between my-10'>
                <p className='w-[398px] text-[#5C6874] text-[32px] leading-[44px]'>Sign up and get exclusive special deals</p>
                <div className=''>
                    <input className=' px-4 py-2.5' />
                    <button className='bg-[#1B88F4] rounded-r-xl py-3 text-sm text-white px-4'>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Deals