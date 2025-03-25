import FeliIcon from "@/components/FeliIcon";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex min-h-14 items-center border-b">
      <div className="container flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <FeliIcon size={32} />
          <Link href="/">Feli Page</Link>
        </div>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
