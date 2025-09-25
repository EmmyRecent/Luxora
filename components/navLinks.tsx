import Link from "next/link";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <Link href={"/"} className="radius">
          <li className="active absolute top-0 left-0">Home</li>
        </Link>
        <Link href={"agents"} className="radius">
          <li className="absolute top-0 right-0">Agents</li>
        </Link>
        <Link href={"faq"} className="radius">
          <li className="absolute top-1/2 left-0 -translate-y-[100px]">FAQ</li>
        </Link>
        <Link href={"about"} className="radius">
          <li className="absolute top-1/2 right-0 -translate-y-[100px]">
            About Us
          </li>
        </Link>
        <Link href={"contact"} className="radius">
          <li className="absolute bottom-0 left-0 md:-translate-y-[200px]">
            Contact
          </li>
        </Link>
        <Link href={"properties"} className="radius">
          <li className="absolute right-0 bottom-0 md:-translate-y-[200px]">
            Properties
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
