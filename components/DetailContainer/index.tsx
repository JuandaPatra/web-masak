import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
async function  DetailContainer({ slug }: { slug: string }) {


  const res = await fetch(`http://localhost:8000/api/reseps/${slug}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const resep = data.data;
  console.log(resep);
  console.log(JSON.stringify(resep.ingredients) )
  return (
    <>
      {/* <div
        className="mx-auto px-4
            max-w-full
            sm:max-w-[540px]
            md:max-w-[720px]
            lg:max-w-[960px]
            xl:max-w-[1140px]
            2xl:max-w-[1320px]"
      >
        <h2 className="text-3xl font-bold my-8 text-center">Detail Resep</h2>
        <div className="flex">
          <div className=" w-52 p-4">
            <Image
              src={"/thumbnail.png"}
              alt="Card Image"
              width={100}
              height={100}
              className="object-cover rounded-2xl  "
            />
          </div>
          <div className="w-96 p-4">
            <h1>RESEP TELUR BACEM</h1>
            <h2>Bahan</h2>
            <ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>
<ul>
              <li>6 butir telur ayam, rebus matang dan kupas</li>
              <li>200 ml air kelapa (atau air biasa)</li>
              <li>100 ml kecap manis</li>
              <li>2 sdm gula merah, sisir (sesuaikan rasa)</li>
              <li>1 sdt garam (sesuaikan)</li>
              <li>2 lembar daun salam</li>
              <li>2 cm lengkuas, memarkan</li>
              <li>2 siung bawang putih, memarkan</li>
              <li>3 siung bawang merah, iris tipis</li>
              <li>1 sdt ketumbar bubuk (opsional)</li>
              <li>Minyak goreng secukupnya (untuk menggoreng)</li>
            </ul>

            <div className="flex flex-wrap mt-4 mb-4">
              <div className="w-1/2 my-2">
                <div className="flex flex-col ">
                  <span className="text-xs text-muted-foreground">Bahan </span>
                  <Rating defaultValue={4}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} />
                    ))}
                  </Rating>
                </div>
              </div>
              <div className="w-1/2 my-2">
                <div className="flex flex-col ">
                  <span className="text-xs text-muted-foreground">
                    Easy to cook{" "}
                  </span>
                  <Rating defaultValue={5} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} />
                    ))}
                  </Rating>
                </div>
              </div>
              <div className="w-1/2 my-2">
                <div className="flex flex-col ">
                  <span className="text-xs text-muted-foreground">
                    Waktu Memasak{" "}
                  </span>
                  <Rating defaultValue={4}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} />
                    ))}
                  </Rating>
                </div>
              </div>
              <div className="w-1/2 my-2">
                <div className="flex flex-col ">
                  <span className="text-xs text-muted-foreground">Biaya </span>
                  <Rating defaultValue={5}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} />
                    ))}
                  </Rating>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Badge asChild>
                <Link href="/">Tiktok</Link>
              </Badge>
              <Badge asChild>
                <Link href="/">Instagram</Link>
              </Badge>
              <Badge asChild>
                <Link href="/">Youtube</Link>
              </Badge>
            </div>
          </div>
        </div>
      </div> */}

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
                src={`http://localhost:8000/storage/` +resep.image}
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

            {resep.ingredients}
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailContainer;
