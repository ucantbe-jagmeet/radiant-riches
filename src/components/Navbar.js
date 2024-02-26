import React from 'react'
import SearchIcon from "../assets/search-icon.png"
import Image from 'next/image'
const navLinksData = [
    {
        id: 1,
        navlink: "Categories",
        path: "/categories",
    },
    {
        id: 2,
        navlink: "Website Builders",
        path: "/website-builders",
    },
    {
        id: 3,
        navlink: "Today's Deals",
        path: "/deals",
    },
]

const Navbar = () => {
    return (
        <div className='flex items-center justify-center bg-[#212731] h-[60px] gap-x-14'>
            <div className='ml-20 flex items-center'>
                <Image src={SearchIcon} width={20} height={20} className='absolute ml-2 ' alt="search-icon" />
                <input type="search" name="search" id="search" className='rounded-lg py-1.5 pl-10 w-[250px] outline-none' />
            </div>
            <div className='text-white flex space-x-14 '>
                {
                    navLinksData.map((link) => {
                        const { id, path, navlink } = link;
                        {/* will not set path here */ }
                        return <a key={id} href='#' className='text-[#D1D6DA] text-[13px] tracking-wide'>{navlink}</a>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
