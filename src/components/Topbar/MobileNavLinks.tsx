import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type MobileNavLinksProps = {
    openNav: boolean;
};

const MobileNavLinks = ({ openNav }: MobileNavLinksProps) => {
    return (
        <AnimatePresence>
            {openNav && (
                <motion.ul
                    key={"nav"}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    className="-z-50 fixed top-0 left-0 w-full h-full font-semibold flex flex-col justify-around items-center bg-black pt-14"
                >
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li className="font-normal">
                        <button className="border rounded-md p-2">Download CV</button>
                    </li>
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default MobileNavLinks;
