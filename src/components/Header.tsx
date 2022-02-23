import { ChildrenProps } from "../types";

const Header = ({ children }: ChildrenProps) => {
    return <header className="sticky top-0">{children}</header>;
};

export default Header;
