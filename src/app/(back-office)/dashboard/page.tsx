import CustomDataTable from "@/components/back-office/CustomDataTable";
import DashboardCharts from "@/components/back-office/DashboardCharts/DashboardCharts";
import Heading from "@/components/back-office/Heading";
import LargeCards from "@/components/back-office/LargeCards";
import SmallCards from "@/components/back-office/SmallCards";

const Dashboard = () => {
  return (
    <div >
      <Heading title=" Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards/>
      <SmallCards/>
      {/* Dashboard Charts */}
      <DashboardCharts/>
      {/*Custom Data Table */}
      <CustomDataTable/>
    </div>
  );
};

export default Dashboard;
