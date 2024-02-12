import React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import piggy from "@/assets/images/piggy-background.jpg"
import Image from "next/image"
import { Suspense } from "react"

type Props = {}

export function page({}: Props) {
  return (
    <div
      className={`relative max-md:flex-col flex justify-around gap-4 w-full items-center h-full`}>
      <Suspense fallback={<div></div>}>
        <Image src={piggy} alt='' className='z-[-50] absolute w-full h-full' />
      </Suspense>
      <div className='max-w-md w-full px-6 py-8 bg-background shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-6'>Sign In</h2>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-foreground px-2'>
              Username
            </label>
            <Input
              id='username'
              type='text'
              className='mt-1 block w-full border-2 border-secondary rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
              placeholder='Enter your username'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-foreground px-2'>
              Password
            </label>
            <Input
              id='password'
              type='password'
              className='mt-1 block w-full border-2 border-secondary rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
              placeholder='Enter your password'
            />
          </div>
          <div>
            <Button
              type='submit'
              className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black hover:text-white active:text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
              Sign In
            </Button>
          </div>
          <div className='flex justify-end pt-2 px-1'>
            <Link href='/' className='text-sm'>
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
      <div className='flex gap-4 flex-col shadow-md rounded-md p-4 text-foreground bg-background bg-opacity-90'>
        <p className='text-lg font-bold'>Budgeting made simple</p>
        <p className='text-lg font-bold'>Subscription find & cancel</p>
        <p className='text-lg font-bold'>Investing</p>
      </div>
    </div>
  )
}
