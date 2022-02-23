import { useContext } from "react";
import { NavContext } from "./NavContext";
import { motion } from "framer-motion";
import MobNavListItem from "./MobNavListItem";

type MobileNavListProps = {
    className: string;
};

const mobNavListStyles =
    " absolute top-14 left-0  bg-secondary w-full -z-10 divide-y flex flex-col justify-center items-center rounded-b-md ";

const MobileNavList = ({ className }: MobileNavListProps) => {
    const { toggleNavList } = useContext(NavContext)!;
    return (
        <motion.ul
            animate={{ translateY: toggleNavList ? "0%" : "-110%" }}
            initial={false}
            transition={{ type: "spring", stiffness: 70 }}
            className={mobNavListStyles + className}
        >
            <MobNavListItem>
                <a href="#about-me">About Me</a>
            </MobNavListItem>
            <MobNavListItem>
                <a href="#projects">Projects</a>
            </MobNavListItem>
            <MobNavListItem>
                <a href="contact">Contact</a>
            </MobNavListItem>
        </motion.ul>
    );
};

export default MobileNavList;
