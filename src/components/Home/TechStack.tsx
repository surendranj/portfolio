import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const stackIcons = [
    { img: "react", name: "React" },
    { img: "nextjs", name: "NextJs" },
    { img: "javascript", name: "Javascript" },
    { img: "typescript", name: "Typescript" },
    { img: "tailwindcss", name: "Tailwindcss" },
    { img: "html", name: "HTML" },
    { img: "css", name: "CSS" },
    { img: "framer", name: "Framer Motion" },
];

const iconMotion: Variants = {
    hidden: { opacity: 0, y: 50 },
    appear: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const iconNameMotion: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const TechStack = () => {
    return (
        <section className="container">
            <h2>My Build Stack</h2>
            <div className="flex gap-4 flex-wrap justify-center content-top-margin">
                {stackIcons.map((icon) => (
                    <motion.div
                        initial="hidden"
                        whileHover="visible"
                        whileInView="appear"
                        variants={iconMotion}
                        viewport={{ once: true }}
                        key={icon.name}
                        className="relative w-10 h-10 flex justify-center"
                    >
                        <Image
                            src={`/images/icons/${icon.img}.svg`}
                            alt={`${icon.img} icon`}
                            className="object-contain"
                            fill
                            sizes="(max-width: 280px) 40px"
                        />
                        <motion.div
                            variants={iconNameMotion}
                            className="absolute -bottom-8 min-w-max  rounded-sm p-1 text-xs text-salt/50 "
                        >
                            {icon.name}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
