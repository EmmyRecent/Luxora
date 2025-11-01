import { dashboardStatsType } from "@/types";
import {
  Building,
  CalendarRange,
  Check,
  MessageSquareText,
  SaveIcon,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const icons = {
  saved: SaveIcon,
  message: MessageSquareText,
  property: Building,
  calender: CalendarRange,
  clients: Users,
  good: Check,
};

const DashboardStats = ({
  icon,
  title,
  description,
  stat,
}: dashboardStatsType) => {
  const IconComponent = icons[icon as keyof typeof icons];

  console.log("Icon component:", IconComponent);

  return (
    <Card className="px-4 py-4">
      <CardHeader className="flex justify-between p-0">
        <IconComponent className="text-secondary size-7" />

        <p className="grid h-10 w-12 place-content-center rounded-tr-[50%] rounded-b-[50%] bg-[#fbe5d4] text-base font-semibold">
          {stat}
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <CardTitle className="text-lg font-medium capitalize">
          {title}
        </CardTitle>
        <CardDescription className="text-secondary text-sm capitalize">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default DashboardStats;
