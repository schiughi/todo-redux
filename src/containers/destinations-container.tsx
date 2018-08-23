import { connect } from "react-redux";
import { Dispatch } from "redux";
import { destinationActions } from "src/actions/destination-actions";
import { Destinations } from "src/components/templates/destinations";
import { AppState } from "src/store";
import { Action } from "typescript-fsa";

export interface DestinationsActions {
  addTask: (v: string) => Action<string>;
  toggleTask: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTask: (v: string) => dispatch(destinationActions.addTask(v)),
    toggleTask: (v: number) => dispatch(destinationActions.toggleTask(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.destinations);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);
