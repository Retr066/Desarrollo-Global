import { AppRouter } from "./routes/AppRouter";
import ColorModeProvider from "./context/ColorModeContext";

const App = () => {
  return (
    <ColorModeProvider>
      <AppRouter />
    </ColorModeProvider>
  );
};

export default App;
