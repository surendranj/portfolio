import React from "react";
import Envelope from "../Icons/Envelope";
import Facebook from "../Icons/Facebook";
import Github from "../Icons/Github";
import LinkedIn from "../Icons/LinkedIn";
import Phone from "../Icons/Phone";
import Twitter from "../Icons/Twitter";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer id="contact" className="border-t-2 border-salt/10 text-salt/70 content-top-margin py-10">
            <div className="container flex flex-col gap-6 tablet:flex-row flex-wrap tablet:gap-x-10">
                <div className="flex flex-col gap-1">
                    <span className="text-lg">Contact</span>
                    <motion.div className="flex gap-4" whileHover={{ color: "#E2E6E8" }}>
                        <Envelope />
                        <a href="mailto: surendranjagadeesh@gmail">surendranjagadeesh@gmail.com</a>
                    </motion.div>
                    <motion.div className="flex gap-4" whileHover={{ color: "#E2E6E8" }}>
                        <Phone />
                        <a href="tel:+919945130349 ">+919945130349</a>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-lg">Connect</span>
                    <div className="flex gap-4">
                        <motion.a
                            href="https://github.com/surendranj"
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: "#E2E6E8" }}
                        >
                            <Github />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/surendran-jagadeesh/"
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: "#E2E6E8" }}
                        >
                            <LinkedIn />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/surendran.jagadeesh"
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: "#E2E6E8" }}
                        >
                            <Facebook />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/suri_jagad"
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: "#E2E6E8" }}
                        >
                            <Twitter />
                        </motion.a>
                    </div>
                </div>
                <div className="flex gap-2 text-xs mt-10 text-salt/50 w-full">
                    &#169;
                    <span>{new Date().getFullYear()}</span>
                    <span>Surendran Jagadeesh</span>
                    &#183;
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
