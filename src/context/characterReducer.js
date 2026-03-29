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
    case "SET_STAT":
      return {
        ...state,
        formData: {
          ...state.formData,
          stats: {
            ...state.formData.stats,
            [action.stat]: action.value,
          },
        },
      };
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
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
