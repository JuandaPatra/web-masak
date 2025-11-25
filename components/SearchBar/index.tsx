import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState } from "react";
import { getResepBySearch } from "@/lib/api/resep";
import { ResepSearchResponse } from "@/types/resep";
import { useRouter, useSearchParams } from "next/navigation";
export default function SearchBar({ onSearchResult }: { onSearchResult: (results: ResepSearchResponse) => void }) {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("search");   
        // console.log("Searching for:", searchTerm);
        // Implement your search logic here
         router.push(`?search=${searchTerm}`);

        const result = await getResepBySearch(searchTerm);
        onSearchResult(result.data);
        // console.log("Search results:", result);
    }

    

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4  my-3 ">
                <h1 className=" text-4xl font-semibold mb-3">Menu Resep</h1>
                <form action="" method="GET" className="z-20" onSubmit={handleSearch}>
                    <div  className="relative">
                        <div  className="flex space-x-3">

                            <Input type="text" placeholder="Cari resep " className="w-[350px] h-10" onChange={(e)=>setSearchTerm(e.target.value)}  />
                             <Button variant="outline" className=" h-10" ><Search /></Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}