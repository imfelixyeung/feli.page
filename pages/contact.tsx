import Content from "@/components/Content";
import PageHead from "@/components/PageHead";
import { FormEvent, useState } from "react";

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
                <div className="mt-8 flex flex-col items-center w-full">
                    <form onSubmit={submit} className="max-w-lg w-full">
                        <fieldset disabled={loading}>
                            <h1>Contact</h1>
                            <div className="flex flex-col space-y-4">
                                <label
                                    htmlFor="name"
                                    className="flex flex-col max-w-xl"
                                >
                                    <span className="text-lg">Name</span>
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        value={name}
                                        className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 py-2 px-4 rounded-md focus:outline-none ring-gray-400 focus:ring-4 transition"
                                        required
                                    />
                                </label>
                                <label
                                    htmlFor="email"
                                    className="flex flex-col"
                                >
                                    <span className="text-lg">Email</span>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                        className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 py-2 px-4 rounded-md focus:outline-none ring-gray-400 focus:ring-4 transition"
                                        required
                                    />
                                </label>
                                <label
                                    htmlFor="message"
                                    className="flex flex-col"
                                >
                                    <span className="text-lg">Message</span>
                                    <textarea
                                        id="message"
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        value={message}
                                        className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 py-4 px-4 rounded-md focus:outline-none ring-gray-400 focus:ring-4 transition"
                                        required
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="bg-gray-700 hover:bg-gray-900 active:bg-gray-600 text-gray-50 hover:text-white active:text-white py-2 px-4 rounded-lg focus:outline-none ring-gray-400 focus:ring-4 transition disabled:bg-gray-300"
                                >
                                    Send Message
                                </button>
                                {!valid && (
                                    <span className="text-red-600">
                                        Validation failed
                                    </span>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Content>
        </>
    );
};

export default Contact;
