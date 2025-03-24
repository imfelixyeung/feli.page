import FeliIcon from "@/components/FeliIcon";
import { AppBar as AppBarBase, Button } from "@felipage/react-ui";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  title?: string;
}

const AppBar = ({ title = "Feli Page" }: Props) => {
  const router = useRouter();

  const goToMyAccount = () => {
    router.push("https://accounts.feli.page");
  };

  return (
    <AppBarBase
      title={title}
      Icon={FeliIcon}
      actions={
        <>
          <Button onClick={goToMyAccount}>My Account</Button>
        </>
      }
    />
  );
};

export default AppBar;
