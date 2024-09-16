import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-slate-800 space-y-6 w-64 min-h-screen text-slate-50 p-3 ">
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
