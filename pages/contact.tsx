import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import TextField from "@/components/TextField";
import { FormEvent, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    const body = { name, email, message };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (json.error) {
      window.alert(json.message);
    } else {
      window.alert("Message sent!");
      setMessage("");
    }
    setLoading(false);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const valid = form.checkValidity();
    setValid(valid);
    if (!valid) return;
    sendEmail();
  };

  return (
    <>
      <PageHead title="Contact" />
      <Content center>
        <div className="mt-8 flex w-full flex-col items-center">
          <form onSubmit={submit} className="w-full max-w-lg">
            <fieldset disabled={loading}>
              <h1 className="mx-2">Contact</h1>
              <div className="mx-2 flex flex-col space-y-4">
                <TextField
                  placeholder="Name"
                  id="contactName"
                  type="text"
                  onChange={(e) => setName((e.target as any).value)}
                  value={name}
                  required
                />
                <TextField
                  placeholder="Email"
                  id="contactEmail"
                  type="email"
                  onChange={(e) => setEmail((e.target as any).value)}
                  value={email}
                  required
                />
                <TextField
                  placeholder="Message"
                  id="contactMessage"
                  onChange={(e) => setMessage((e.target as any).value)}
                  value={message}
                  as="textarea"
                  required
                />
                <button
                  type="submit"
                  className={`rounded-lg bg-gray-700 px-4 py-2 text-gray-50 ring-gray-400 transition select-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none active:bg-gray-600 active:text-white disabled:bg-gray-300 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-black dark:focus:bg-gray-300 dark:active:text-black ${
                    loading ? "animate-pulse" : ""
                  }`}
                >
                  Send Message
                </button>
                {!valid && (
                  <span className="text-red-600">Validation failed</span>
                )}
              </div>
            </fieldset>
          </form>
          <div className="or my-16 flex w-full items-center justify-items-stretch">
            <div className="w-full px-2">
              <div className="h-1 rounded-full bg-gray-400"></div>
            </div>
            <span className="text-xl select-none">Or</span>
            <div className="w-full px-2">
              <div className="h-1 rounded-full bg-gray-400"></div>
            </div>
          </div>
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
