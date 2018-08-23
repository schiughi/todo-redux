import { combineReducers, createStore } from "redux";
import {
  destinationsReducer,
  DestinationsState
} from "src/states/destinations-state";

export interface AppState {
  destinations: DestinationsState;
}

const store = createStore(
  combineReducers<AppState>({
    destinations: destinationsReducer
  })
);

export default store;
