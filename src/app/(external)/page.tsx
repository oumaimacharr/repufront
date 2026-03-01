import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sources = [
  { key: "googletrends", alt: "Google Trends", src: "/design/logos/default/googletrends.svg" },
  { key: "linkedin", alt: "LinkedIn", src: "/design/logos/default/linkedin.svg" },
  { key: "trustpilot", alt: "Trustpilot", src: "/design/logos/default/trustpilot.svg" },
  { key: "socialinsider", alt: "Socialinsider", src: "/design/logos/default/socialinsider.svg" },
  { key: "facebook", alt: "Facebook", src: "/design/logos/default/facebook.svg" },
];

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* NAVBAR */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/design/logos/default/logo_with_slogan.png"
              alt="RepuInsight"
              width={170}
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-10 text-sm font-medium text-gray-700">
            <Link href="#home" className="hover:text-[#305DBF]">
              Home
            </Link>
            <Link href="#sources" className="hover:text-[#305DBF]">
              Sources
            </Link>

            <Button
              asChild
              className="bg-[#305DBF] hover:bg-[#274c9c] text-white rounded-xl px-6"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main id="home" className="flex-1">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl whitespace-nowrap">
              Welcome to <span className="text-[#305DBF]">RepuInsight</span>
            </h1>

            <p className="mt-4 max-w-[520px] text-gray-600 leading-relaxed">
              Monitor and analyze your brand’s online reputation across social media,
              news, and web platforms.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <Button
                asChild
                className="bg-[#305DBF] hover:bg-[#274c9c] text-white rounded-xl px-8"
              >
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/design/logos/default/home_image.svg"
              alt="RepuInsight illustration"
              width={520}
              height={420}
              className="h-auto w-full max-w-[520px] object-contain"
              priority
            />
          </div>
        </section>

        {/* DATA SOURCES */}
        <section id="sources" className="bg-[#305DBF] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold text-white">
              Data Sources
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-6">
              {sources.map((item, idx) => {
                const isFourth = idx === 3;
                const isFifth = idx === 4;

                return (
                  <Card
                    key={item.key}
                    className={[
                      "bg-white rounded-2xl border border-white/10",
                      "shadow-md/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg/30",
                      "lg:col-span-2",
                      isFourth ? "lg:col-start-2" : "",
                      isFifth ? "lg:col-start-4" : "",
                    ].join(" ")}
                  >
                    <CardContent className="flex items-center justify-center px-6 py-4">
                      <div className="relative h-9 w-36">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}