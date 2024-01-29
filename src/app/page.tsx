import Navbar from "@/components/Navbar"

const j = process.env.DATABASE_URL
console.log(j)

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen items-center justify-between'>
      <Navbar />
    </main>
  )
}
