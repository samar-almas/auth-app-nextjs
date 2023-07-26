"use client";

import Link from "next/link";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen my-2">
      <h1 className=" text-4xl">Login</h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="Password"
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={handleSubmit}
      >
        Login
      </button>
      <Link href="/signup">Register Here</Link>
    </div>
  );
}
