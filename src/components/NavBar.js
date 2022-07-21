import React from "react";
import Rules from "./Rules";

function NavBar(props) {
  return (
    <nav>
      <h1>
        Word<span className="le">le</span>
      </h1>
      <button className="help" onClick={props.ToggleRules}>
        <span className="material-icons-sharp">help</span>
      </button>
    </nav>
  );
}

export default NavBar;
