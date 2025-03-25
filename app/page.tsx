import Content from "@/components/Content";
import FeliIcon from "@/components/FeliIcon";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Content center>
        <div className="mt-8 flex flex-col items-center">
          <FeliIcon margin={16} fixed />
          <h1 className="text-center text-2xl font-medium">
            Welcome to <span className="text-feli">Feli Page!</span>
          </h1>
        </div>
        <div className="mt-8">
          <Link href="/apps">Browse Apps</Link>
        </div>
      </Content>
    </>
  );
};

export default Home;
