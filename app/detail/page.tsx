import Hero from "@/components/Hero";
import { Footer } from "@/components/Footer";
import DetailContainer from "@/components/DetailContainer";
export default function DetailPage() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* <Hero /> */}
        <DetailContainer />
        <Footer />
          
      </main>
    </div>
  );
}