import React from "react";

interface Props {
    href: string;
    name: string;
    image: string;
    category?: string[];
}

const placeholder = "/assets/images/icons/placeholder.svg";

const AppPreviewCard = ({
    name,
    href,
    image = placeholder,
    category = [],
}: Props) => {
    const displayCategory =
        category && category.length > 0 ? category[0] : null;
    return (
        <a
            className="px-4 py-2 h-48 w-36 rounded-lg ring-gray-300 dark:ring-gray-600 ring-2 md:ring-0 text-center inline-block"
            href={href}
            target="_blank"
        >
            <img src={image} alt={`Icon for ${name}`} className="" />
            <span className="text-md mt-4 block">{name}</span>
            {displayCategory && (
                <span className="text-md block text-gray-500">
                    {displayCategory}
                </span>
            )}
        </a>
    );
};

export default AppPreviewCard;
