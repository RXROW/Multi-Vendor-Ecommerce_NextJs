import NavBar from "@/components/back-office/NavBar";
import SideBar from "@/components/back-office/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex">
      {/* SideBar */}
       <SideBar/>

      <div className=" w-full">
        {/* Header */}
        <NavBar/>
        <h2>Header</h2>
      
        {/* main */}
        <main>{children}</main>
      </div>
    </div>
  );
}
