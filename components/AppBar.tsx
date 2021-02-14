import FeliIcon from "@/components/FeliIcon";
import Link from "next/link";
import React from "react";

interface Props {
    title?: string;
}

const AppBar = ({ title = "Feli Page" }: Props) => {
    return (
        <header className="min-h-56 md:min-h-64 flex justify-center items-center border-b-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-black">
            <div className="max-w-6xl w-full mx-4">
                <div className="flex items-start justify-start space-x-6">
                    <FeliIcon size={24} />
                    <Link href="/">
                        <a className="text-xl font-bold">{title}</a>
                    </Link>
                </div>
                <div className=""></div>
            </div>
        </header>
    );
};

export default AppBar;
