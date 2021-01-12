import "../styles/globals.scss";
import theme from "../theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Workbox } from "workbox-window";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (
            !("serviceWorker" in navigator) ||
            process.env.NODE_ENV !== "production"
        ) {
            console.warn("Progressive Web App support is disabled");
            return;
        }
        const workbox = new Workbox("sw.js", { scope: "/" });
        workbox.register();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
