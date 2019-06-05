import React, { Component } from "react";

import Snake from "./Snake";
import "../styles/Game.css";

class Game extends Component {
  state = {
    snakeCells: [[0, 256], [32, 256], [64, 256]]
  };
  render() {
    return (
      <div className="game-background">
        <Snake snakeCells={this.state.snakeCells} />
      </div>
    );
  }
}

export default Game;
