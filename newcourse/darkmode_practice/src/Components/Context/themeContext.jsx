import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Themes from "../../Themes.js";
const ThemeContext = createContext();

export const ThemeContextProvide = ({ children }) => {
  const [theme, SetTheme] = useLocalStorage("theme", "light");
  const [switchBallStat, setswitchBallStat] = useState(false);
  const ToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    SetTheme(newTheme);
    setswitchBallStat(!switchBallStat);
  };
  //解一開始是darkMode 的時候ball 還在light
  useEffect(() => {
    if (theme === "dark") {
      setswitchBallStat(true);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{ currentTheme: Themes[theme], ToggleTheme, switchBallStat }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
