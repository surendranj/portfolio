import Container from "../Container";
import { GitHubIcon, LinkedIn, Twitter } from "../Icons";

const HeroSection = () => {
    return (
        <Container className="bg-primary h-[91vh] flex justify-center items-center">
            <div className="text-white w-full flex justify-between px-3">
                <div className="h-full flex flex-col items-start justify-start">
                    <h1 className="text-5xl font-bold">Surendran Jagadeesh</h1>
                    <p className="text-2xl font-light mt-2">Frontend Developer</p>
                    <button className="mt-4 bg-secondary text-2xl font-light px-4 py-2 rounded-3xl">
                        <a href="#about-me">About Me</a>
                    </button>
                </div>
                <div className="flex flex-col items-start justify-around">
                    <a href="https://github.com/surendranj">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/surendran-jagadeesh/">
                        <LinkedIn />
                    </a>
                    <a href="https://twitter.com/suri_jagad">
                        <Twitter />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;
