import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ghost } from "../Buttons/Buttons";
import { navLinks } from "./Topbar";

type MobileNavLinksProps = {
    openNav: boolean;
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavLinks = ({ openNav, setOpenNav }: MobileNavLinksProps) => {
    return (
        <AnimatePresence>
            {openNav && (
                <motion.ul
                    key={"nav"}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    className="-z-50 fixed top-0 left-0 w-full h-full font-semibold flex flex-col justify-around items-center pt-14 backdrop-blur-3xl backdrop-brightness-75"
                >
                    {navLinks.map((navLink) => (
                        <li key={navLink.name} onClick={() => setOpenNav(false)}>
                            <a href={navLink.href}>{navLink.name}</a>{" "}
                        </li>
                    ))}
                    <li onClick={() => setOpenNav(false)} className="font-normal">
                        <Ghost>Download CV</Ghost>
                    </li>
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default MobileNavLinks;
