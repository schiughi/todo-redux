import { destinationActions } from "src/actions/destination-actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface Recorder {
  id: number;
  time: number;
}

export interface DestinationAddForm {
  title: string;
  goal: number;
}

export interface Destination {
  id: number;
  title: string;
  isDoing: boolean;
  totalTime: number;
  goal: number;
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
      totalTime: 0,
      goal: 1800
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

const recordTask = (
  destination: Destination,
  payload: Recorder
): Destination => {
  if (destination.id === payload.id) {
    return {
      ...destination,
      totalTime: destination.totalTime + payload.time
    };
  }
  return destination;
};

let idCounter: number = 1;

const buildDestination = ({
  title,
  goal
}: DestinationAddForm): Destination => ({
  title,
  goal,
  isDoing: false,
  id: ++idCounter,
  totalTime: 0
});

export const destinationsReducer = reducerWithInitialState(initialState)
  .case(
    destinationActions.addTask,
    (
      state: DestinationsState,
      payload: DestinationAddForm
    ): DestinationsState => {
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
        destinations: state.destinations.map(it => toggleTask(it, payload))
      };
    }
  )
  .case(
    destinationActions.recordTask,
    (state: DestinationsState, payload: Recorder): DestinationsState => {
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
        destinations: state.destinations.map(it => toggleTask(it, payload))
      };
    }
  )
  .build();
