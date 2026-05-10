"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

type AuthMode = "login" | "register";

type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

const usersKey = "portu.users";
const sessionKey = "portu.session";

function readUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(usersKey) ?? "[]") as StoredUser[];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function setSession(user: StoredUser) {
  localStorage.setItem(sessionKey, JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email,
    signedInAt: new Date().toISOString()
  }));
}

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem(sessionKey)) {
      router.replace("/dashboard");
    }
  }, [router]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (!normalizedEmail || password.length < 6) {
      setError("Use a valid email and a password with at least 6 characters.");
      return;
    }

    if (mode === "register") {
      if (!name.trim()) {
        setError("Enter your name to create the workspace.");
        return;
      }
      if (users.some((user) => user.email === normalizedEmail)) {
        setError("That email already exists. Sign in instead.");
        return;
      }

      const user: StoredUser = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: normalizedEmail,
        password,
        createdAt: new Date().toISOString()
      };
      writeUsers([user, ...users]);
      setSession(user);
      router.replace("/dashboard");
      return;
    }

    const user = users.find((entry) => entry.email === normalizedEmail && entry.password === password);
    if (!user) {
      setError("No account matches that email and password.");
      return;
    }

    setSession(user);
    router.replace("/dashboard");
  }

  const isRegister = mode === "register";

  return (
    <div className="auth-left">
      <div className="auth-avatar" aria-hidden="true">
        <span />
        <i />
      </div>
      <h1>{isRegister ? "Create an account" : "Welcome back"}</h1>
      <p className="auth-subtitle">
        {isRegister ? "Create your Portu workspace" : "Sign in to your Portu dashboard"}
      </p>

      <form className="auth-form" onSubmit={submit}>
        {isRegister ? (
          <label>
            Full name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ada Lovelace"
              autoComplete="name"
            />
          </label>
        ) : null}
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <div className="auth-password">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete={isRegister ? "new-password" : "current-password"}
            />
            <span aria-hidden="true">◔</span>
          </div>
        </label>
        {error ? <p className="auth-error" role="alert">{error}</p> : null}
        <button className="auth-submit" type="submit">
          {isRegister ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="auth-footer">
        {isRegister ? "Already have an account?" : "New to Portu?"}{" "}
        <Link href={isRegister ? "/login" : "/register"}>
          {isRegister ? "Sign in" : "Create account"}
        </Link>
      </p>
    </div>
  );
}
