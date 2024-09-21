import { Sun, AlignJustify, User, Bell } from "lucide-react";
const NavBar = () => {
  return (
    <div className=" flex items-center justify-between bg-slate-900 text-slate-50 h-16 px-8 py-4 sticky top-0">
      <button>
        <AlignJustify />
      </button>
      <div className=" flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
