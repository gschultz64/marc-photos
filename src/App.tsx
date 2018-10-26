import * as React from "react";
import "./App.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

const routes = [
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
    return (
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <script src="https://js.stripe.com/v3/" />
            <title>Marc Schultz Photography</title>
          </Helmet>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <div
            style={{
              padding: "10px",
              width: "20%"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
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

            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
