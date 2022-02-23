import { useContext } from "react";
import { NavContext } from "./NavContext";
import { ChildrenProps } from "../../types";

const MobNavListItem = ({ children }: ChildrenProps) => {
    const { setToggleNavList } = useContext(NavContext)!;

    return (
        <li
            className="h-10 my-auto flex justify-center items-center cursor-pointer"
            onClick={() => setToggleNavList(false)}
        >
            {children}
        </li>
    );
};

export default MobNavListItem;
