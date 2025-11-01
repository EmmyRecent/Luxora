import { dashboardStatDataType, sidebarMenuItemsType } from "@/types";

export const sidebarMenuItems: sidebarMenuItemsType[] = [
  { to: "dashboard", label: "dashboard", icon: "dashboard" },
  { to: "property", label: "property", icon: "property" },
  { to: "messages", label: "messages", icon: "messages" },
  { to: "saved", label: "saved", icon: "saved" },
];

export const dashboardStatData: dashboardStatDataType[] = [
  {
    icon: "saved",
    title: "Saved Properties",
    description: "Properties saved by you",
    stat: 50,
  },
  {
    icon: "message",
    title: "New messages",
    description: "Check out your messages for update",
    stat: 5,
  },
  {
    icon: "property",
    title: "Property Listing",
    description: "Check out new property listing",
    stat: 15,
  },
  {
    icon: "calender",
    title: "Scheduling View",
    description: "Check out properties to view",
    stat: 25,
  },
  {
    icon: "clients",
    title: "Total Clients",
    description: "Your total Clients",
    stat: 12,
  },
  {
    icon: "good",
    title: "Total Properties",
    description: "Your total Clients",
    stat: 46,
  },
];
