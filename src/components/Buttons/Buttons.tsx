import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
};
export const Ghost = ({ children, className }: ButtonProps) => {
    return <button className={`border rounded-md p-2 ${className ? className : ""}`}>{children}</button>;
};

export const Filled = ({ children, className }: ButtonProps) => {
    return <button className={`rounded-md p-2 bg-white ${className ? className : ""}`}>{children}</button>;
};
