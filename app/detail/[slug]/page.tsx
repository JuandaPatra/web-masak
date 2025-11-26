import Hero from "@/components/Hero";
import { Footer } from "@/components/Footer";
import DetailContainer from "@/components/DetailContainer";
export default async function DetailPage({ params }: { params: { slug: string } }) {

  const { slug } = await params;

  console.log("slug page detail:", slug);

  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* <Hero /> */}
        <DetailContainer slug={slug} />
        <Footer />
          
      </main>
    </div>
  );
}