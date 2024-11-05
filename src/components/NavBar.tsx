"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ModeToggle } from '@/components/ModeToggle'

export function NavBar() {
  return (
    <NavigationMenu className="w-screen">
      <NavigationMenuList className="w-screen flex flex-row justify-between">
        <div className="flex flex-row justify-around" >
            <NavigationMenuItem>
              <a href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/travel">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Travel Tables
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
        </div>
        < ModeToggle></ModeToggle>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
