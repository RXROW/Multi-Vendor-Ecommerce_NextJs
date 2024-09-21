import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sun,
  AlignJustify,
  Bell,
  LayoutDashboard,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";
const NavBar = () => {
  return (
    <div className=" flex items-center justify-between dark:bg-slate-900 bg-slate-100/20 backdrop-blur-md  text-slate-50 h-20 px-8 py-8 pr-10 sticky top-0 z-50 ">
      <button>
        <AlignJustify className=" text-slate-950 dark:text-white" />
      </button>
      <div className=" flex space-x-3 text-green-500 pr-10 ">
     <ThemeSwitcher/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg   "
            >
              <Bell className="text-green-500" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500    rounded-full -top-1 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4  pr-3 mr-10 ">
            <DropdownMenuItem>
              <div className=" flex items-center space-x-2 ">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="User Profile"
                className=" w-8 h-8 rounded-full "
              />
              <div className=" flex flex-col ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="flex">
                  <p>Stock Out </p>
                  <p> Dec 12 2022 - 12:00PM </p>
                </div>
              </div>
              <button>
                <X/>
              </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className=" flex items-center space-x-2 ">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="User Profile"
                className=" w-8 h-8 rounded-full "
              />
              <div className=" flex flex-col ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="flex">
                  <p>Stock Out </p>
                  <p> Dec 12 2022 - 12:00PM </p>
                </div>
              </div>
              <button>
                <X/>
              </button>
              </div>
            </DropdownMenuItem>
         
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className=" flex items-center space-x-2 ">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="User Profile"
                className=" w-8 h-8 rounded-full "
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4  pr-8 ">
            <DropdownMenuItem>
              <button className=" flex items-center space-x-2 ">
                <LayoutDashboard className=" mr-3 w-4 h-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className=" flex items-center space-x-2 ">
                <Settings className=" mr-3 w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className=" flex items-center space-x-2 ">
                <LogOut className=" mr-3 w-4 h-4" />
                <span>Log Out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
