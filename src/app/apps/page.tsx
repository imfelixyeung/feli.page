import AppPreviewCard from "@/components/AppPreview/Card";
import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { Metadata } from "next";
import projects from "@/projects/projects";
import React from "react";

export const metadata: Metadata = {
  title: "Apps",
  description: "Feli Page Apps",
};

const Home = () => {
  return (
    <>
      <PageHead />
      <Content center>
        <div className="my-10">
          <h1 className="text-center text-2xl font-medium">Apps</h1>
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
