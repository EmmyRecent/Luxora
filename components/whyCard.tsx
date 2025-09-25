import Image from "next/image";
import { Card, CardDescription, CardHeader } from "./ui/card";

type WhyCardProps = {
  title: string;
  description: string;
  icon: string;
};

const WhyCard = ({ title, description, icon }: WhyCardProps) => {
  return (
    <Card className="relative flex h-full w-full flex-col items-center gap-2 border-none bg-[#FBD2B1] px-4 shadow-xl">
      <CardHeader className="w-full px-0 text-center text-lg font-semibold capitalize">
        {title}
      </CardHeader>

      <CardDescription className="text-tertiary pb-7 text-sm md:text-base">
        {description}
      </CardDescription>

      <div className="bg-tertiary grid-cols-1s absolute bottom-0 grid h-[4rem] w-[4rem] translate-y-[2rem] place-content-center rounded-full">
        <Image src={icon} alt="Smile Icon" width={30} height={30} />
      </div>
    </Card>
  );
};

export default WhyCard;
