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
  // Navbar links. Only public are visible unless logged in.
  links: [
    { id: 0, name: "Docs", href: "/", public: true, premium: false },
    { id: 1, name: "Admin", href: "/404", public: false, premium: false },
    {
      id: 2,
      name: "Premium",
      href: "/subscribe",
      public: false,
      premium: false,
    },
  ],
}

export const dbUser = {
  // _id:objectID(#),
  //username: NAME,
  //password: HASH(PASS),
  premium: Boolean,
  signUp: Date,
}
