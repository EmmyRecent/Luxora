"use client";

import { icons } from "@/app/icons";
import { sidebarMenuItems } from "@/constants";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="border-none" variant="floating">
      <SidebarHeader className="pt-20 pb-16 text-center text-3xl font-semibold text-[#FCE4D0] capitalize">
        Luxoura
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenuItems.map((item) => {
                const IconComponent = icons[item.icon as keyof typeof icons];

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      className="px-10 py-6"
                      variant={"default"}
                      isActive={(() => {
                        const basePath = pathname
                          .split("/")
                          .slice(0, 3)
                          .join("");

                        return basePath === item.to;
                      })()}
                    >
                      <a
                        href={item.to}
                        className="hover:[&>span]:text-tertiary gap-4 hover:[&>span]:font-semibold hover:[&>svg]:[&>path]:[fill:#411e08]"
                      >
                        <IconComponent />

                        <span className="text-lg font-normal text-[#FCE4D0]">
                          {item.label}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
