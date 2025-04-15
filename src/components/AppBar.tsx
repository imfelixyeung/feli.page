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
import { Button } from "./ui/button";

const AppBar = () => {
  return (
    <div className="flex min-h-14 items-center border-b">
      <div className="container flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <FeliIcon size={32} />
          <Link href="/" className="font-medium">
            Feli Page
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="secondary">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="secondary">Sign up</Button>
            </SignUpButton>
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
