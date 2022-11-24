import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Ghost } from "../Buttons/Buttons";
import Hamburger from "../Icons/Hamburger";
import MobileNavLinks from "./MobileNavLinks";

export const navLinks = [
    { href: "#about-me", name: "About Me" },
    { href: "#projects", name: "Projects" },
    { href: "#contact", name: "Contact" },
];

const Topbar = () => {
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(scrollYProgress, [0, 0.3, 1], ["hsla(0,0,0,0)", "#3E3521", "#393C3B"]);

    const [openNav, setOpenNav] = useState(false);

    return (
        <motion.nav
            style={{ backgroundColor }}
            className="fixed z-50 w-full flex justify-between items-center tablet:py-1"
        >
            <ul className="container flex items-center justify-between w-full overflow-hidden">
                <li className="relative w-20 h-14">
                    <Image
                        src={"/images/icons/logo.svg"}
                        alt="logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 280px) 80px"
                    />
                </li>
                <MobileNavLinks openNav={openNav} setOpenNav={setOpenNav} />
                <ul className="hidden tablet:flex items-center gap-10 laptop:gap-20 desktop:gap-28">
                    {navLinks.map((navLink) => (
                        <motion.li key={navLink.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                            <a href={navLink.href}>{navLink.name}</a>
                        </motion.li>
                    ))}
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="font-normal">
                        <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Ghost>Download CV</Ghost>
                        </a>
                    </motion.li>
                </ul>
                <motion.button onClick={() => setOpenNav(!openNav)} className="tablet:hidden">
                    <Hamburger open={openNav} />
                </motion.button>
            </ul>
        </motion.nav>
    );
};

export default Topbar;
