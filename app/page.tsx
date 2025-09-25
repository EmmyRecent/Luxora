import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Feature, Hero, Why } from "./sections";
import How from "./sections/how";

export default function Page() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Feature />
        <Why />
        <How />
      </main>

      <Footer />
    </>
  );
}
