import { createContext, useState } from "react";
import Button from "./Button";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState()

    function toggleTheme() {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
            <Button /> 
        </ThemeContext.Provider>
    )
}