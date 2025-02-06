'use client'

import { createContext, useEffect, useState } from "react";

interface themeContextType {
    isDarkMode: boolean;
    toggleTheme: ()=> void;
}

export const ThemeContext = createContext<themeContextType | undefined>(undefined)


const ThemeProvider=({children}: {children: React.ReactNode})=> {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme=()=> {
        setIsDarkMode(!isDarkMode)
    }

    useEffect(()=>{
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    },[isDarkMode])

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
