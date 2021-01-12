import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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

export default theme;
