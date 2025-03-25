import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <PageHead title="Contact" />
      <Content center>
        <div className="mt-8 flex w-full flex-col items-center">
          <div className="social flex space-x-4">
            <a
              aria-label="instagram"
              href="https://www.instagram.com/im.feli.page/"
              target="_blank"
            >
              <FaInstagram size={32} />
            </a>
            <a
              aria-label="instagram"
              href="mailto:contact@feli.page"
              target="_blank"
            >
              <HiMail size={32} />
            </a>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Contact;
