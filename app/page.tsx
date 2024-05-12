import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <h1>Shop</h1>
    <Button>Add to Cart</Button>
   </main>
  );
}
