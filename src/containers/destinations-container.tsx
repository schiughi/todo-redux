import { connect } from "react-redux";
import { Dispatch } from "redux";
import { destinationActions } from "src/actions/destination-actions";
import { Destinations } from "src/components/templates/destinations";
import { AppState } from "src/store";
import { Action } from "typescript-fsa";

export interface DestinationsActions {
  onCreate: (v: string) => Action<string>;
  onStart: (v: number) => Action<number>;
  onStop: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  let timer: NodeJS.Timer;
  return {
    onCreate: (v: string) => dispatch(destinationActions.addTask(v)),
    onStart: (v: number) => {
      clearInterval(timer);
      timer = setInterval(
        () => dispatch(destinationActions.recordTask({ id: v, time: 1 })),
        1000
      );
      dispatch(destinationActions.startTask(v));
    },
    onStop: (v: number) => {
      clearInterval(timer);
      dispatch(destinationActions.stopTask(v));
    }
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.destinations);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);
