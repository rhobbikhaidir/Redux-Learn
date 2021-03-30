import React, { Children, Component, createContext } from "react";

const rootContext = createContext();

// Provider
const Provider = rootContext.Provider;
export default function globalProvider(Children) {
  return class parents extends Component {
    state = {
      totalOrder: 5,
    };

    dispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }

      if (action.type === "MINUS_ORDER") {
        let order = 0;
        if (this.state.totalOrder > 0) {
          this.setState({
            totalOrder: this.state.totalOrder - 1,
          });
        }
        this.setState({
          totalOrder: order,
        });
      }
    };
    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
}

// Consumer

const Consumer = rootContext.Consumer;

export const globalConsumer = (Children) => {
  return class parents extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
