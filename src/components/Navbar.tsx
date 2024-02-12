"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

type navLink = {
  name: string
  id: number
  href: string
  accessLevel: string | string[]
}

type User = {
  permissions: string
  signedIn: boolean
}

let user = { permission: "owner", signedIn: false }

import React from "react"
import { navLinks } from "@/c"

function Navbar() {
  if (!user.signedIn || !user) {
    user.permission = "guest"
  }
  function checkPermission(
    permissions: string,
    requiredLevel: string | string[]
  ) {
    if (Array.isArray(requiredLevel)) {
      return requiredLevel.some((level) => permissions === level)
    }
    return permissions === requiredLevel
  }

  const filteredLinks = navLinks.filter(
    (link) => checkPermission(user.permission, link.accessLevel) && link.id >= 0
  )

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {filteredLinks.map((link: navLink) => (
          <NavigationMenuItem key={link.id}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink>{link.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
