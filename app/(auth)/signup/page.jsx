"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error);
      setIsLoading(false)
    }
    if (!error) {
      setError("");
      router.push("/verify");
    }
  };

  return (
    <main className="justify-items-center w-100 my-5">
      <h4 className="text-primary fw-bold text-center mb-4">Sign up</h4>
      <AuthForm handleSubmit={handleSubmit} isLoading={isLoading} process={"Sign up"} />
      {error && <div>{error}</div>}
    </main>
  );
}
