import { applyMiddleware, combineReducers, createStore } from "redux";
import { entriesReducer } from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const configureStore = () => {
  const combinedReducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
  });

  const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  initSagas(sagaMiddleware);

  return store;
};
