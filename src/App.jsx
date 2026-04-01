import "./App.css";
import { CharacterForm } from "./components/form/CharacterForm";
import { CharacterPreview } from "./components/preview/CharacterPreview";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <CharacterForm />
    </CharacterProvider>
  );
}

export default App;
