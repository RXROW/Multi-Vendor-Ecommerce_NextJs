"use client";

import React from "react";
import Link from "next/link";
import logo from "../../../public/Logo-Front.png";
import Image from "next/image";
import { DoorOpen, Search, ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "../ThemeSwitcher";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import UserAvatar from "../back-office/UserAvatar";

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p> Loading........</p>;
  }
  return (
    <div className="  bg-slate-100 dark:bg-slate-700">
      <div className="flex items-center justify-between py-3 max-w-6xl mx-auto gap-8">
        <Link className="" href="/">
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>
        {/* SEARCH */}
        <div className="flex-grow">
          <form className="flex items-center ">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <DoorOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:outline-none focus:border-green-500 block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Products, Categories, Markets..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-600 rounded-lg border   hover:bg-green-700 focus:ring-4 focus:outline-none   dark:bg-green-600  "
            >
              <Search className="w-4 h-4 me-2" />
              Search
            </button>
          </form>
        </div>
        <div className="lg:flex gap-8 hidden">
          { status==="unauthenticated" ?(
    <Link
    href="/login"
    className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
  >
    <User />
    <span>Login</span>
  </Link>
          ) :(
             <UserAvatar user={session?.user}/>
          )}
      

          <CartCount />
        </div>
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
};

export default NavBar;
