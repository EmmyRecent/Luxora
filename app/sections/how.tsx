import CustomButton from "@/components/customButton";
import HowItem from "@/components/howItem";

const How = () => {
  return (
    <section>
      <div className="wrapper flex flex-col">
        <div className="mb-4 flex items-center justify-between gap-5">
          <h1 className="w-full max-w-[9ch] flex-1 bg-gradient-to-r from-[#B67C54] to-[#503725] bg-clip-text text-4xl font-semibold tracking-wider text-transparent capitalize sm:text-6xl md:text-7xl lg:text-8xl">
            How Luxora Homes Works
          </h1>

          <div className="w-full max-w-[600px]">
            <HowItem
              title="Create Your Luxora Account"
              description="Sign up in minutes to start your journey toward luxury living. Whether
        you're looking to buy, rent, or invest—your personalized experience
        begins with a simple registration."
            />
            <HowItem
              title="Explore Curated Luxury Listings"
              description="Browse a handpicked selection of premium properties in the most prestigious locations. Each home is verified and presented with stunning visuals, detailed descriptions, and pricing clarity"
            />
            <HowItem
              title="Connect with Trusted Agent"
              description="Our platform is home to licensed, verified real estate agents. Message agents directly, schedule viewings, and ask questions—all within your dashboard."
            />
          </div>
        </div>

        <div className="ml-auto">
          <CustomButton text="Start your journey" href="login" />
        </div>
      </div>
    </section>
  );
};

export default How;
