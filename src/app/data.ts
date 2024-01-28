export const subscriptionDataTypes = {
  categories: [
    "Groceries",
    "Subscriptions",
    "Utilities",
    "Recreation",
    "Hobby",
    "Rent",
    "Savings",
    "Investments",
    "Gaming",
  ],
  priority: ["Not Important", "Important", "Required"],
  paymentTypes: [
    "One-Time",
    "Annually",
    "Monthly",
    "Weekly",
    "Daily",
    "Per-Use",
  ],
}

export const navInfo = {
  links: [
    { id: 0, name: "Home", href: "/", public: true },
    { id: 1, name: "Admin", href: "/404", public: false },
  ],
}

export const dbUser = {
  // _id:objectID(#),
  //username: NAME,
  //password: HASH(PASS),
  premium: Boolean,
  signUp: Date,
}
