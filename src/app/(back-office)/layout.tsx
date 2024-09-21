import NavBar from "@/components/back-office/NavBar";
import SideBar from "@/components/back-office/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex ">
      {/* SideBar */}
       <SideBar/>

      <div className=" w-full">
        {/* Header */}
        <NavBar/>
 
      
        {/* main */}
        <main  className="p-8 bg-slate-950  text-slate-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
