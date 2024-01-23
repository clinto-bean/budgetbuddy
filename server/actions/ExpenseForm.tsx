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
    .min(2, { message: "Please provide a valid name for this expense." }),
  expenseCost: z.string().min(1, {
    message:
      "Please provide a valid expense cost. Free items should not be added to this form.",
  }),
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
      expenseCategory: "", // Add default category value
      expensePriority: "", // Add default priority value
      expenseType: "", // Add default type value
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='expenseName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense</FormLabel>
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
              <FormDescription>The total cost of your expense.</FormDescription>
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
                    <SelectValue placeholder='Type of Expense' />
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
