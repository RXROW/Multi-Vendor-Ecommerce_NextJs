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

      <SideBar />

      <div className="  lg:ml-64 ml-0 flex-grow">
        {/* Header */}
        <NavBar />

        {/* main */}
        <main className="p-8 dark:bg-slate-950 bg-slate-100  dark:text-slate-50 text-slate-900 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
