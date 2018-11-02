import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  public render() {
    return (
      <div
        style={{
          background: "#344257",
          width: "100%",
          height: "30%"
        }}
      >
        <div
          style={{
            margin: "0 auto",
            padding: ".5rem 1rem 1rem 1rem"
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "#f0de91",
                textDecoration: "none"
              }}
            />
            Marc Schultz Photography
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
