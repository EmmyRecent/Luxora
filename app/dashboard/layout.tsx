import AppSidebar from "@/components/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="m-4 w-full overflow-x-auto lg:m-6">
        {children}

        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
