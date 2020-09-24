import { Answer, SAVE_ANSWER, RESET_ANSWERS } from "../reducers/answers";

// saving answer to a particular question in the redux store
export const saveAnswer = (answer: Answer): SAVE_ANSWER => ({
  type: "SAVE_ANSWER",
  payload: answer,
});

// clearing the set of answers in the redux store
export const resetAStore = (): RESET_ANSWERS => ({
  type: "RESET_ANSWERS",
});
