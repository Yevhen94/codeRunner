import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reposReduser } from "./reposReduser";
import thunk from "redux-thunk";

const saveState = (state) => {
  try {
    const dataState = JSON.stringify(state);
    window.localStorage.setItem("dataState", dataState);
  } catch (error) {}
};

const loadState = () => {
  const oldState = JSON.parse(window.localStorage.getItem("dataState"));
  if (!oldState) return undefined;
  return oldState;
};

const startState = loadState();

const rootReducer = combineReducers({
  repos: reposReduser,
});
export const store = createStore(
  rootReducer,
  startState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});
