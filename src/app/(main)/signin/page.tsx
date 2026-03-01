"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Footer } from "@/components/layout/Footer";

export default function SignInPage() {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO later: call backend + verify credentials
    // For now: front-only redirect after "login"
    router.push("/dashboard/default");
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* HEADER */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/design/logos/default/logo_with_slogan.png"
              alt="RepuInsight"
              width={170}
              height={40}
              priority
            />
          </Link>

          <Link
            href="/signup"
            className="text-sm font-medium text-[#305DBF] hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <Card className="w-full max-w-md shadow-xl border border-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-[#305DBF]">
              Sign In
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="ahmed@gmail.com" required />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" placeholder="********" required />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 text-sm">
                <Checkbox id="admin" />
                <label htmlFor="admin">Admin?</label>
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="w-full bg-[#305DBF] hover:bg-[#274c9c] text-white"
              >
                Sign In
              </Button>

              {/* Redirect */}
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#305DBF] font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}