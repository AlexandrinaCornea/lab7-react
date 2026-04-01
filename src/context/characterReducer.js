import { initialState } from "./initialState";

export function characterReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "INCREASE_STAT":
      return {
        ...state,
        formData: {
          ...state.formData,
          stats: state.formData.stats.map((stat) =>
            stat.name === action.statName && stat.value < 15
              ? { ...stat, value: stat.value + 1 }
              : stat,
          ),
        },
      };
    case "DECREASE_STAT":
      return {
        ...state,
        formData: {
          ...state.formData,
          stats: state.formData.stats.map((stat) =>
            stat.name === action.statName && stat.value > 8
              ? { ...stat, value: stat.value - 1 }
              : stat,
          ),
        },
      };
    case "TOGGLE_TRAIT": {
      const hasTrait = state.formData.traits.includes(action.trait);

      return {
        ...state,
        formData: {
          ...state.formData,
          traits: hasTrait
            ? state.formData.traits.filter((trait) => trait !== action.trait)
            : [...state.formData.traits, action.trait],
        },
      };
    }
    case "TOUCH_FIELD":
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true,
        },
      };
    case "VALIDATE_STEP":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.fields,
        },
      };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case "SUBMIT":
      return {
        ...state,
        submitted: true,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
