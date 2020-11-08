import React, { Component }  from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

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

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box p={3}>
            {children}
          </Box>
        </Container>
      )}
    </div>
  );
};
