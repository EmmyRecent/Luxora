import InputGroup from "@/components/inputGroup";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="relative">
      {/* //TODO: Come back to this to give a margin outside the div */}
      <div className="rounded-round wrapper z-10 mx-8 flex w-full max-w-[600px] flex-col items-center justify-center gap-10 bg-linear-to-b from-[#B67C54] via-[#FCEDE180] to-[#FBD2B1] px-5 py-8 shadow-2xl">
        <h2 className="text-tertiary text-xl font-bold md:text-2xl">Login</h2>

        <form className="flex w-full flex-col gap-4">
          <InputGroup name="email" />
          <InputGroup name="password" />

          <Link
            href={"reset-password"}
            className="text-secondary mr-auto mb-8 h-auto text-sm hover:underline"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="bg-tertiary rounded-round mx-auto w-full cursor-pointer px-4 py-3 font-medium text-white"
          >
            Login
          </button>

          <p className="text-secondary text-center text-sm font-normal">
            Or continue with
          </p>

          <Link href={"https://google.com"}>
            <Image
              src={"/icons/google.png"}
              alt="Google Icon"
              width={25}
              height={25}
              className="mx-auto cursor-pointer"
            />
          </Link>
        </form>

        <p className="text-secondary mr-auto text-sm font-normal italic">
          Don&apos;t have an account?{" "}
          <Link href={"signup"} className="hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      <Image
        src={"/house-left.png"}
        alt="A house image"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 hidden md:block"
      />

      <Image
        src={"/house-right.png"}
        alt="A house image"
        width={300}
        height={300}
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default Login;
