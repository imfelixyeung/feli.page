import FeliAppBar from "../../components/FeliAppBar";
import FeliContent from "../../components/FeliContent";
import FeliFooter from "../../components/FeliFooter";
import FeliIcon from "../../components/FeliIcon";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function TermsOfService({}) {
    const x = "            ";
    const xx = x + x + x;
    const array = xx.split("");
    console.log(array.length);
    const feli = array.map((e, i) => {
        return (
            <Grid xs={2} key={i}>
                <FeliIcon size={128} />
            </Grid>
        );
    });
    console.log({ feli });
    return (
        <>
            <Head>
                <title>Feli | Feli Page</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <FeliAppBar
                crumbs={[
                    { href: "/", display: "Feli Page" },
                    { href: "/feli", display: "Feli" },
                ]}
            />
            <FeliContent justifyText>
                <Container>
                    <Grid container>{feli}</Grid>
                </Container>
            </FeliContent>
            <FeliFooter />
        </>
    );
}
