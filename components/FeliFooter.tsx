import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";

export default function FeliFooter() {
    return (
        <>
            <footer
                style={{
                    width: "100%",
                    height: "100px",
                    borderTop: "1px solid #eaeaea",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        container
                        style={{ textAlign: "center", maxWidth: "300px" }}
                    >
                        <Grid item xs={6}>
                            <Link href="/privacy">
                                <a>Privacy Policy</a>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link href="/terms">
                                <a>Terms of Service</a>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    );
}
