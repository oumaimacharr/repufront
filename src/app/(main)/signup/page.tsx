"use client";

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* HEADER */}
      <header className="w-full bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/design/logos/default/logo_with_slogan.png"
              alt="RepuInsight"
              width={170}
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Top right text */}
          <p className="text-sm text-gray-600">
            Already Have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#305DBF] hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2">
          {/* LEFT: FORM */}
          <div className="w-full max-w-[460px]">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#305DBF] md:text-4xl">
              Save Your Account Now
            </h1>

            <form className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-700">First Name</Label>
                <Input
                  className="h-11 border-gray-200 focus-visible:ring-[#305DBF]"
                  placeholder="Ahmed"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-700">Last Name</Label>
                <Input
                  className="h-11 border-gray-200 focus-visible:ring-[#305DBF]"
                  placeholder="Last Name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-700">Company</Label>
                <Input
                  className="h-11 border-gray-200 focus-visible:ring-[#305DBF]"
                  placeholder="BNP Paribas"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-700">Email</Label>
                <Input
                  className="h-11 border-gray-200 focus-visible:ring-[#305DBF]"
                  type="email"
                  placeholder="ahmed@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-700">Password</Label>
                <Input
                  className="h-11 border-gray-200 focus-visible:ring-[#305DBF]"
                  type="password"
                  placeholder="********"
                />
              </div>

              <Button className="mt-2 h-11 bg-[#305DBF] px-10 hover:bg-[#274c9c] text-white">
                Submit
              </Button>
            </form>
          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/design/logos/default/signup-image.svg"
              alt="Sign up illustration"
              width={520}
              height={420}
              className="h-auto w-full max-w-[520px] object-contain"
              priority
            />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
