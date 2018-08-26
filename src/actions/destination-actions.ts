import { Recorder, DestinationAddForm } from "src/states/destinations-state";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const destinationActions = {
  startTask: actionCreator<number>("ACTIONS_START_TASK"),
  recordTask: actionCreator<Recorder>("ACTIONS_RECORD_TASK"),
  stopTask: actionCreator<number>("ACTIONS_STOP_TASK"),
  addTask: actionCreator<DestinationAddForm>("ACTIONS_ADD_TASK")
};
