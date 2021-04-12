import Link from "next/link";
import { Footer as FooterBase, FooterLink } from "@felipage/react-ui";

const Footer = () => {
    return (
        <>
            <FooterBase>
                <div className="flex space-x-6">
                    <Link href="/privacy" passHref>
                        <FooterLink>Privacy Policy</FooterLink>
                    </Link>
                    <Link href="/terms" passHref>
                        <FooterLink>Terms of Service</FooterLink>
                    </Link>
                    <Link href="/contact" passHref>
                        <FooterLink>Contact</FooterLink>
                    </Link>
                </div>
            </FooterBase>
        </>
    );
};

export default Footer;
