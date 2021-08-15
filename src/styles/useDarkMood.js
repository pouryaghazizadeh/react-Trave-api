import {useState}from 'react'

export function useDarkMood() {
 const [theme,setTheme] = useState("dark")

 const toggleTheme = ()=>{
     theme === "dark"?setTheme("light"):setTheme("dark")
 }
 return[theme,toggleTheme]
}

 