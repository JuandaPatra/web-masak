import Image from "next/image";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full bg-[url('gambar.png')] h-full bg-no-repeat bg-center bg-cover  py-24 px-16">
      <div className=" mx-auto grid  gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight  text-center text-white">
            Aplikasi Resep Masakan Terbaik 
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl mb-8 text-center mx-auto">
            Temukan ribuan resep masakan lezat dan mudah dibuat untuk setiap
            kesempatan. Dari hidangan sehari-hari hingga sajian spesial, kami
            punya semuanya untuk Anda!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            >
              Mulai Sekarang
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
