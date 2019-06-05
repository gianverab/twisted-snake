import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import { getFoodPosition, getSnakePosition } from "../helpers/methods";
import "../styles/Game.css";

class Game extends Component {
  state = {
    food: getFoodPosition(),
    snakeCells: getSnakePosition()
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
