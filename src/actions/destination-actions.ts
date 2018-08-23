import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const destinationActions = {
  toggleTask: actionCreator<number>("ACTIONS_UPDATE_TASK"),
  addTask: actionCreator<string>("ACTIONS_ADD_TASK")
};
