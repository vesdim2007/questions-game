import axios from "axios";
import {
  Question,
  SAVE_QUESTIONS,
  GET_QUESTION,
  RESET_QUESTIONS,
  GET_ERROR,
} from "../reducers/questions";
import { Dispatch } from "redux";

// saving all questions to the redux store
const saveQuestions = (questions: Question[]): SAVE_QUESTIONS => ({
  type: "SAVE_QUESTIONS",
  payload: questions,
});

// clearing the set of questions in the redux store
export const resetQStore = (): RESET_QUESTIONS => ({
  type: "RESET_QUESTIONS",
});

// saving error to the redux stor in case fetching questions fails
const getError = (error: string): GET_ERROR => ({
  type: "GET_ERROR",
  payload: error,
});

// fetching all questions from the api and saving them to the redux store
export const fetchQuestions = () => async (dispatch: Dispatch) => {
  await axios
    .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    .then((res) => dispatch(saveQuestions(res.data.results)))
    .catch((error) => {
      console.error(error);
      dispatch(
        getError("Error! Unable to fetch the questions. Please try again.")
      );
    });
};

// get single question by its index from the state
export const getNextQuestion = (nextQ: number): GET_QUESTION => ({
  type: "GET_QUESTION",
  payload: nextQ,
});
