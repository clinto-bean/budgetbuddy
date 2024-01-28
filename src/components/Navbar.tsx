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

const user = { signedIn: true }

import React from "react"
import { navInfo as data } from "../app/data.ts"

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Budget Buddy</NavigationMenuItem>
        {!user.signedIn
          ? data.links.map(
              (link) =>
                link.public && (
                  <NavigationMenuItem key={link.id}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink>{link.name}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
            )
          : data.links.map(
              (link) =>
                link && (
                  <NavigationMenuItem key={link.id}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink>{link.name}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
            )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
