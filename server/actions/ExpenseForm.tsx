"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { subscriptionDataTypes as data } from "../../src/app/data"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = data.categories
const priorities = data.priority
const paymentTypes = data.paymentTypes

const formSchema = z.object({
  expenseName: z
    .string()
    .min(1, { message: "Please provide a name for this expense." }),
  expenseCost: z
    .string()
    .regex(
      new RegExp(/^[0-9]+(?:\.[0-9]+)?$/),
      "Please only include numbers and decimals."
    )
    .min(0, { message: "Please include an amount." })
    .refine(
      (value) => /^[0-9]+(?:\.[0-9]+)?$/.test(value),
      "Only numbers or decimals allowed."
    ),
  expenseCategory: z.string(),
  expensePriority: z.string(),
  expenseType: z.string(),
})

export function ExpenseForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      expenseName: "",
      expenseCost: "",
      expenseCategory: "Groceries",
      expensePriority: "Not Important",
      expenseType: "One-Time",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
        <div id='inputWrapper' className='flex flex-col gap-4 py-4'>
          <FormField
            control={form.control}
            name='expenseName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Expense' {...field} />
                </FormControl>
                <FormDescription>
                  The name or place of service for this expense.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='expenseCost'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Cost</FormLabel>
                <FormControl>
                  <Input placeholder='50' {...field} />
                </FormControl>
                <FormDescription>
                  The total cost of your expense.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='expenseCategory'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Groceries' />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Category for this expense.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='expensePriority'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Not Important' />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>The priority of this expense.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='expenseType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Expense</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='One-Time' />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentTypes.map((payment) => (
                        <SelectItem key={payment} value={payment}>
                          {payment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  The type of expense for this invoice.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
