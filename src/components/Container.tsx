import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <section className={`px-1 md:px-20 ${className}`}>{children}</section>;
};

export default Container;
