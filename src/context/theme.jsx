import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){
    const [isLightTheme, setIsLight] = useState(true);
    const [light, setLight] = useState({ textColor: '#555', bold: '#000', btn: 'purple', bg: '#fff' });
    const [dark, setDark] = useState({ textColor: '#ddd', btn: '#333', bg: '#000' });
    const toggleTheme = () => {
        setIsLight(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme, light, dark}}>
            { props.children }
        </ThemeContext.Provider>
    )
}


