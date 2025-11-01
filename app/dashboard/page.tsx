import DashboardStats from "@/components/dashboardStats";
import { Button } from "@/components/ui/button";
import { dashboardStatData } from "@/constants";
import { BellIcon, PlusIcon, Share2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold text-black md:text-2xl lg:text-3xl">
          Welcome back, Admin
        </h1>

        <div className="flex items-center justify-center gap-8">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="text-sm font-medium text-white shadow-xl md:text-base"
          >
            <PlusIcon className="w-8" />
            Add property
          </Button>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            <Share2 className="cursor-pointer" />
            <BellIcon className="cursor-pointer" />
          </div>
        </div>
      </div>

      <form className="w-full max-w-[500px]">
        <div className="rounded-round border-secondary flex gap-3 border bg-transparent px-3 py-1.5">
          <input
            type="text"
            className="placeholder:text-tertiary w-full border-none bg-transparent text-base outline-none placeholder:text-sm placeholder:font-normal"
            placeholder="Search by keyword..."
          />
        </div>
      </form>

      {/* Dashboard stats */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dashboardStatData.map((stat) => (
          <DashboardStats
            key={stat.title}
            stat={stat.stat}
            title={stat.title}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Recent messages */}

      <div className="rounded-round bg-transparent px-4 py-6">
        <h4 className="overflow-y-hidden capitalize">Recent Messages</h4>

        <div className="flex h-full min-h-[750px] w-full items-center justify-center">
          <p className="text-secondary text-sm">No new messages!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
