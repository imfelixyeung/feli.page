import "../styles/globals.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const feliOrange = "#f9a825";
const backgroundColor = "#222222";

const theme = createMuiTheme({
    palette: {
        // type: "dark",
        primary: { main: feliOrange },
        // secondary: {
        //     main: backgroundColor,
        // },
        background: {
            // default: backgroundColor,
            // paper: "#1e1e1e",
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
