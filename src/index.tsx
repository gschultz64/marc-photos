import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import "./index.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Router>
      <Route exact path="/" render={() =>
        <Home/>
      }/>
      <Route path="/store" render={() => 
        <Store/>
      }/>
      <Route path="/about" render={() =>
        <About/>
      }/>
    </Router>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
