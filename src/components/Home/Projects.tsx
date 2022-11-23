import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "../Icons/Chevron";

const projectData = [
    {
        img: "primax.png",
        description:
            "Primax - A fully responsive movie app created with Nextjs, Redux Toolkit, Tailwindcss and Typescript. Includes Firebase authentication and search functionality.",
        projectLink: "https://primax-685eb.web.app/",
        githubLink: "https://github.com/surendranj/primax",
    },
    {
        img: "topdown.png",
        description:
            "Topdown - A fully responsive luxury car rental app created with Nextjs, Tailwindcss and Typescript.",
        projectLink: "https://topdown-surendranj.vercel.app/",
        githubLink: "https://github.com/surendranj/luxury-car-rental-react-app",
    },
    {
        img: "marvel-comics-explorer.png",
        description:
            "Marvel Comics Explorer - A fully responsive Nextjs app that fetches data from the marvel comics api using React Query. Includes infinite scroll and search functionality.",
        projectLink: "https://marvel-comics-explorer.vercel.app/",
        githubLink: "https://github.com/surendranj/marvel-comics-explorer",
    },
    {
        img: "tictactoe.png",
        description:
            "Tic Tac Toe - game created with Nextjs and Tailwindcss. Play against computer with three levels - easy, medium and hard. Hard level uses minimax algorithm.",
        projectLink: "https://react-tictactoe-nine.vercel.app/",
        githubLink: "https://github.com/surendranj/react-tictactoe",
    },
];

const projectMotion: Variants = {
    hidden: (clickDirection: string) => ({
        opacity: 0,
        x: clickDirection === "right" ? 500 : -500,
    }),
    visible: () => ({
        opacity: 1,
        x: 0,
        transition: { type: "tween" },
    }),
    exit: (clickDirection: string) => ({
        opacity: 0,
        x: clickDirection === "left" ? 500 : -500,
        transition: { type: "tween" },
    }),
};

const Projects = () => {
    const [currentProj, setCurrentProj] = useState(0);
    const [clickDirection, setClickDirection] = useState<string | null>(null);

    const handleLeftClick = () => {
        setCurrentProj((currProj) => {
            if (currProj === 0) {
                currProj = projectData.length - 1;
            } else {
                currProj--;
            }
            return currProj;
        });

        setClickDirection("left");
    };

    const handleRightClick = () => {
        setCurrentProj((currProj) => {
            if (currProj === projectData.length - 1) {
                currProj = 0;
            } else {
                currProj++;
            }
            return currProj;
        });
        setClickDirection("right");
    };
    return (
        <section id="projects" className="relative container overflow-hidden  ">
            <h2>Projects</h2>
            <AnimatePresence mode="wait" initial={false} custom={clickDirection}>
                <motion.div
                    key={projectData[currentProj].img}
                    variants={projectMotion}
                    custom={clickDirection}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-2 content-top-margin"
                >
                    <div className="relative w-full h-60 tablet:h-[40vh] laptop:h-[50vh] mb-2">
                        <Image
                            src={`/images/projects/${projectData[currentProj].img}`}
                            alt={`${projectData[currentProj].img} project`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="mb-2">{projectData[currentProj].description}</p>
                    <div className="mt-4 flex gap-4 w-full max-w-md  justify-center mx-auto">
                        <motion.a
                            href={projectData[currentProj].projectLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="basis-0 grow p-2 bg-white rounded-md text-center text-black"
                        >
                            View Project
                        </motion.a>
                        <motion.a
                            href={projectData[currentProj].githubLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            className="basis-0 grow p-2 border rounded-md text-center"
                        >
                            GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-10 justify-center">
                <button onClick={handleLeftClick}>
                    <ChevronLeft />
                </button>
                <button onClick={handleRightClick}>
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Projects;
