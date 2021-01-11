import FeliAppBar from "../components/FeliAppBar";
import FeliContent from "../components/FeliContent";
import FeliFooter from "../components/FeliFooter";
import styles404 from "../styles/404.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Link from "next/link";

export default function $404() {
    return (
        <>
            <Head>
                <title>404 Page not found</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <FeliAppBar
                crumbs={[
                    { href: "/", display: "Feli Page" },
                    { href: "/404", display: "404 Not Found" },
                ]}
            />
            <FeliContent center>
                <Container className={styles404.container}>
                    <Typography variant="h4">404</Typography>
                    <Typography variant="subtitle1">
                        This page could not be found
                    </Typography>

                    <div style={{ height: 32 }}></div>
                    <Link href="/">
                        <a>
                            <Typography variant="h6">Return Home</Typography>
                        </a>
                    </Link>
                </Container>
            </FeliContent>
            <FeliFooter />
        </>
    );
}
