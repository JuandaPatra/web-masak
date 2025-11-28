import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
async function DetailContainer({ slug }: { slug: string }) {
  const res = await fetch(`http://localhost:8000/api/reseps/${slug}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const resep = data.data;
  return (
    <>
      <div
        className="mx-auto px-4
  max-w-full
  sm:max-w-[540px]
  md:max-w-[720px]
  lg:max-w-[960px]
  xl:max-w-[1140px]
  2xl:max-w-[1320px]"
      >
        <h2 className="text-3xl font-bold my-8 text-center">Detail Resep</h2>

        {/* GRID 2 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* =================== KIRI: GAMBAR sticky =================== */}
          <div className="relative">
            <div className="sticky top-2">
              <div className="absolute left-[50%] translate-x-[-50%]">
                <Image
                  unoptimized
                  src={`http://localhost:8000/storage/` + resep.image}
                  alt="Card Image"
                  width={200}
                  height={200}
                  className="object-cover object-center   rounded-xl mb-30"
                />
              </div>
            </div>
          </div>

          {/* =================== KANAN: TEKS SCROLL PANJANG =================== */}
          <div className="w-full p-4 overflow-visible">
            <h1 className="text-xl font-bold mb-4">{resep.title}</h1>

            <h2 className="font-semibold mb-2">Bahan</h2>
            <div dangerouslySetInnerHTML={{ __html: resep.ingredients }} />

          </div>
        </div>
      </div>
    </>
  );
}
export default DetailContainer;
