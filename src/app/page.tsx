import Navbar from "@/components/Navbar"
import Link from "next/link"
import LandingPage from "@/components/LandingPage"

export default function Home() {
  return (
    <main className='flex flex-wrap w-[100svw] h-[100svh]'>
      <section
        id='navigation'
        className='flex justify-between w-full max-h-16 items-center bg-orange-50'>
        <Link href='/' className='text-xl font-bold text-green-700 px-4'>
          Budget Buddy
        </Link>
        <Navbar />
      </section>
      <LandingPage />
    </main>
  )
}
