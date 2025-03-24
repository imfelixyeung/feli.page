import Content from "@/components/Content";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Content justifyText>
      <div className="my-8 py-8">
        <article className="prose max-w-none">{children}</article>
      </div>
    </Content>
  );
};

export default Layout;
