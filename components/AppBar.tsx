import FeliIcon from "@/components/FeliIcon";
import { AppBar as AppBarBase } from "@felipage/react-ui";
import React from "react";

interface Props {
    title?: string;
}

const AppBar = ({ title = "Feli Page" }: Props) => {
    return <AppBarBase title={title} Icon={FeliIcon} />;
};

export default AppBar;
