import { useContext } from "react";
import { NavContext } from "./NavContext";

const BurgerIcon = () => {
    const { toggleNavList, setToggleNavList } = useContext(NavContext)!;
    return (
        <svg
            className="w-[40px] mr-2 cursor-pointer md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
                setToggleNavList(!toggleNavList);
            }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
};

export default BurgerIcon;
