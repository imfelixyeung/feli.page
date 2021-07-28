import React from "react";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
    as?: "input" | "textarea";
}

const TextField = ({ id, placeholder, as = "input", ...props }: Props) => {
    const field = React.createElement(as, {
        className:
            "w-full py-2 px-3 text-gray-900 placeholder-transparent rounded-md peer ring-gray-400 ring-2 ring-inset focus:outline-none focus:ring-gray-500 dark:bg-dark dark:text-white bg-gray-50 transition",
        id,
        placeholder,
        ...props,
    });

    return (
        <div className="relative mt-3">
            {field}
            <label
                htmlFor={id}
                className="absolute left-2 peer-focus:left-2 -top-2.5 dark:peer-focus:text-gray-300 peer-focus:text-gray-600 text-gray-600 peer-focus:-top-2.5 text-sm peer-focus:text-sm bg-gray-50 px-1 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-base transition-all select-none peer-placeholder-shown:cursor-text dark:bg-dark dark:text-gray-100"
            >
                {placeholder}
            </label>
        </div>
    );
};

export default TextField;
