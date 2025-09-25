import Link from "next/link";
import { Button } from "./ui/button";

type CustomButtonProps = {
  text: string;
  href: string;
};

const CustomButton = ({ text, href }: CustomButtonProps) => {
  return (
    <Link href={href}>
      <Button className="cursor-pointer text-base font-medium text-white capitalize">
        {text}
      </Button>
    </Link>
  );
};

export default CustomButton;
