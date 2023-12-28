"use client";
import React, { useRef } from "react";
import CInput from "../components/CInput";
import Link from "next/link";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    const res = await fetch(
      process.env.BACKEND || "http://localhost:8000" + "/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          name: data.current.name,
          email: data.current.email,
          password: data.current.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("user registered");
    console.log({ response });
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="border-red-300 border-2 rounded-xl p-10">
        <CInput
          type="text"
          labelText="name"
          name="name"
          required
          onChange={(e: any) => (data.current.name = e.target.value)}
        />
        <CInput
          type="email"
          labelText="email"
          name="email"
          required
          onChange={(e: any) => (data.current.email = e.target.value)}
        />
        <CInput
          type="password"
          labelText="password"
          name="password"
          required
          onChange={(e: any) => (data.current.password = e.target.value)}
        />
        <button
          type="button"
          onClick={register}
          className="px-5 py-2 bg-slate-500 rounded-xl text-white mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
