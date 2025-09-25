import Image from "next/image";
import { CardContent } from "./ui/card";

type AmenitiesProps = {
  imgUrl: string;
  description: string;
};

const Amenities = ({ imgUrl, description }: AmenitiesProps) => {
  return (
    <CardContent className="flex items-center gap-3 px-0">
      <Image src={imgUrl} alt="bedroom icons" width={23} height={23} />

      <p className="text-sm font-normal text-white capitalize">{description}</p>
    </CardContent>
  );
};

export default Amenities;
