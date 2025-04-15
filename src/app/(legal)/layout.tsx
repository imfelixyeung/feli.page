import Content from "@/components/Content";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content justifyText>
      <div className="my-8 py-8">
        <article className="prose dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </Content>
  );
};

export default Layout;
