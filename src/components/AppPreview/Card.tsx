import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  name: string;
  image?: string;
  category?: string[];
}

const placeholder = "/assets/images/icons/placeholder.svg";

const AppPreviewCard = ({
  name,
  href,
  image = placeholder,
  category = [],
}: Props) => {
  const displayCategory = category && category.length > 0 ? category[0] : null;
  return (
    <Link
      className="inline-block h-48 w-36 rounded-lg px-4 py-2 text-center ring-2 ring-gray-300 md:ring-0 dark:ring-gray-600"
      href={href}
      target="_blank"
    >
      <img src={image} alt={`Icon for ${name}`} className="" />
      <span className="text-md mt-4 block font-medium">{name}</span>
      {displayCategory && (
        <span className="text-md text-muted-foreground block">
          {displayCategory}
        </span>
      )}
    </Link>
  );
};

export default AppPreviewCard;
