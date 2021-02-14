import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="py-12 flex justify-center items-center border-t-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-black">
                <div className="max-w-6xl mx-4">
                    <div className="flex gap-4 space-x-4">
                        <Link href="/privacy">
                            <a className="text-feli-darker hover:text-feli-dark active:text-feli dark:text-feli-lighter dark:hover:text-feli-light dark:active:text-feli transition-colors">
                                Privacy Policy
                            </a>
                        </Link>
                        <Link href="/terms">
                            <a className="text-feli-darker hover:text-feli-dark active:text-feli dark:text-feli-lighter dark:hover:text-feli-light dark:active:text-feli transition-colors">
                                Terms of Service
                            </a>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
