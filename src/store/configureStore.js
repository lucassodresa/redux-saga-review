import { combineReducers, createStore } from "redux";
import { entriesReducer } from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "../reducers/modals.reducers";

export const configureStore = () => {
  const combinedReducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
  });

  const store = createStore(combinedReducers, composeWithDevTools());

  return store;
};
