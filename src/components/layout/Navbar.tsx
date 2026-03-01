import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="text-lg font-semibold">RepuInsight</div>

        <nav className="flex items-center gap-8 text-sm">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/#sources" className="hover:opacity-80">Sources</Link>

          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
