import Deals from "@/components/Deals";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="w-full flex lg:justify-center ">
      <div className="w-full lg:w-[1000px] sm:px-10 px-5 lg:px-0">
        <Hero />
        <Main />
        <Deals />
      </div>
    </main>
  );
}
