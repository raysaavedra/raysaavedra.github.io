import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";

import logo from './logo.svg';
import './App.css';
import routes from "./routes/main";
import {wrappedComponent} from "./components/Common";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={wrappedComponent(props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  })}
                />
              )
            })
          }
        </Switch>
      </Router>
    </>
  );
}

export default App;
