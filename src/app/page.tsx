import Navbar from "@/components/Navbar"
import { ExpenseForm } from "@/server/actions/ExpenseForm"
import { subscriptionData as expenseData } from "@/c"

const j = process.env.DATABASE_URL
console.log(j)

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen items-center justify-between'>
      <ExpenseForm expenseData={expenseData} />
    </main>
  )
}
