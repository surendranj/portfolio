import { createContext, useState } from "react";
import { ChildrenProps } from "../../types";

export type NavContextType = {
    toggleNavList: boolean;
    setToggleNavList: (value: boolean) => void;
};

export const NavContext = createContext<NavContextType | null>(null);

export const NavProvider = ({ children }: ChildrenProps) => {
    const [toggleNavList, setToggleNavList] = useState(false);
    return <NavContext.Provider value={{ toggleNavList, setToggleNavList }}>{children}</NavContext.Provider>;
};
