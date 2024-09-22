import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";

// Define types for props
interface NavBarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ setShowSidebar }) => {
  return (
    <div className="flex items-center justify-between dark:bg-slate-900 bg-slate-100/20 backdrop-blur-md text-slate-50 h-20 px-8 py-8 pr-10 sticky top-0 z-50">
      <button onClick={() => setShowSidebar((prev) => !prev)}>
        <AlignJustify className="text-slate-950 dark:text-white" />
      </button>

      <div className="flex space-x-3 pr-10">
        <ThemeSwitcher />

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              role="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer"
            >
              <Bell className="text-green-500" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-6 dark:border-gray-900">
                20
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-3 mr-10">
            {[1, 2].map((item, index) => (
              <DropdownMenuItem key={index}>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/profile.png"
                    width={200}
                    height={200}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="flex">
                      <p>Stock Out</p>
                      <p>Dec 12, 2022 - 12:00 PM</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
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
          <DropdownMenuContent className="py-2 px-4 pr-8">
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
              <div className="flex items-center space-x-2 cursor-pointer">
                <LogOut className="mr-3 w-4 h-4" />
                <span>Log Out</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
