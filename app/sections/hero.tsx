import NavLinks from "@/components/navLinks";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      {/* Hero backdrop */}
      <Image
        src={"/hero-rectangle.png"}
        alt="hero backdrop"
        width={500}
        height={797}
        className="absolute top-0 hidden justify-self-center md:block"
      />

      <div className="wrapper relative flex flex-col items-center justify-center">
        {/* Hero title */}
        <h1 className="text-tertiary font-dancing mt-16 text-6xl font-extrabold sm:text-8xl md:text-9xl lg:text-9xl">
          Discover Homes
        </h1>

        {/* Hero image */}
        <Image
          src={"/hero-img.png"}
          alt="hero image"
          width={781}
          height={750}
          className="w-[40rem] max-w-full -translate-y-8 md:-translate-y-20"
        />

        {/* Nav links */}
        <NavLinks />
      </div>

      <h2 className="text-tertiary mt-10 text-xl font-semibold tracking-widest capitalize md:mt-0 md:text-2xl lg:text-3xl">
        That Defines you
      </h2>

      <div className="bg-secondary wrapper rounded-round mt-32 w-full">
        <div className="flex flex-col items-center justify-between gap-4 px-3 py-5 md:gap-5">
          <div className="mx-auto flex w-full max-w-[800px] items-center justify-between [&_p]:cursor-pointer [&_p]:text-base [&_p]:font-medium [&_p]:text-white md:[&_p]:text-lg">
            <p>Buy</p>
            <p>Rent</p>
            <p>Shortlet</p>
            <p>Land</p>
          </div>

          <form className="w-full max-w-[1000px]">
            <div className="rounded-round flex gap-3 bg-[#FBD5B7] px-2 py-1">
              <input
                type="text"
                className="placeholder:text-tertiary text-tertiary w-full border-none bg-transparent text-base outline-none placeholder:text-base placeholder:font-medium"
                placeholder="Search here..."
              />

              <Button className="cursor-pointer">Search</Button>
            </div>
          </form>

          <div className="mx-auto flex w-full max-w-[800px] items-center justify-between [&_p]:cursor-pointer [&_p]:text-base [&_p]:font-medium [&_p]:text-white md:[&_p]:text-lg">
            <p>Type</p>
            <p>Bed</p>
            <p>Min Price</p>
            <p>Max Price</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
