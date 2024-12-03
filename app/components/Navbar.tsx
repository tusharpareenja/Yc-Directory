'use client';  // Ensures this is a client-side component

import { SessionProvider, useSession } from "next-auth/react";  // Import SessionProvider and useSession
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";


const Navbar = () => {
  return (
    <SessionProvider>
      <NavBarContent />
    </SessionProvider>
  );
};

const NavBarContent = () => {
  const { data: session } = useSession();  // Access session with useSession hook

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });  // Use callbackUrl instead of redirect
                }}
              >
                <span className="max-sm:hidden">Logout</span>
                <LogOut className="size-6 sm:hidden text-red-500" />
              </button>

              <Link href={`/user/${session.user.email || session.user.name}`}>
                <span>{session.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async (e) => {
                // Prevent the form submission
                await signIn("github");  // Sign in with GitHub provider
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
