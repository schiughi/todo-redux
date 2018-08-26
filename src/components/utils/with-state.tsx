import * as React from "react";

export interface InjectedProps {
  onChange: () => void;
}

function withState<State>(initialState: State) {
  return <OriginalProps extends {}>(
    WrappedComponent: React.ComponentType<OriginalProps | InjectedProps>
  ) => {
    return class extends React.Component<OriginalProps, State> {
      public static displayName: string = `${WrappedComponent.displayName ||
        WrappedComponent.name}-withState`;

      constructor(props: OriginalProps) {
        super(props);
        this.state = initialState;
      }

      public render() {
        return (
          <WrappedComponent
            {...this.state}
            {...this.props}
            onChange={this.handleChange}
          />
        );
      }

      private handleChange = (target: any) => {
        this.setState(prevState => {
          return Object.assign(prevState, {
            [target.name]: target.value
          });
        });
      };
    };
  };
}

export default withState;
