import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" dark:bg-slate-800 bg-slate-50 z-50  space-y-6 w-64 min-h-screen dark:text-slate-50 p-3 pt-4  fixed left-0 top-0   ">
      <Link href="#" className="mb-6"> Logo</Link>
      <div className=" space-y-3 flex flex-col">
        <Link href="#"> Dashboard</Link>
        <Link href="#"> Catalogue</Link>
        <Link href="#"> Custmers</Link>
        <Link href="#"> Markets</Link>
        <Link href="#"> Orders</Link>
        <Link href="#"> Suppliers</Link>
        <Link href="#"> Staff</Link>
        <Link href="#"> Sittings</Link>
        <Link href="#"> Online Store</Link>
      
      </div>
    </div>
  );
};

export default SideBar;
