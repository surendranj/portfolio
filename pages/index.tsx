import { useContext } from "react";
import { NavContext } from "../src/components/Nav/NavContext";
import { NextPage } from "next";
import Head from "next/head";
import Nav from "../src/components/Nav/Nav";
import Header from "../src/components/Header";
import HeroSection from "../src/components/Hero/HeroSection";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";

const Home: NextPage = () => {
    const { setToggleNavList } = useContext(NavContext)!;

    return (
        <div>
            <Head>
                <title>Surendran&apos;s Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header>
                <Nav />
            </Header>
            <main onClick={() => setToggleNavList(false)}>
                <HeroSection />
                <AboutMe />
                <Projects />
            </main>
        </div>
    );
};

export default Home;
