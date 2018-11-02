import * as React from "react";
import "./App.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Main from "./components/Main";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />

          <Sidebar />

          <Main />

        </div>
      </Router>
    );
  }
}

export default App;
