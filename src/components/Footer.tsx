import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="border-t py-8">
        <div className="container flex space-x-6">
          <Link href="/privacy">
            <>Privacy Policy</>
          </Link>
          <Link href="/terms">
            <>Terms of Service</>
          </Link>
          <Link href="/contact">
            <>Contact</>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
