import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
    </main>
  );
}
