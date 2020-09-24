import { Reducer } from "react";

export type Answer = {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
  user_answer: string;
  score: number;
};

export type SAVE_ANSWER = { type: "SAVE_ANSWER"; payload: Answer };

export type RESET_ANSWERS = { type: "RESET_ANSWERS" };

export type AnswersAction = SAVE_ANSWER | RESET_ANSWERS;

export type AState = {
  answers: Answer[] | [];
  score: number;
};

const initialStore: AState = {
  answers: [],
  score: 0,
};

const answersReducer: Reducer<AState, AnswersAction> = (
  state = initialStore,
  action
) => {
  switch (action.type) {
    // saving answer to the redux store
    case "SAVE_ANSWER":
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: state.score + action.payload.score,
      };
    // reseting the store
    case "RESET_ANSWERS":
      return initialStore;
    default:
      return state;
  }
};

export default answersReducer;
