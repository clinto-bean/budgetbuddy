import Link from "next/link"

export default function LandingPage() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container space-y-12 px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-green-500 dark:text-green-400'>
              Take control of your finances
            </h1>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              The all-in-one budgeting app for managing your money. Track
              spending, save money, and achieve your financial goals with ease.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
          <div className='grid gap-1'>
            <h3 className='text-lg font-bold'>Subscription Tracking</h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Easily monitor your recurring expenses and never miss a payment.
            </p>
          </div>
          <div className='grid gap-1'>
            <h3 className='text-lg font-bold'>
              Grocery Receipt Spending Analysis
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Understand your food expenses with automatic categorization of
              grocery purchases.
            </p>
          </div>
          <div className='grid gap-1'>
            <h3 className='text-lg font-bold'>Personalized Budgeting Tips</h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Receive tailored recommendations to help you save based on your
              spending habits.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
          <Link
            className='inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-gray-50 dark:hover:bg-green-600 dark:focus-visible:ring-green-300'
            href='#'>
            Sign Up for Free
          </Link>
          <Link
            className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
            href='#'>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
