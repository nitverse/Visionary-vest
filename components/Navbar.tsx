"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import SearchBar from "./SearchBar";
import { useSession } from '@clerk/clerk-react';
import {Button} from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";

const Navbar = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const { session } = useSession();
  const { signOut } = useClerk();
    const handleSignOut = async () => {
    try {
      await signOut();
      alert("signed out successfully!")
      // Optional: You can navigate to a different page after signing out
      // router.push('/login'); // Example: Navigate to the login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <header className="z-[50] fixed top-0 w-full bg-black border-b py-1 ">
      <nav className="container flex h-16 justify-between items-center max-w-[100rem] mx-auto bg-black">
        <Image src="/logo.png" alt="logo" width={50} height={50} onClick={handleClick}/>
        <SearchBar />
        <div className="flex items-center gap-8">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/explore">Explore</Link>
          {
            session && session.user ? <Button onClick={handleSignOut}>Sign Out</Button> : ( <><Link href="/sign-up">Signup</Link>
          <Link href="/sign-in">Login</Link></>)
          }

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
