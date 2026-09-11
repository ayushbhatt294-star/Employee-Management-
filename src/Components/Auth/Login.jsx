import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">

        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col gap-5"
        >

          <h1 className="text-2xl font-bold text-slate-900">
            Welcome back
          </h1>

          <p className="text-sm text-slate-500">
            Sign in with your email and password
          </p>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10"
          />

          <button
            className="h-12 w-full rounded-lg bg-indigo-600 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;