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
  public: boolean
  premium?: boolean
}

const user = { signedIn: false, admin: false }

import React from "react"
import { navInfo as data } from "../app/d.ts"

function Navbar() {
  const filterLinks = (link: navLink) => (user.signedIn ? link : link.public)
  return (
    <NavigationMenu className='w-full bg-secondary'>
      <NavigationMenuList>
        <NavigationMenuItem className={`text-xl font-bold text-green-700`}>
          <NavigationMenuLink href='/'>Budget Buddy</NavigationMenuLink>
        </NavigationMenuItem>
        {data.links.filter(filterLinks).map((link) => (
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
