"use client";
import { useEffect, useState } from "react";
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
import { get } from "http";
import { da } from "zod/locales";

type Resep = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  source: string;
};
function MenuContainer() {
  const [reseps, setReseps] = useState<Resep[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const getApiData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/reseps");
      const data = await response.json();
      console.log(data);
      if  (data.current_page !== currentPage) {
        console.log("data ada");
        setReseps(data.data);
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect( () => {
    fetch(`http://localhost:8000/api/reseps?page=${currentPage}`)
      .then((res) => res.json())
      .then((json) => {
        setReseps(json.data.data);
        setLastPage(json.data.last_page);
        // Hanya set currentPage jika berbeda
        if (json.data.current_page !== currentPage) {
          setCurrentPage(json.data.current_page);
        }
      });
    
  }, [currentPage]);  
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

        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
        {
          reseps.map((resep) => (
            <CardResep resep={resep}  key={resep.id} />
          ))
        }



        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {
              currentPage > 2 && (
                <PaginationItem>
                  <PaginationLink href="#">...</PaginationLink>
                </PaginationItem>
              )
            }
            {Array.from({ length: lastPage }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? "bg-blue-500 text-white" : ""}
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
