import * as React from "react";
import { Link } from "react-router-dom";

const Topbar = (props: any) => {
  return (
    <div className="topbar">
      <Link to="/" className="App-logo">
        <h1>Marc Schultz Photography</h1>
      </Link>
      <div className="topbar__text">
        <p>Contact: 555-555-5555</p>
        <p>© 2018 Marc Schultz. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export { Topbar };
