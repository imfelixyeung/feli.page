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
        className="dark:bg-dark absolute -top-2.5 left-2 bg-gray-50 px-1 text-sm text-gray-600 transition-all select-none peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-600 dark:text-gray-100 dark:peer-placeholder-shown:text-gray-200 dark:peer-focus:text-gray-300"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextField;
