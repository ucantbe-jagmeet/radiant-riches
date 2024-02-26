import React from "react";

const Footer = () => {
    return (
        <section className="w-full bg-[#212731] md:px-28 flex justify-center">
            <div className="w-[80%] py-10 grid grid-cols-6">
                <div className=" col-span-3 md:col-span-2 ">
                    <h2 className="font-normal text-white text-base">Categories</h2>
                    <div className="text-[#B6BDC4] text-[13px] leading-5 flex flex-col gap-6 mt-5">
                        <span>Web Builder</span>
                        <span>Hoisting</span>
                        <span>Data Center</span>
                        <span>Robotic-Automation</span>
                    </div>
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <h2 className="font-normal text-white text-base">Contact</h2>
                    <div className="text-[#B6BDC4] text-[13px] leading-5 flex flex-col gap-5 mt-4">
                        <span>Contact</span>
                        <span>Privacy Policy</span>
                        <span>Terms Of Service</span>
                        <span>Categories</span>
                        <span>About</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 col-span-3 md:col-span-2">

                    <select className='bg-transparent text-white text-[13px] '>
                        {
                            ["United States", "India", "Brazil", "Others"].map((optionValue) => {
                                return <option value="vegetable" key={optionValue}>{optionValue}</option>
                            })
                        }

                    </select>
                </div>
            </div>
        </section>
    );
};

export default Footer;