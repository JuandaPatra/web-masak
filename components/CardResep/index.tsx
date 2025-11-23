import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

type Resep = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  source: string;
};

type CardResepProps = {
  resep: Resep;
};

function CardResep({ resep }: CardResepProps) {
  console.log(resep);
  return (
    <>
      <Card className="mb-3 rounded-4xl shadow-2xl">
        <CardContent>
          <div className="flex">
            <div className=" w-24 h-24  mr-4 align-middle relative">
              <Image
                src={"/thumbnail.png"}
                alt="Card Image"
                width={100}
                height={100}
                className="object-cover rounded-2xl h-[100px] w-[100px] absolute top-[50%]  "
              />
            </div>
            <div className=" w-full">
              <h3 className="text-lg font-semibold mb-2">{resep.title}</h3>
              <p className="text-sm text-gray-600">
                {resep.description}
              </p>
              <div className="flex flex-wrap mt-4 mb-4">
                <div className="w-1/2 my-2">
                  <div className="flex flex-col ">
                    <span className="text-xs text-muted-foreground">
                      Bahan{" "}
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
                    <span className="text-xs text-muted-foreground">
                      Easy to cook{" "}
                    </span>
                    <Rating defaultValue={5} readOnly >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <RatingButton key={index}  />
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
                    <span className="text-xs text-muted-foreground">
                      Biaya{" "}
                    </span>
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
        </CardContent>
      </Card>
    </>
  );
}

export default CardResep;
