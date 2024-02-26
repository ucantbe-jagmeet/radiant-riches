import Image from 'next/image'
import React from 'react'
import RightIcon from "../assets/right-tick.png"
import InfoIcon from "../assets/info-icon.png"
import GreaterIcon from "../assets/greater-than-icon.png"

const Hero = () => {
    return (
        <main className='h-60 w-full '>
            <h1 className='text-5xl py-8'>
                Best Website builders in the US
            </h1>
            <div className='flex justify-between  border-[#E1E4E6] border-t-[1px] border-b-[1px] py-3'>
                <div className='flex gap-x-5 text-[13px] text-[#4B5665]  tracking-wide'>
                    <h2 className='flex items-center gap-x-1'>
                        <Image src={RightIcon} width={20} height={20} className=' ' alt="RightIcon" />
                        <p>
                            Last Updated - Feburary 22, 2020
                        </p>
                    </h2>
                    <h2 className='flex items-center gap-x-1'>
                        <Image src={InfoIcon} width={20} height={20} className=' ' alt="InfoIcon" />
                        <p>
                            Advertising Disclosure
                        </p>
                    </h2>
                </div>
                <select className='text-[12px] text-[#4B5665]'>
                    {
                        ["Top Relevant", "a-z", "z-a"].map((optionValue) => {
                            return <option value="vegetable" key={optionValue}>{optionValue}</option>
                        })
                    }

                </select>
            </div>

            <div className='flex  text-[13px] text-[#4B5665] gap-x-20 py-5 pl-3'>
                {
                    ["Tools", "AWZ Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"].map((item, index) => {
                        return <h4 key={index}>{item}</h4>
                    })
                }
            </div>

            <div className='flex  text-[13px] text-[#4B5665] gap-x-3 '>
                {
                    ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"].map((item, index) => {
                        return <div key={index} className='flex gap-x-3 items-center cursor-pointer'>
                            <p>{item}   </p>
                            <div className='text-[10px]'>
                                {
                                    index < 4 && <Image src={GreaterIcon} width={20} height={5} className='h-2 w-2' alt="RightIcon" />

                                }
                            </div>
                        </div>
                    })
                }
            </div>

        </main>
    )
}

export default Hero
