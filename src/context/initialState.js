import initialStats from "../data/initialStats.json";

export const initialState = {
  currentStep: 0,
  submitted: false,
  formData: {
    name: "",
    race: "",
    characterClass: "",
    background: "",
    age: "",
    guardianName: "",
    awakeningDate: "",
    difficulty: "",
    alignment: "",
    traits: [],
    romanceInterest: "",
    backstory: "",
    acceptDestiny: false,
    stats: initialStats,
  },
  touched: {},
};
