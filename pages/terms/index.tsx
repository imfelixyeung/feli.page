import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { promises as fs } from "fs";
import { GetServerSideProps } from "next";
import path from "path";
import ReactMarkdown from "react-markdown";

const TermsOfService = ({ text }) => {
    return (
        <>
            <PageHead title="Terms of Service" />
            <Content justifyText>
                <div className="my-8 bg-white dark:bg-gray-300 p-8 rounded-md">
                    <article className="prose max-w-none">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </article>
                </div>
            </Content>
        </>
    );
};

const getServerSideProps: GetServerSideProps = async () => {
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

export { getServerSideProps };
export default TermsOfService;
