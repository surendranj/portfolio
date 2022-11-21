import Image from "next/image";
import React from "react";

const socialIcons = ["github", "twitter", "facebook", "linkedin"];
const Social = () => {
    return (
        <section className="container">
            <h2>Social</h2>
            <div className="flex gap-4 flex-wrap justify-center content-top-margin">
                {socialIcons.map((icon) => (
                    <div key={icon} className="relative w-10 h-10">
                        <Image
                            src={`/images/icons/${icon}.svg`}
                            alt={`${icon} icon`}
                            className="object-contain"
                            fill
                            sizes="(max-width: 280px) 40px"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Social;
