import * as React from "react";
import "./App.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <div className="App">
          <Router>
            <Switch>
              <header>
                <Link to="/">
                  <h1 className="App-title">Marc Schultz Photography</h1>
                </Link>
              </header>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/store" component={Store} />
              <div>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/store">Topics</NavLink>
                  </li>
                </ul>
                <hr />
              </div>
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
