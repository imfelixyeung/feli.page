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
        className={`mx-auto min-h-screen max-w-6xl ${
          center ? "flex flex-col items-center" : ""
        } ${justifyText ? "text-justify" : ""}`}
      >
        {children}
      </main>
    </>
  );
};

export default Content;
