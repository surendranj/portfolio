import Container from "../Container";
import ProjectCard from "./ProjectCard";
import marvel from "../../../public/images/marvel.png";
import tictactoe from "../../../public/images/tictactoe.png";
import spriteAnimation from "../../../public/images/sprite-animation.png";
import parallax from "../../../public/images/parallax-effect.png";

const projects = [
    {
        imgSrc: marvel,
        title: "Marvel Explorer",
        description:
            "Exploring Marvel Comics using the marvel comics API. Features include responsive design, infinite scrolling with intersection observer API,data caching with React Query, binary search to remove duplicate data and hero/comics search functionality.",
        projectSrc: "https://marvel-comics-explorer.vercel.app/",
        githubSrc: "https://github.com/surendranj/marvel-comics-explorer",
    },
    {
        imgSrc: tictactoe,
        title: "Tic Tac Toe",
        description:
            "Inspired by google's tictactoe game. The game can be played against a human player or AI. The AI has three modes, easy, medium and hard. A minimax algorithm node package was used for the AI.",
        projectSrc: "https://react-tictactoe-nine.vercel.app/",
        githubSrc: "https://github.com/surendranj/react-tictactoe",
    },
    {
        imgSrc: spriteAnimation,
        title: "Sprite Animation",
        description:
            "This is a simple sprite animation using the canvas API. It is part of a larger game project that I am currently working on.",
        projectSrc: "https://react-sprite-animation.vercel.app/",
        githubSrc: "https://github.com/surendranj/react-sprite-animation",
    },
    {
        imgSrc: parallax,
        title: "Parallax Effect",
        description: "Parallax effect for 2D games. Part of a larger game project I am working on.",
        projectSrc: "https://react-parallax-effect.vercel.app/",
        githubSrc: "https://github.com/surendranj/react-parallax-effect",
    },
];

const Projects = () => {
    return (
        <Container className="w-full flex flex-wrap justify-between gap-10 ">
            {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </Container>
    );
};

export default Projects;
