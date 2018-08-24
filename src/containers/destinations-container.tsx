import { connect } from "react-redux";
import { Dispatch } from "redux";
import { destinationActions } from "src/actions/destination-actions";
import { Destinations } from "src/components/templates/destinations";
import { AppState } from "src/store";
import { Action } from "typescript-fsa";

export interface Recorder {
  id: number;
  time: number;
}

export interface DestinationsActions {
  onCreate: (v: string) => Action<string>;
  onStart: (v: number) => Action<number>;
  onRecord: (v: Recorder) => Action<Recorder>;
  onStop: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onCreate: (v: string) => dispatch(destinationActions.addTask(v)),
    onStart: (v: number) => dispatch(destinationActions.startTask(v)),
    onRecord: (v: Recorder) => dispatch(destinationActions.recordTask(v)),
    onStop: (v: number) => dispatch(destinationActions.stopTask(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.destinations);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);
