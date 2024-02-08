import { ObjectId } from "mongodb"

export type subscriptionDataTypes = {
  categories: string[]
  priority: string[]
  paymentTypes: string[]
}
export type dbExpense = {
  _id: ObjectId
  userId: ObjectId
  name: string
  category: subscriptionDataTypes["categories"][number]
  priority: subscriptionDataTypes["priority"][number]
  paymentType: subscriptionDataTypes["paymentTypes"][number]
  amount: number
  date: Date
  note: string
}

//
