import * as React from "react";
import "./App.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import {
  BrowserRouter as Router,
  Route,

  } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

const routesMap = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/store",
    main: () => <Store />
  },
  {
    path: "/about",
    main: () => <About />
  }
];

class App extends React.Component {
  public render() {
    const routes =  routesMap.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                      />
                    ))
    return (
      <Router>
        <div className="App">

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />

          <Sidebar />

          <div style={{ flex: 1, padding: "10px" }}>
            {routes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
