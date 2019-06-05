import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import "../styles/Game.css";

class Game extends Component {
  state = {
    food: [128, 128],
    snakeCells: [[0, 256], [32, 256], [64, 256]]
  };
  render() {
    // State destructuring assignment
    const { snakeCells, food } = this.state;
    return (
      <div className="game-background">
        <Snake snakeCells={snakeCells} />
        <Food food={food} />
      </div>
    );
  }
}

export default Game;
