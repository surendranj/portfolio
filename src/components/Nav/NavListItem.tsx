import { ChildrenProps } from "../../types";

const NavListItem = ({ children }: ChildrenProps) => {
    return <li className="cursor-pointer">{children}</li>;
};

export default NavListItem;
