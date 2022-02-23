import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
    return (
        <section id={id} className={`px-1 md:px-20 ${className}`}>
            {children}
        </section>
    );
};

export default Container;
