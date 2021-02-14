import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    center?: boolean;
    justifyText?: boolean;
}

const Content = ({ children, center = false, justifyText = false }: Props) => {
    return (
        <>
            <main
                className={`max-w-6xl mx-auto min-h-screen ${
                    center ? "flex items-center flex-col" : ""
                } ${justifyText ? "text-justify" : ""}`}
            >
                {children}
            </main>
        </>
    );
};

export default Content;
