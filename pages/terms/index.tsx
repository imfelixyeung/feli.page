import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import path from "path";
import ReactMarkdown from "react-markdown";

const TermsOfService = ({ text }) => {
  return (
    <>
      <PageHead title="Terms of Service" />
      <Content justifyText>
        <div className="my-8 py-8">
          <article className="prose max-w-none dark:invert dark:filter">
            <ReactMarkdown>{text}</ReactMarkdown>
          </article>
        </div>
      </Content>
    </>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const data = await fs.readFile(
    path.join(process.cwd(), "markdown/terms-of-service.md")
  );
  const text = data.toString();
  return {
    props: {
      text,
    },
  };
};

export { getStaticProps };
export default TermsOfService;
