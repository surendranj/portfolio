import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full h-screen tablet:h-[60vh] laptop:h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full ">
                <div className="relative z-10 w-full h-full bg-gradient-to-b from-black/30 via-black/30 to-algae "></div>
                <Image src={"/images/mountain-bg.jpg"} alt="hero background image" fill className=" object-cover" />
            </div>
            <div className=" relative z-10 flex flex-col items-center">
                <div className=" w-32 h-32 rounded-full bg-white"></div>
                <h1 className="mt-4">Surendran Jagadeesh</h1>
                <span className="mt-2">Web Developer</span>
            </div>
        </section>
    );
};

export default Hero;
