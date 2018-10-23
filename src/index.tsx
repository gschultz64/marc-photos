import * as React from "react";
import * as ReactDOM from "react-dom";
// import Hello from "./components/Hello";
import Home from "./components/Home";
import "./index.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Home/>
  </div>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
