import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="w-full flex justify-center ">
      <div className="w-[1000px]">
        <Hero />
        <Main />
      </div>
    </main>
  );
}
