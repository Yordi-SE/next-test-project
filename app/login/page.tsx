"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession(); // Monitor session state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });


    if (result?.ok) {
      // Session will update, handled by useEffect below
      setIsLoading(false);
    } else {
      setError(result?.error || "Invalid Credentials");
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Redirect when session is authenticated
  useEffect(() => {
    if (session) {
      window.location.href = "/";
    }
    if (status === "authenticated") {
      window.location.href = "/"
    }
  }, [session,status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[rgba(255,255,255,0.7)] rounded-sm shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Here"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Your Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type Password"
              required
              disabled={isLoading}
            />
            <p className="text-sm text-gray-700 text-end font-semibold">
              <Link href="#" className="underline">
                Forgot Password
              </Link>
            </p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Continue"}
          </button>
        </form>

        <div className="flex items-center text-center justify-center mt-4">
          <p className="text-gray-700 text-sm">
            By proceeding you are agreeing to <br />
            <span className="font-bold">
              <Link className="underline" href="#">
                Terms & Conditions
              </Link>
            </span>{" "}
            and{" "}
            <span className="font-bold">
              <Link className="underline" href="#">
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}