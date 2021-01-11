import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

interface Crumb {
    href: string;
    display: string;
}

export default function FeliAppBar({ crumbs = [] }: { crumbs: Crumb[] }) {
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
