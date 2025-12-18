"use client"

import React,{useState, useContext, createContext} from 'react'

const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'))
    }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme}}>
      <div className='gradient-color '>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

