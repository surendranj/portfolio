import NavListItem from "./NavListItem";

const NavList = () => {
    return (
        <ul className="invisible md:visible grow-[0.8] flex justify-between items-center mr-4">
            <NavListItem>About Me</NavListItem>
            <NavListItem>Projects</NavListItem>
            <NavListItem>Contact</NavListItem>
        </ul>
    );
};

export default NavList;
