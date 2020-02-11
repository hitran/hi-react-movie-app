import React, {useState} from 'react';

export const DataContext = React.createContext();

export default function Context(props) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    return(
        <DataContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </DataContext.Provider>
    )
}