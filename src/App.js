import { CssBaseline } from "@mui/material";
import ColorModeProvider from "./context/ColorModeContext";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <AppRouter />
    </ColorModeProvider>
  );
};
