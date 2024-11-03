import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { LayoutDashboard, LogOut, Settings } from 'lucide-react'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const UserAvatar = ({user}:any) => {
  const router = useRouter()
  async function handleLogOut() {
    await signOut();
    router.push("/");
    
  }
  return (
 
    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <div className="flex items-center space-x-2 cursor-pointer">
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="User Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="py-2 px-4  mt-4 pr-8 bg-slate-200 dark:bg-slate-800 rounded-md  z-50">
      <DropdownMenuItem>
        <div className="flex items-center space-x-2 cursor-pointer">
          <LayoutDashboard className="mr-3 w-4 h-4" />
          <span>Dashboard</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Settings className="mr-3 w-4 h-4" />
          <span>Edit Profile</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <button onClick={handleLogOut} className="flex items-center space-x-2 cursor-pointer">
          <LogOut className="mr-3 w-4 h-4" />
          <span>Log Out</span>
        </button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu> 
 )
}

export default UserAvatar