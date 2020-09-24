import { Reducer } from "react";

export type Question = {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
};

export type SAVE_QUESTIONS = {
  type: "SAVE_QUESTIONS";
  payload: Question[] | [];
};

export type GET_ERROR = {
  type: "GET_ERROR";
  payload: string;
};

export type GET_QUESTION = { type: "GET_QUESTION"; payload: number };

export type RESET_QUESTIONS = { type: "RESET_QUESTIONS" };

export type QAction =
  | GET_QUESTION
  | SAVE_QUESTIONS
  | RESET_QUESTIONS
  | GET_ERROR;

export type QState = {
  questions: Question[] | [];
  nextQuestion: Question | null;
  error: string | null;
};

const initialStore: QState = {
  questions: [],
  nextQuestion: null,
  error: null,
};

const questionsReducer: Reducer<QState, QAction> = (
  state = initialStore,
  action
) => {
  switch (action.type) {
    //   getting questions from the server and save them in the redux store
    // assigning the first question
    case "SAVE_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        nextQuestion: action.payload[0],
      };
    // getting the next question from the store by passing an index as parameter
    case "GET_QUESTION":
      return {
        ...state,
        nextQuestion: state.questions[action.payload],
      };
    // clearing the state and returning the initial values
    case "RESET_QUESTIONS":
      return initialStore;
    // error handling case in case if fetch fails
    case "GET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default questionsReducer;
