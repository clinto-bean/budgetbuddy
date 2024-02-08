import { MongoClient, ObjectId } from "mongodb"
import { dbExpense } from "../../d.ts"

let client: MongoClient

export function setClient(mongoClient: MongoClient) {
  client = mongoClient
}

export async function insertExpense(expense: dbExpense) {
  const db = client.db("cluster0")
  const result = await db.collection("expenses").insertOne(expense)
  console.log("Expense inserted successfully.")
  return result
}

export async function editExpense(expense: dbExpense) {
  const db = client.db("cluster0")
  const result = await db
    .collection("expenses")
    .updateOne({ _id: expense._id }, { $set: expense })
  console.log("Expense updated successfully.")
  return result
}

export async function deleteExpense(expense: dbExpense) {
  const db = client.db("cluster0")
  const result = await db.collection("expenses").deleteOne({ _id: expense._id })
  console.log("Expense deleted successfully.")
  return result
}
