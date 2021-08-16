import {useState}from 'react'

export function useDarkMood() {
 const [theme,setTheme] = useState(false)

 const toggleTheme = ()=>{
    //  theme === ?setTheme("light"):setTheme("dark")
 }

 return[theme,toggleTheme]
}

