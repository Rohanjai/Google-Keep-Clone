import Home from "./components/Home";
import DataProvider from "./context/DataProvider.tsx";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
