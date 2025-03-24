import FeliIcon from "@/components/FeliIcon";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex min-h-14 items-center border-b">
      <div className="container flex items-center gap-2">
        <FeliIcon size={32} />
        <Link href="/">Feli Page</Link>
      </div>
    </div>
  );
};

export default AppBar;
