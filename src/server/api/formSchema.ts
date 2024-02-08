import * as z from "zod"

export const formSchema = z.object({
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
