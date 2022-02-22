import { ReactNode } from "react";
import { ChildrenProps } from "../types";

const Header = ({ children }: ChildrenProps) => {
    return <header>{children}</header>;
};

export default Header;
