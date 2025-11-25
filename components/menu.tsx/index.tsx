"use client";
import { useEffect, useState, useRef } from "react";
import CardResep from "../CardResep";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "../SearchBar";
import { ResepSearchResponse } from "@/types/resep";
import { useSearchParams, useRouter } from "next/navigation";

type Resep = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  source: string;
};

function MenuContainer() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil nilai awal dari URL (page & search)
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);

  // Flag agar tidak update URL saat initial load
  const isFirstRender = useRef(true);

  const [reseps, setReseps] = useState<Resep[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [lastPage, setLastPage] = useState(1);



  // ======================================================
  // 1️⃣ Fetch berdasarkan page & search
  // ======================================================
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const url = new URL("http://localhost:8000/api/reseps");
        url.searchParams.set("page", String(currentPage));
        if (search) url.searchParams.set("search", search);

        const res = await fetch(url.toString(), {
          signal: controller.signal,
        });

        const json = await res.json();

        setReseps(json.data.data);
        setLastPage(json.data.last_page);
      } catch (err) {
        if (err instanceof DOMException) return; // ignore abort
        console.error("Fetch error:", err);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [currentPage, search]);

  // ======================================================
  // 2️⃣ Update URL setiap page/search berubah (AMAN)
  // ======================================================
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // skip initial
    }

    const params = new URLSearchParams();

    params.set("page", String(currentPage));
    if (search) params.set("search", search);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [currentPage, search]);


  const handleSearchResult = (results: ResepSearchResponse) => {
    console.log("Search results in MenuContainer:", results);
    setReseps(results.data);
    setCurrentPage(results.current_page);
    if (results.last_page) setLastPage(results.last_page);
    setCurrentPage(1); // reset ke page 1 setelah search
  };
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
        <SearchBar onSearchResult={handleSearchResult} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
        {reseps.map((resep) => (
          <CardResep resep={resep} key={resep.id} />
        ))}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {currentPage > 2 && (
              <PaginationItem>
                <PaginationLink href="#">...</PaginationLink>
              </PaginationItem>
            )}
            {Array.from({ length: lastPage }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                  className={
                    currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                  }
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* <PaginationItem>
              <PaginationLink href="2">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem> */}
            {/* <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default MenuContainer;
