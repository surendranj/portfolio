import BurgerIcon from "./BurgerIcon";
import Logo from "./Logo";
import NavList from "./NavList";
import MobileNavList from "./MobileNavList";
import Container from "../Container";

const Nav = () => {
    return (
        <Container className="bg-primary h-[9vh] relative">
            <nav className="h-full flex flex-row justify-between text-white">
                <Logo />
                <NavList />
                <MobileNavList className="md:hidden" />
                <BurgerIcon />
            </nav>
        </Container>
    );
};

export default Nav;
