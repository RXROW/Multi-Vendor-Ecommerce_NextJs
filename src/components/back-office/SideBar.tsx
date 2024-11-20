"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  LayoutGrid,
  Users,
  Warehouse,
  Compass,
  HandCoins,
  Handshake,
  Settings,
  ExternalLink,
  LogOut,
  ChevronRight,
  ChevronDown,
  Boxes,
  LayoutList,
  ScanSearch,
  MonitorPlay,
  Building2,
  CircleDollarSign,
  User,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
 

// Extend the session to include user role
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

export default function SideBar({ showSidebar, setShowSidebar }: { showSidebar: boolean, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const role = session?.user?.role;

  if (status === "loading") {
    return <p>Loading......</p>;
  }

  const adminLinks = [
    { title: "Customers", icon: Users, href: "/dashboard/customers" },
    { title: "Markets", icon: Warehouse, href: "/dashboard/markets" },
    { title: "Suppliers", icon: HandCoins, href: "/dashboard/suppliers" },
    { title: "Orders", icon: Compass, href: "/dashboard/orders" },
    { title: "Our Staff", icon: Handshake, href: "/dashboard/staffs" },
    { title: "Community", icon: Building2, href: "/dashboard/community" },
    { title: "Wallet", icon: CircleDollarSign, href: "/dashboard/wallet" },
    { title: "Settings", icon: Settings, href: "/dashboard/settings" },
    { title: "Online Store", icon: ExternalLink, href: "/" },
  ];

  const supplierLinks = [
    { title: "Customers", icon: Users, href: "/dashboard/customers" },
    { title: "Markets", icon: Warehouse, href: "/dashboard/markets" },
    { title: "Orders", icon: Compass, href: "/dashboard/orders" },
    { title: "Community", icon: Building2, href: "/dashboard/community" },
    { title: "Wallet", icon: CircleDollarSign, href: "/dashboard/wallet" },
    { title: "Online Store", icon: ExternalLink, href: "/" },
  ];

  const defaultLinks = [
    { title: "Orders", icon: Compass, href: "/dashboard/orders" },
    { title: "Profile", icon: User, href: "/dashboard/profile" },
    { title: "Online Store", icon: ExternalLink, href: "/" },
  ];

  const catalogueLinks = role === "ADMIN" ? [
    { title: "Products", icon: Boxes, href: "/dashboard/products" },
    { title: "Categories", icon: LayoutList, href: "/dashboard/categories" },
    { title: "Coupons", icon: ScanSearch, href: "/dashboard/coupons" },
    { title: "Banners", icon: MonitorPlay, href: "/dashboard/banners" },
  ] : [];

  const userLinks = role === "ADMIN" ? adminLinks : role === "SUPPLIER" ? supplierLinks : defaultLinks;
  async function handleLogOut() {
    const router =useRouter();
    await signOut();
    router.push("/")
    
  }
  return (
    <div
      className={`${
        showSidebar ? "block" : "hidden"
      } mt-16 md:mt-0 space-y-6 w-64 h-screen fixed left-0 top-0 shadow-md overflow-y-scroll bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-300`}
    >
      <Link
        href="/dashboard"
        onClick={() => setShowSidebar(false)}
        className="flex items-center justify-center mt-4"
      >
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>
      <div className="space-y-3 flex flex-col py-2">
        <Link
          href="/dashboard"
          onClick={() => setShowSidebar(false)}
          className={`flex items-center space-x-3 px-6 py-2 ${
            pathname === "/dashboard" ? "border-l-4 border-green-500 text-green-600" : ""
          }`}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        {catalogueLinks.length > 0 && (
          <Collapsible className="px-6">
            <CollapsibleTrigger
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center space-x-6 py-2"
            >
              <div className="flex items-center space-x-3">
                <Sparkles />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-lg py-2 px-3 pl-6 bg-slate-100 dark:bg-slate-700">
              {catalogueLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setShowSidebar(false)}
                  className={`flex items-center space-x-3 px-2 py-1 text-sm ${
                    pathname === item.href ? "text-green-600" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}
        
        {userLinks.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            onClick={() => setShowSidebar(false)}
            className={`flex items-center space-x-3 px-6 py-2 ${
              pathname === item.href ? "border-l-4 border-green-500 text-green-600" : ""
            }`}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>
        ))}

        <div className="px-6 py-2">
          <Button onClick={handleLogOut}
           className="flex items-center space-x-3 bg-green-500 hover:bg-green-600">
            <LogOut />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
