import { createContext, useContext, useReducer } from "react";
import { characterReducer } from "./characterReducer";
import { initialState } from "./initialState";
import { validateCharacter } from "../utils/validation";

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function useCharacterState() {
  return useContext(StateContext);
}

export function useCharacterDispatch() {
  return useContext(DispatchContext);
}

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const errors = validateCharacter(state.formData);
  const value = { ...state, errors };

  return (
    <StateContext.Provider value={value}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
