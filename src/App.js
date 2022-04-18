import { AppRouter } from "./routes/AppRouter";
import ColorModeProvider from "./context/ColorModeContext";
export const App = () => {
  return (
    <ColorModeProvider>
      <AppRouter />
    </ColorModeProvider>
  );
};
