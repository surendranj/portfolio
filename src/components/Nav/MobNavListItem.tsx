import { ChildrenProps } from "../../types";

const MobNavListItem = ({ children }: ChildrenProps) => {
    return <li className="h-10 my-auto flex justify-center items-center cursor-pointer">{children}</li>;
};

export default MobNavListItem;
