import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import MobileNavLinks from "./MobileNavLinks";

const Topbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <nav className="relative container flex justify-between items-center text-white">
            <ul className="flex items-center justify-between w-full">
                <li className="relative w-20 h-14">
                    <Image src={"/images/icons/logo.svg"} alt="logo" fill className="object-contain" />
                </li>
                <MobileNavLinks openNav={openNav} />
                <ul className="hidden tablet:flex items-center gap-10 laptop:gap-20 desktop:gap-28">
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li className="font-normal">
                        <button className="border rounded-md p-2">Download CV</button>
                    </li>
                </ul>
            </ul>
            <button className="tablet:hidden" onClick={() => setOpenNav(!openNav)}>
                <Hamburger open={openNav} />
            </button>
        </nav>
    );
};

export default Topbar;
