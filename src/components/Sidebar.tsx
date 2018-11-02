import * as React from "react";
import "../App.css";
import {
  Route,
  NavLink,
  Link
} from "react-router-dom";
// import { Helmet } from "react-helmet";
import Home from "./Home";
import About from "./About";
import Store from "./Store";

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
    const routes = routesMap.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} />
    ));

    return (
      <div className="sidebar" style={ {padding: "10px", width: "15%"} }>

        <ul style={ {listStyleType: "none", padding: 0} }>
          <li>
            <Link to="/" className="App-logo">
              <h1>Marc Schultz Photography</h1>
            </Link>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>

        <div className="sidebar__footer">
          <div className="icon-container">
            <a href="#" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i></a>
            <a href="#" target='_blank' rel="noopener noreferrer"><i className="fab fa-github icon-container__icons"></i></a>
            <a href="#" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin icon-container__icons"></i></a>
          </div>
        </div>

        {routes}

      </div>
    );
  }
}

export default App;
