import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const destinationActions = {
  startTask: actionCreator<number>("ACTIONS_START_TASK"),
  recordTask: actionCreator<{
    id: number;
    time: number;
  }>("ACTIONS_RECORD_TASK"),
  stopTask: actionCreator<number>("ACTIONS_STOP_TASK"),
  addTask: actionCreator<string>("ACTIONS_ADD_TASK")
};
