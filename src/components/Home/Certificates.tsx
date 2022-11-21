import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "../Icons/Chevron";

const certificates = [
    { name: "deep-learning.jpg", url: "https://coursera.org/share/575a6bc3b4ffe3ab20248e92eb4ab181" },
    { name: "data-analysis.jpg", url: "https://jovian.ai/certificate/MFQTEMZQHE" },
    {
        name: "graphql.jpg",
        url: "https://www.apollographql.com/tutorials/certifications/0d986dab-7620-4907-b074-73bed4f0b64e",
    },
];

const Certificates = () => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, []);

    const [x, setX] = useState(0);

    const handleLeftClick = () => {
        setX((prev) => {
            return prev + width + 8;
        });
    };
    const handleRightClick = () => {
        setX((prev) => {
            return prev - width - 8;
        });
    };

    return (
        <section>
            <h2>ML and Web Dev Certificates</h2>
            <div className="container relative overflow-hidden content-top-margin">
                <div className="flex tablet:justify-around gap-2">
                    {certificates.map((certificate) => (
                        <motion.a
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            animate={{ x }}
                            key={certificate.name}
                            href={certificate.url}
                            className="relative w-full shrink-0 tablet:w-[30%] h-64 tablet:h-40 desktop:h-56 rounded-md overflow-hidden opacity-90"
                        >
                            <Image
                                src={`/images/certificates/${certificate.name}`}
                                alt={`${certificate.name} certificate`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 280px) 100%, (max-width: 768px) 30%"
                            />
                        </motion.a>
                    ))}
                </div>
                <button
                    onClick={handleLeftClick}
                    disabled={x === 0}
                    className="tablet:hidden absolute top-0 bottom-0 left-0 disabled:opacity-10 w-14 flex justify-center items-center bg-gradient-to-r from-mud"
                >
                    <ChevronLeft className="stroke-mud" />
                </button>
                <button
                    onClick={handleRightClick}
                    disabled={x === -((width + 8) * 2)}
                    className="tablet:hidden absolute top-0 bottom-0 right-0 disabled:opacity-10 w-14 flex justify-center items-center bg-gradient-to-l from-mud"
                >
                    <ChevronRight className="stroke-mud" />
                </button>
            </div>
        </section>
    );
};

export default Certificates;
