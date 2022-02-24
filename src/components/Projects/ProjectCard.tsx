import Image from "next/image";

type ProjectCardProps = {
    imgSrc: StaticImageData;
    title: string;
    description: string;
    projectSrc: string;
    githubSrc: string;
};

const ProjectCard = ({ imgSrc, title, description, projectSrc, githubSrc }: ProjectCardProps) => {
    return (
        <div className="w-full shadow-xl rounded-2xl h-[450px] overflow-hidden flex flex-col justify-between items-center md:w-5/12 lg:h-[500px] lg:w-3/12">
            <div className="w-full -z-10">
                <Image src={imgSrc} alt="marvel project" />
            </div>
            <h3 className="text-2xl mb-3">{title}</h3>
            <p className="px-3 text-center text-sm">{description}</p>
            {/* <p className="px-3 text-center text-sm" dangerouslySetInnerHTML={{ __html: description }} /> */}
            <div className="flex w-full justify-evenly">
                <button className="bg-secondary rounded-2xl text-white font-light px-3 py-1 my-3 ">
                    <a href={projectSrc}>View Project</a>
                </button>
                <button className="bg-secondary rounded-2xl text-white font-light px-3 py-1 my-3 ">
                    <a href={githubSrc}>Github</a>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
