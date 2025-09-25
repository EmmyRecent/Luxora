import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center gap-2 text-center">
        <div>
          <h3 className="font-dancing text-tertiary text-5xl font-bold capitalize md:text-7xl">
            Luxora
          </h3>
        </div>

        <p className="text-tertiary text-base">
          The page you are looking for does not exist!
        </p>

        <p className="text-tertiary">
          Please check the URL or return to the{" "}
          <Link href={"/"} className="cursor-pointer font-bold">
            home page
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
