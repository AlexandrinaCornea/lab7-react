import "./App.css";
import { BuildStep } from "./components/steps/BuildStep";
import { IdentityStep } from "./components/steps/IdentityStep";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <BuildStep />
    </CharacterProvider>
  );
}

export default App;
