import CustomButton from "./customButton";

const Nav = () => {
  return (
    <header>
      <div className="wrapper flex items-center justify-between py-6 max-sm:mb-18">
        <div>
          <h3 className="font-dancing text-tertiary text-5xl font-bold capitalize">
            Luxora
          </h3>
        </div>

        <nav>
          <ul>
            <li>
              <CustomButton text="Login" href="login" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
