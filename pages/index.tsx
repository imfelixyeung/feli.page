import AppPreviewCard from "@/components/AppPreview/Card";
import Content from "@/components/Content";
import FeliIcon from "@/components/FeliIcon";
import PageHead from "@/components/PageHead";
import projects from "projects/projects";
import React from "react";

const Home = () => {
  return (
    <>
      <PageHead />
      <Content center>
        <div className="mt-8 flex flex-col items-center">
          <FeliIcon margin={16} fixed />
          <h1 className="text-center">
            Welcome to <span className="text-feli">Feli.Page!</span>
          </h1>
        </div>{" "}
        <div className="my-10">
          {/* <h1 className="ml-2 md:ml-4">Apps</h1> */}
          <div className="flex flex-wrap justify-center">
            {projects.map((project) => {
              const { shortName: name, image, href, category } = project;
              return (
                <div className="m-2 inline-block md:m-4" key={href}>
                  <AppPreviewCard {...{ name, image, href, category }} />
                </div>
              );
            })}
          </div>
        </div>
      </Content>
    </>
  );
};

export default Home;
