import "../styles/globals.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { useEffect, useState } from "react";
import {
    InjectMuiTheme,
    ThemeContextProvider,
} from "../providers/FeliThemeProvider";

function MyApp({ Component, pageProps }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <ThemeContextProvider>
                    <InjectMuiTheme>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </InjectMuiTheme>
                </ThemeContextProvider>
            )}
        </>
    );
}

export default MyApp;
