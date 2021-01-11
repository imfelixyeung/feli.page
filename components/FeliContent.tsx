import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import styles from "../styles/FeliContent.module.scss";

export default function FeliContent({
    children,
    center = false,
    justifyText = false,
}) {
    const classNames = [];
    center && classNames.push(styles.center);
    justifyText && classNames.push(styles.justifyText);
    const classNameStr = classNames.join(" ");
    return (
        <>
            <main className={classNameStr}>{children}</main>
        </>
    );
}
