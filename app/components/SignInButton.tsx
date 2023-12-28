"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <Link
          href="/api/auth/signout"
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto">
      <Link
        href="/api/auth/signin"
        className="flex gap-4 ml-auto text-green-600"
      >
        Sign in
      </Link>
      <Link href="/signup" className="flex gap-4 ml-auto text-green-200">
        Sign Up
      </Link>
    </div>
  );
};

export default SignInButton;
