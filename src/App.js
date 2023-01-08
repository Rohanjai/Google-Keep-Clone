import Home from "./components/Home";
import DataProvider from "./context/DataProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DataProvider>
        <Home />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
