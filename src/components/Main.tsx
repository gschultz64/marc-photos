import * as React from "react";
import "../App.min.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import About from "./About";

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

class Main extends React.Component {
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
      <div className="main">
        {routes}
      </div>
    );
  }
}

export default Main;
