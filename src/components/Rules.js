import React, { useState } from "react";

function Rules() {
  const [rulesDisplay, setRulesDisplay] = useState(false);

  const closeRules = () => {
    setRulesDisplay(true);
  };

  var rulesStyle = {};
  if (rulesDisplay) {
    rulesStyle.display = "none";
  }

  return (
    <div className="rules-container" style={rulesStyle}>
      <div className="rules-top">
        <h2>HOW TO PLAY</h2>
        <button className="close" onClick={closeRules}>
          <span class="material-icons-sharp">close</span>
        </button>
      </div>
      <div className="rules-body">
        <div className="rules-body-intro">
          <h3>
            Guess the <b>WORDLE</b> in six tries.
          </h3>
          <h3>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </h3>
          <h3>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </h3>
        </div>
        <div className="rules-body-examples">
          <h3>
            <b>Examples</b>
          </h3>
          <div className="r-b-example">
            <span id="correct" className="letter">
              W
            </span>
            <span className="letter">E</span>
            <span className="letter">A</span>
            <span className="letter">R</span>
            <span className="letter">Y</span>
          </div>
          <h3>
            The letter <b>W</b> is in the word and in the correct spot.
          </h3>
          <div className="r-b-example">
            <span className="letter">P</span>
            <span id="almost" className="letter">
              I
            </span>
            <span className="letter">L</span>
            <span className="letter">L</span>
            <span className="letter">S</span>
          </div>
          <h3>
            The letter <b>I</b> is in the word but in the wrong spot.
          </h3>
          <div className="r-b-example">
            <span className="letter">V</span>
            <span className="letter">A</span>
            <span className="letter">G</span>
            <span id="error" className="letter">
              U
            </span>
            <span className="letter">E</span>
          </div>
          <h3>
            The letter <b>U</b> is not in the word in any spot.
          </h3>
        </div>
        <h3>
          <b>A new WORDLE will be available each day!</b>
        </h3>
      </div>
    </div>
  );
}

export default Rules;
