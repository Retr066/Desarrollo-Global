import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleDarkMode: () => {}, isDarkMode: false });

export default function ColorModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === "dark");
  const colorMode = useMemo(
    () => ({
      toggleDarkMode: () => {
        setIsDarkMode(!isDarkMode);
      },
      isDarkMode,
    }),
    [isDarkMode]
  );

  const getColorMode = useCallback(() => {
    const html = window.document.documentElement;
    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);
    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }, [isDarkMode]);

  useEffect(() => {
    getColorMode();
  }, [getColorMode]);

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
}
