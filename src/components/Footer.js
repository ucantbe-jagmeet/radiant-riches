import React from "react";

const Footer = () => {
    return (
        <section className="w-full bg-[#212731]">
            <div className="w-[1000px] mx-auto ">
                <div className="w-[80%] py-10 flex justify-between">
                    <div className="">
                        <h2 className="font-normal text-white text-base">Categories</h2>
                        <div className="text-[#B6BDC4] text-[13px] leading-5 flex flex-col gap-6 mt-5">
                            <span>Web Builder</span>
                            <span>Hoisting</span>
                            <span>Data Center</span>
                            <span>Robotic-Automation</span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-normal text-white text-base">Contact</h2>
                        <div className="text-[#B6BDC4] text-[13px] leading-5 flex flex-col gap-5 mt-4">
                            <span>Contact</span>
                            <span>Privacy Policy</span>
                            <span>Terms Of Service</span>
                            <span>Categories</span>
                            <span>About</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-[#D1D6DA] text-[13px] leading-5">
                            United States
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;