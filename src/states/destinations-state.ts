import { destinationActions } from "src/actions/destination-actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface Destination {
  id: number;
  title: string;
  isDoing: boolean;
  totalTime: number;
}

export interface DestinationsState {
  destinations: Destination[];
}

const initialState: DestinationsState = {
  destinations: [
    {
      id: 0,
      title: "write code everyday",
      isDoing: false,
      totalTime: 0
    }
  ]
};

const startTask = (destination: Destination, id: number): Destination => {
  if (destination.id === id) {
    return {
      ...destination,
      isDoing: !destination.isDoing
    };
  }
  return destination;
};

const recordTask = (destination: Destination, payload: any): Destination => {
  if (destination.id === payload.id) {
    return {
      ...destination,
      totalTime: destination.totalTime + payload.time
    };
  }
  return destination;
};

const stopTask = (destination: Destination, id: number): Destination => {
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
  id: ++idCounter,
  totalTime: 0
});

export const destinationsReducer = reducerWithInitialState(initialState)
  .case(
    destinationActions.addTask,
    (state: DestinationsState, payload: string): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.concat(buildDestination(payload))
      };
    }
  )
  .case(
    destinationActions.startTask,
    (state: DestinationsState, payload: number): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.map(it => startTask(it, payload))
      };
    }
  )
  .case(
    destinationActions.recordTask,
    (state: DestinationsState, payload: any): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.map(it => recordTask(it, payload))
      };
    }
  )
  .case(
    destinationActions.stopTask,
    (state: DestinationsState, payload: number): DestinationsState => {
      return {
        ...state,
        destinations: state.destinations.map(it => stopTask(it, payload))
      };
    }
  )
  .build();
