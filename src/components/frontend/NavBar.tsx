"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Menu, X, CarIcon, ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import ThemeSwitcherBtn from "../ThemeSwitcher";
import UserAvatar from "../back-office/UserAvatar";
import CartCount from "./CartCount";

const NavBar = () => {
  const { data: session, status } = useSession();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

 

  const renderAuthSection = () => {
    if (status === "loading") {
      return <div className="h-8 w-8 animate-pulse bg-gray-200 rounded-full" />;
    }

    return status === "unauthenticated" ? (
      <Link
        href="/login"
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
      >
        <User className="w-5 h-5" />
        <span>Login</span>
      </Link>
    ) : (
      <div className="flex items-center space-x-4">
        <UserAvatar user={session?.user} />
        <CartCount />
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50  bg-slate-100 dark:bg-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
        <h1  className=" text-3xl text-green-500 flex items-center justify-center uppercase"> <span> <ShoppingBag/> </span>kacha</h1>
          </Link>

      
          {/* Search Bar */}
          <div className= " hidden sm:block flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, categories, markets..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border  dark:border-gray-600 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                aria-label="Search"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {renderAuthSection()}
            <ThemeSwitcherBtn />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-800 border-t dark:border-gray-700">
              <div className="flex flex-col space-y-4">
      
                {renderAuthSection()}
                <ThemeSwitcherBtn />
                   {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, categories, markets..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border  dark:border-gray-600 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                aria-label="Search"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>
          </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;