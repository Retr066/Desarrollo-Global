// import { createTheme, ThemeProvider } from "@mui/material";
// import { createContext, useMemo, useState } from "react";
// import { getDesignTokens } from "../theme";

// export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// export default function ColorModeProvider({ children }) {
//   const [mode, setMode] = useState("light");
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
