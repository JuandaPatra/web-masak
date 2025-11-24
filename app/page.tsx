import Image from "next/image";
import Hero from "@/components/Hero";
import MenuContainer from "@/components/menu.tsx";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* <Hero /> */}
        <MenuContainer />
        <Footer />
          
      </main>
    </div>
  );
}
