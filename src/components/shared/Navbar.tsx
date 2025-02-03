"use client"
import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io";
import {usePathname} from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
  return (
    <header className='py-4 shadow-md'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <div >
            <Link href="/" className="font-bold text-xl text-black">Regular News</Link>
        </div>

      {/* Desktop Menu Item */}
      <NavigationMenu className='hidden lg:flex'>
  <NavigationMenuList>

    <NavigationMenuItem className="flex items-center space-x-8">
        <NavigationMenuLink href="/news" className={`${pathname === "/news" ? "text-green-500 font-bold" : ""} hover:text-green-500`}>News</NavigationMenuLink>

        <NavigationMenuLink href="/topics" className={`${pathname === "/topics" ? "text-green-500 font-bold" : ""} hover:text-green-500`}>
        <NavigationMenuTrigger>Topics</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='px-5 py-4 shadow-md space-y-2'>
        <li>
            <NavigationMenuLink href="/topics/politics">Politics</NavigationMenuLink>
            </li>
            <li>
            <NavigationMenuLink href="/topics/sports">Sports</NavigationMenuLink>
            </li>
            <li>
            <NavigationMenuLink href="/topics/international">International</NavigationMenuLink>
            </li>
        </ul>
      </NavigationMenuContent>
      </NavigationMenuLink>
      <NavigationMenuLink href="/contact" className={`${pathname === "/contact" ? "text-green-500 font-bold" : ""} hover:text-green-500`}>Contact Us</NavigationMenuLink>
      <NavigationMenuLink href="/about" className={`${pathname === "/about" ? "text-green-500 font-bold" : ""} hover:text-green-500`}>About</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>



      {/* Button */}
    <div className="hidden lg:flex items-center gap-5">
        <div className="flex items-center ">
            <span className='mr-2'>Dark Mood</span>
            <Switch />
        </div>

        <div className="">
        <Button variant="default">Login</Button>
        </div>
    </div>

    {/* Mobile Menu */}
        <div className="block lg:hidden">
            <Button>
                <IoMdMenu className=" w-12 h-12"/>
            </Button>
        </div>
        </nav>
    </header>
  )
}

export default Navbar
