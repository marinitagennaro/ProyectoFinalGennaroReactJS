import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Button() {

const { isDarkMode, toggleTheme } = useContext(ThemeContext)


    return (
        <button onClick={() => toggleTheme()} style={isDarkMode ? {color:"white", backgroundColor: "black"} : {color:"black", backgroundColor: "white"}}>
            Modo
        </button>
    )
}