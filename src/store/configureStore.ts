import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import questionsReducer from "../reducers/questions";
import answersReducer from "../reducers/answers";

const rootReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return store;
};
