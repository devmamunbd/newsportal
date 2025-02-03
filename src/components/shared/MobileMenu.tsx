"use client"

import {useState} from 'react'
import React from 'react'
import { Button } from "@/components/ui/button"
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu =()=> {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className="block lg:hidden">
    <Button variant="outline" onClick={toggleMenu}>
        {
            isMenuOpen ? <IoMdClose className=" w-12 h-12"/> :  <IoMdMenu className=" w-12 h-12"/>

        }

    </Button>
</div>
  )
}

export default MobileMenu
