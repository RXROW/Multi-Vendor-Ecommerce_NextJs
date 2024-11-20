import CustomDataTable from "@/components/back-office/CustomDataTable";
import DashboardCharts from "@/components/back-office/DashboardCharts/DashboardCharts";
import Heading from "@/components/back-office/Heading";
import LargeCards from "@/components/back-office/LargeCards";
import SmallCards from "@/components/back-office/SmallCards";
import SupplierDashboard from "@/components/back-office/SupplierDashboard";
import UserDashboard from "@/components/back-office/UserDashboard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const userSession = {
    name: session?.user?.name ?? "Guest",
    email: session?.user?.email ?? "",
    role: session?.user?.role ?? "USER"
  };
  //console.log("User Session:", userSession);
  if (userSession.role === "USER") {
    return <UserDashboard />;
  }
  if (userSession.role === "SUPPLIER") {
    return <SupplierDashboard />;
  }
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
};

export default Dashboard;
