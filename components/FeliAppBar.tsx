import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import FeliIcon from "./FeliIcon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconButton: {
            marginRight: theme.spacing(2),
        },
    })
);

interface Crumb {
    href: string;
    display: string;
}

export default function FeliAppBar({ crumbs = [] }: { crumbs: Crumb[] }) {
    const uiStyles = useStyles();

    const breadcrumbs = crumbs.map((crumb, index, crumbs) => {
        const isLast = index === crumbs.length - 1;
        const { href, display } = crumb;
        const content = (
            <Typography
                variant="h6"
                style={{ color: isLast ? "#000000" : "#888888" }}
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
            color="primary"
            elevation={0}
            position={"sticky"}
            style={{
                background: "#ffffff",
                borderBottom: "1px solid #eaeaea",
            }}
        >
            <Toolbar>
                <IconButton className={uiStyles.iconButton}>
                    <Link href="/">
                        <>
                            <FeliIcon size={24} />
                        </>
                    </Link>
                </IconButton>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    maxItems={2}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Toolbar>
        </AppBar>
    );
}
