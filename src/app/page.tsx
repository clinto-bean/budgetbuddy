import Navbar from "@/components/Navbar"
import Link from "next/link"
import { page as Auth } from "./auth/page"
import AppRouter from "next/dist/client/components/app-router"

export default function Home() {
  return (
    <main className='flex flex-col w-[100svw] h-[100svh] items-center justify-between'>
      <section
        id='navigation'
        className='flex justify-between w-full items-center bg-orange-50'>
        <Link href='/' className='text-xl font-bold text-green-700 px-4'>
          Budget Buddy
        </Link>
        <Navbar />
      </section>
      <Auth />
    </main>
  )
}
