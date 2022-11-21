import React from "react";
import Topbar from "../Topbar/Topbar";
import AboutMe from "./AboutMe";
import Certificates from "./Certificates";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Home = () => {
    return (
        <>
            <Topbar />
            <Hero />
            <div className="bg-gradient-to-b from-algae to-darkOcean">
                <AboutMe />
                <TechStack />
                <Certificates />
                <Projects />

                <Footer />
            </div>
        </>
    );
};

export default Home;
