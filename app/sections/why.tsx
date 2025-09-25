import WhyCard from "@/components/whyCard";

const Why = () => {
  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center gap-4">
        <h4 className="text-secondary text-lg uppercase">Why Luxora homes</h4>

        <h3 className="text-tertiary pb-10 text-xl font-bold md:text-2xl">
          Why Luxora
        </h3>

        <div className="grid w-full grid-cols-1 items-center justify-center gap-8 gap-y-16 md:grid-cols-2 lg:gap-y-20">
          <WhyCard
            title=" Unmatched Comfort and Elegance"
            description="At Luxora Homes, every space is thoughtfully designed for those who
        appreciate the finer things in life. From premium finishes to spacious layouts, our properties offer an elevated lifestyle that blends beauty
        and function."
            icon="/icons/smile.png"
          />
          <WhyCard
            title="Prime Locations, Perfect Connections"
            description="Our luxury homes are strategically located in the most desirable neighborhoods, offering easy access to urban conveniences, serene surroundings, and high-end amenities."
            icon="/icons/location.png"
          />
          <WhyCard
            title="A Smart Investment in Your Future"
            icon="/icons/location.png"
            description="Luxury real estate isn’t just about lifestyle—it’s about building long-term value. With rising property appreciation in premium areas, you’re making a decision that benefits you now and later."
          />
          <WhyCard
            title="Security, Privacy, Peace of Mind"
            icon="/icons/privacy.png"
            description="At Luxora Homes, every space is thoughtfully designed for those who appreciate the finer things in life. From premium finishes to spacious layouts, our properties offer an elevated lifestyle that blends beauty and function."
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
