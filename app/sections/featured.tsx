import FeatureCard from "@/components/featureCard";

const Feature = () => {
  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center">
        <h3 className="text-tertiary text-xl font-bold md:text-2xl">
          Featured homes
        </h3>

        {/* Feature card */}
        <div className="my-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            imgUrl="/home-1.png"
            description="3 Bedroom apartment"
            price="N2, 000, 000.00"
            location="Uwani, Enugu"
            amenities={{
              bedroom: "5 bedroom",
              toilet: "4 Toilet",
              bathroom: "4 bathroom",
              kitchen: "2 Kitchen",
            }}
          />

          <FeatureCard
            imgUrl="/home-2.png"
            description="3 Bedroom apartment"
            price="N5, 000, 000.00"
            location="Uwani, Enugu"
            amenities={{
              bedroom: "5 bedroom",
              toilet: "4 Toilet",
              bathroom: "4 bathroom",
              kitchen: "2 Kitchen",
            }}
          />

          <FeatureCard
            imgUrl="/home-3.png"
            description="3 Bedroom apartment"
            price="N3, 000, 000.00"
            location="Uwani, Enugu"
            amenities={{
              bedroom: "5 bedroom",
              toilet: "4 Toilet",
              bathroom: "4 bathroom",
              kitchen: "2 Kitchen",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
