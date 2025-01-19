"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    setIsLoading(true)
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setIsLoading(false)
    }
    if (!error) router.push("/");
  };

  return (
    <main className="justify-items-center w-100 my-5">
      <h4 className="text-primary fw-bold text-center mb-4">Log In</h4>
      <AuthForm handleSubmit={handleSubmit} isLoading={isLoading} process={"Log in"}/>
      {error && <h1 className="text-danger">{error}</h1>}
    </main>
  );
}
