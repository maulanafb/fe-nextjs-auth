import React from "react";
import SignInButton from "./SignInButton";
import Link from "next/link";

const Appbar = () => {
  return (
    <nav className="flex flex-row px-4 py-5 bg-slate-600">
      <Link href={"/dashboard"}>Dashboard</Link>
      <SignInButton />
    </nav>
  );
};

export default Appbar;
