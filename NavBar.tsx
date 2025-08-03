import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Tier Events
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/events"
            className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 hover:bg-gray-50"
          >
            Events
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-1.5 rounded-lg text-sm text-white bg_BLACK"
            >
              Sign in
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
