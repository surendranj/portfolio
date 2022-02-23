import Container from "../Container";
import Image from "next/image";
import aboutmePic from "../../../public/images/aboutme-pic.png";

const AboutMe = () => {
    return (
        <Container className="flex justify-between items-start" id="about-me">
            <div className="w-3/12 mt-6 ml-3 grow ">
                <h2 className="text-2xl font-medium">About Me</h2>
                <p className="mt-3 mr-12">
                    Hi, I am Surendran Jagadeesh. I like building websites with React. Some of my recent projects can be
                    found below.
                </p>
            </div>

            <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative top-6 right-3">
                <Image src={aboutmePic} alt="A picture of me" layout="fill" objectFit="cover" />
            </div>
        </Container>
    );
};

export default AboutMe;
