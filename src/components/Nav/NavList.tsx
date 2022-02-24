import NavListItem from "./NavListItem";

const NavList = () => {
    return (
        <ul className="invisible md:visible grow-[0.8] flex justify-between items-center mr-4">
            <NavListItem>
                <a href="#about-me">About Me</a>
            </NavListItem>
            <NavListItem>
                <a href="#projects">Projects</a>
            </NavListItem>
            <NavListItem>
                <a href="#contact">Contact</a>
            </NavListItem>
        </ul>
    );
};

export default NavList;
