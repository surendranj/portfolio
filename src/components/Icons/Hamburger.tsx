import React from "react";
import { motion } from "framer-motion";

type HamburgerProps = {
    open: boolean;
};
const Hamburger = ({ open }: HamburgerProps) => {
    return (
        <motion.svg
            animate={open ? "open" : "closed"}
            width="30"
            height="30"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={{
                    closed: { d: "M9.5 8.5, L34.5 8.5" },
                    open: { d: "M13.1213 11, L30.799 28.6777" },
                }}
                strokeLinecap="round"
                className="stroke-white stroke-[3]"
            />
            <motion.path
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                transition={{ duration: 0.1 }}
                d={"M9.5 20.5, L22.5 20.5"}
                strokeLinecap="round"
                className="stroke-white stroke-[3]"
            />
            <motion.path
                variants={{
                    closed: { d: "M9.5 32.5, L34.5 32.5" },
                    open: { d: "M13.1006 28.8787, L30.7783 11.201" },
                }}
                strokeLinecap="round"
                className="stroke-white stroke-[3]"
            />
        </motion.svg>
    );
};

export default Hamburger;
