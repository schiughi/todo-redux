import { destinationActions } from "src/actions/destination-actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface Destination {
  id: number;
  title: string;
  isDoing: boolean;
}

export interface DestinationsState {
  destinations: Destination[];
}

const initialState: DestinationsState = {
  destinations: [
    {
      id: 0,
      title: "write code everyday",
      isDoing: false
    }
  ]
};

const toggleTask = (destination: Destination, id: number): Destination => {
  if (destination.id === id) {
    return {
      ...destination,
      isDoing: !destination.isDoing
    };
  }
  return destination;
};

let idCounter: number = 1;

const buildDestination = (title: string): Destination => ({
  title,
  isDoing: false,
  id: ++idCounter
});

export const destinationsReducer = reducerWithInitialState(initialState)
  .case(
    destinationActions.addTask,
    (state: DestinationsState, payload: any): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.concat(buildDestination(payload))
      };
    }
  )
  .case(
    destinationActions.toggleTask,
    (state: DestinationsState, payload: any): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.map(it => toggleTask(it, payload))
      };
    }
  )
  .build();
