import { Footer } from "@/components/Footer";
import TambahResepContainer from "@/components/TambahResepContainer";

export default function AddResepPage() {
  return (
      <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <TambahResepContainer />
        <Footer />
          
      </main>
    </div>
  );
}