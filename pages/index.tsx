import { NextPage } from "next";
import Head from "next/head";
import Nav from "../src/components/Nav/Nav";
import Header from "../src/components/Header";
import { NavProvider } from "../src/components/Nav/NavContext";
import HeroSection from "../src/components/Hero/HeroSection";
import AboutMe from "../src/components/AboutMe/AboutMe";

const Home: NextPage = () => {
    return (
        <NavProvider>
            <div>
                <Head>
                    <title>Surendran&apos;s Portfolio</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header>
                    <Nav />
                </Header>
                <main>
                    <HeroSection />
                    <AboutMe />
                </main>
            </div>
        </NavProvider>
    );
};

export default Home;
