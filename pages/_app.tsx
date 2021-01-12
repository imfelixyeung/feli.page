import "../styles/globals.scss";
import theme from "../theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
