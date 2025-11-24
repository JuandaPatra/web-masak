import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
export default function SearchBar() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4  my-3 ">
                <h1 className=" text-4xl font-semibold mb-3">Menu Resep</h1>
                <form action="" className="z-20">
                    <div  className="relative">
                        <div  className="flex space-x-3">

                            <Input type="text" placeholder="Cari resep " className="w-[350px] h-10" />
                             <Button variant="outline" className=" h-10"><Search /></Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}