import react, { Component }  from "react";

export const wrappedComponent = (WrappedComponent, options = {}) => {
  const HOC = class extends Component {
    render() {
      return (
          <WrappedComponent {...this.props} />
      );
    }
  };

  return HOC;
};
