import Head from "next/head";
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
            <Head>
                <title>Surendran Jagadeesh</title>
                <link rel="icon" href="/images/icons/logo-sm.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
