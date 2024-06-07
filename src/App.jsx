import { ContextProvider } from "./components/AccordianContext";
import AccordianWraper from "./components/accordinaWraper/AccordianWraper";
function App() {
  return (
    <ContextProvider>
      <div className="app">
        <h1>Accordian</h1>
        <AccordianWraper />
      </div>
    </ContextProvider>
  );
}

export default App;
