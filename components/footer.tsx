import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="wrapper py-10 md:py-14">
        <div className="grid grid-cols-2 items-start justify-center gap-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex w-max flex-col justify-center gap-1 [&_p]:font-normal [&_p]:text-white [&_p]:hover:font-semibold">
            <h4 className="pb-2 text-lg font-medium text-white">Company</h4>
            <Link href={"/about"}>
              <p>About us</p>
            </Link>
            <Link href={"/blog"}>
              <p>blog</p>
            </Link>
          </div>

          <div className="flex w-max flex-col justify-center gap-1 [&_p]:font-normal [&_p]:text-white [&_p]:hover:font-semibold">
            <h4 className="pb-2 text-lg font-medium text-white">How to use</h4>
            <Link href={"/about"}>
              <p>Car Dealer</p>
            </Link>
            <Link href={"/developers"}>
              <p>Developers</p>
            </Link>
            <Link href={"/individual"}>
              <p>Individual</p>
            </Link>
            <Link href={"/marketers"}>
              <p>Marketers</p>
            </Link>
            <Link href={"/ecommerce"}>
              <p>Ecommerce</p>
            </Link>
            <Link href={"/enterprise"}>
              <p>Enterprise</p>
            </Link>
          </div>

          <div className="flex w-max flex-col justify-center gap-1 [&_p]:font-normal [&_p]:text-white [&_p]:hover:font-semibold">
            <h4 className="pb-2 text-lg font-medium text-white">Support</h4>
            <Link href={"/support"}>
              <p>Support</p>
            </Link>
            <Link href={"/contact"}>
              <p>Contact us</p>
            </Link>
            <Link href={"/terms&condition"}>
              <p>Terms & Conditions</p>
            </Link>
            <Link href={"/privacy-policy"}>
              <p>Privacy Policy</p>
            </Link>
            <Link href={"/cookie-policy"}>
              <p>Cookie Policy</p>
            </Link>
            <Link href={"/refund-policy"}>
              <p>Refund Policy</p>
            </Link>
          </div>

          <div className="flex w-full flex-col justify-center gap-1 [&_p]:font-normal [&_p]:text-white [&_p]:hover:font-semibold">
            <h4 className="pb-2 text-lg font-medium text-white">Get Updates</h4>

            <form className="w-full">
              <div className="rounded-round flex w-full gap-4 bg-[#FBD7BA] p-2">
                <input
                  type="text"
                  className="placeholder:text-secondary text-tertiary w-full max-w-max flex-1 text-base font-normal outline-none placeholder:text-sm placeholder:font-medium"
                  placeholder="Input your email"
                />
                <Button className="cursor-pointer">submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
