import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section id="about-me" className="container">
            <h2>About Me</h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="content-top-margin"
            >
                Hi!, I am Surendran Jagadeesh. I design and develop modern responsive and interactive web apps with
                ReactJs and NextJs. Checkout some of my recent projects below.
            </motion.p>
        </section>
    );
};

export default AboutMe;
