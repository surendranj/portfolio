import Image from "next/image";
import React from "react";

const familiarStackIcons = ["graphql", "prisma", "python"];

const FamiliarTech = () => {

    return (
        <section className="container">
            <h2>Familiar Tech</h2>
            <div className="flex gap-4 flex-wrap justify-center">
                {familiarStackIcons.map((icon) => (
                    <div key={icon} className="relative w-10 h-10">
                        <Image src={`/images/icons/${icon}.svg`} alt={`${icon} icon`} className="object-contain" fill />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FamiliarTech;
