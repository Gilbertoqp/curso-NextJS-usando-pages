import Image from "next/image";
import { Inter } from "next/font/google";
import Pagina from "@/components/Pagina";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Pagina>Página Index</Pagina>
  )
}
