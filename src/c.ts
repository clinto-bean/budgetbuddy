export const navLinks = [
  { id: 0, name: "Sign In", href: "/login", accessLevel: "guest" },
  {
    id: 1,
    name: "Docs",
    href: "/tutorial",
    accessLevel: ["user", "premium", "admin", "owner", "guest"],
  },
  {
    id: 2,
    name: "Account",
    href: "/account",
    accessLevel: ["user", "premium", "admin", "owner"],
  },
  {
    id: 3,
    name: "Upgrade",
    href: "/subscribe",
    accessLevel: ["user"],
  },
  {
    id: 4,
    name: "Perks",
    href: "/perks",
    accessLevel: ["premium", "admin", "owner"],
  },
  {
    id: 5,
    name: "Admin",
    href: "/admin",
    accessLevel: ["admin", "owner"],
  },

  {
    id: 6,
    name: "Sign Out",
    href: "/logout",
    accessLevel: ["user", "premium", "admin", "owner"],
  },
]

export const subscriptionData = {
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
