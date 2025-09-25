import Image from "next/image";
import Amenities from "./amenities";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type FeatureCardProps = {
  imgUrl: string;
  description: string;
  price: string;
  location: string;
  amenities: {
    bedroom: string;
    toilet: string;
    bathroom: string;
    kitchen: string;
  };
};

const FeatureCard = ({
  imgUrl,
  description,
  price,
  location,
  amenities: { bathroom, bedroom, kitchen, toilet },
}: FeatureCardProps) => {
  return (
    <Card className="w-full cursor-pointer overflow-hidden rounded-b-[3rem] border-none bg-gradient-to-b from-[#FCEDE1] to-[#B67C54] py-4 pb-8 shadow-2xl hover:[&_.zoom]:scale-110">
      <Image
        src={imgUrl}
        alt="Home imag"
        width={343}
        height={276}
        className="zoom w-full transition-all duration-300 ease-in-out"
      />

      <CardHeader>
        <CardDescription className="text-secondary text-base font-bold uppercase">
          {description}
        </CardDescription>
        <CardTitle className="text-tertiary text-2xl font-extrabold uppercase">
          {price}
        </CardTitle>
        <CardDescription className="text-secondary text-base font-bold capitalize">
          {location}
        </CardDescription>

        <div className="grid grid-cols-2 place-content-between gap-4">
          <Amenities imgUrl={"/icons/bedroom.png"} description={bedroom} />
          <Amenities imgUrl="/icons/toilet.png" description={toilet} />
          <Amenities imgUrl="/icons/bedroom.png" description={bathroom} />
          <Amenities imgUrl="/icons/toilet.png" description={kitchen} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
