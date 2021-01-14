import FeliIcon from "./FeliIcon";
import { useFeliTheme } from "../providers/FeliThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "next/link";
import router from "next/router";
import { darkTheme, lightTheme } from "../theme/theme";

interface Crumb {
    href: string;
    display: string;
}

export default function FeliAppBar({ crumbs = [] }: { crumbs: Crumb[] }) {
    const { toggle, isDark } = useFeliTheme();

    const breadcrumbs = crumbs.map((crumb, index, crumbs) => {
        const isLast = index === crumbs.length - 1;
        const { href, display } = crumb;
        const content = (
            <Typography
                variant="h6"
                style={{
                    color: isLast
                        ? isDark
                            ? "#ffffff"
                            : "#000000"
                        : "#888888",
                }}
                key={href}
            >
                {display}
            </Typography>
        );
        if (isLast) return content;
        return (
            <Link href={href} key={href}>
                <a>{content}</a>
            </Link>
        );
    });

    return (
        <AppBar
            color="secondary"
            elevation={0}
            position={"sticky"}
            style={{
                background: isDark
                    ? darkTheme.palette.secondary.main
                    : lightTheme.palette.secondary.main,
                borderBottom: `1px solid ${
                    isDark
                        ? darkTheme.palette.divider
                        : lightTheme.palette.divider
                }`,
            }}
        >
            <Toolbar>
                <IconButton
                    style={{
                        marginRight: 16,
                    }}
                    onClick={() => router.push("/")}
                >
                    <FeliIcon size={24} />
                </IconButton>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    maxItems={2}
                    style={{
                        flexGrow: 1,
                    }}
                >
                    {breadcrumbs}
                </Breadcrumbs>
                <IconButton onClick={toggle}>
                    <Brightness4Icon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
