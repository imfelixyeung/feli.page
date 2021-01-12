import FeliAppBar from "../components/FeliAppBar";
import FeliContent from "../components/FeliContent";
import FeliFooter from "../components/FeliFooter";
import FeliIcon from "../components/FeliIcon";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Feli Page</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <FeliAppBar crumbs={[{ href: "/", display: "Feli Page" }]} />
            <FeliContent center>
                <Container style={{ textAlign: "center" }}>
                    <FeliIcon margin={16} fixed />
                    <Typography variant="h3">
                        Welcome to{" "}
                        <Link href="/">
                            <a>Feli.Page!</a>
                        </Link>
                    </Typography>
                </Container>
            </FeliContent>
            <FeliFooter />
        </>
    );
}
