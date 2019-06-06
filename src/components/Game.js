import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import { getFoodPosition, getSnakePosition } from "../helpers/methods";
import "../styles/Game.css";

class Game extends Component {
  state = {
    food: getFoodPosition(),
    snakeCells: getSnakePosition(),
    direction: "left"
  };

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  // Change the direction by the keys
  onKeyDown = event => {
    if (event.keyCode === 37) {
      this.setState({
        direction: "right"
      });
    } else if (event.keyCode === 38) {
      this.setState({
        direction: "down"
      });
    } else if (event.keyCode === 39) {
      this.setState({
        direction: "left"
      });
    } else if (event.keyCode === 40) {
      this.setState({
        direction: "up"
      });
    }
    this.movingSnake();
  };

  movingSnake = () => {
    // State destructuring assignment
    const { snakeCells, direction } = this.state;
    // Make a copy of our snake position
    let body = [...snakeCells];
    let head = body[body.length - 1];

    // Update the position of the head
    if (direction === "right") {
      head = [head[0] + 32, head[1]];
    } else if (direction === "left") {
      head = [head[0] - 32, head[1]];
    } else if (direction === "down") {
      head = [head[0], head[1] + 32];
    } else if (direction === "up") {
      head = [head[0], head[1] - 32];
    }
    body.push(head);
    // Removing the tail of the snake
    body.shift();
    // Update the state
    this.setState({
      snakeCells: body
    });
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
