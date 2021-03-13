import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const theme = useContext(ThemeContext)[0];
    //const currentTheme = AppTheme[theme];
    return(
        <button
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }}
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#fff",
                    border: `${currentTheme.border}`
                }}
            >
                {themeMode === "light" ? "Turn off" : "Turn on"}
            </button>
    );
};

export default ThemeToggler;