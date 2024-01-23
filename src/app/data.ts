export const subscriptionDataTypes = {
  categories: [
    "Subscriptions",
    "Groceries",
    "Utilities",
    "Recreation",
    "Hobby",
    "Rent",
    "Savings",
    "Investments",
    "Gaming",
  ],
  priority: ["Essential", "Important", "Not Important"],
  paymentTypes: ["Annually", "Monthly", "Weekly", "One-Time", "Per-Use"],
}

const dbUser = {
  // _id:objectID(#),
  //username: NAME,
  //password: HASH(PASS),
  premium: Boolean,
  signUp: Date,
}
