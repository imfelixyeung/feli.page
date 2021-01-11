import FeliAppBar from "../../components/FeliAppBar";
import FeliContent from "../../components/FeliContent";
import FeliFooter from "../../components/FeliFooter";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ReactMarkdown from "react-markdown";

const PRIVACY = `
# Privacy Policy
Your privacy is important to us. It is Feli Page's policy to respect your privacy regarding any information we may collect from you across our website, [https://feli.page](https://feli.page), and other sites we own and operate.

We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.

We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.

We don’t share any personally identifying information publicly or with third-parties, except when required to by law.

Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.

You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.

Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.

This policy is effective as of 1 January 2021.

[Privacy Policy created with GetTerms.](https://getterms.io/)
`;

export default function TermsOfService({ text }) {
    return (
        <>
            <Head>
                <title>Privacy Policy | Feli Page</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <FeliAppBar
                crumbs={[
                    { href: "/", display: "Feli Page" },
                    { href: "/policy", display: "Privacy Policy" },
                ]}
            />
            <FeliContent justifyText>
                <Container>
                    <Typography>
                        <ReactMarkdown>{PRIVACY}</ReactMarkdown>
                    </Typography>
                </Container>
            </FeliContent>
            <FeliFooter />
        </>
    );
}
