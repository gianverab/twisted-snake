import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import { getFoodPosition, getSnakePosition } from "../helpers/methods";
import "../styles/Game.css";

const initialState = {
  food: getFoodPosition(),
  snakeCells: getSnakePosition(),
  direction: "right"
};

class Game extends Component {
  state = initialState;

  componentDidMount() {
    setInterval(this.handleSnakeMove, 500);
    document.onkeydown = this.handleOnKeyDown;
  }

  componentDidUpdate() {
    this.handleGameCollision();
  }

  // Change the direction by the keys
  handleOnKeyDown = event => {
    // State destructuring assignment
    const { direction } = this.state;
    if (event.keyCode === 37 && direction !== "left") {
      this.setState({
        direction: "right"
      });
    } else if (event.keyCode === 38 && direction !== "up") {
      this.setState({
        direction: "down"
      });
    } else if (event.keyCode === 39 && direction !== "right") {
      this.setState({
        direction: "left"
      });
    } else if (event.keyCode === 40 && direction !== "down") {
      this.setState({
        direction: "up"
      });
    }
  };

  handleSnakeMove = () => {
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
    // Remove the tail of the snake
    body.shift();
    // Update the state
    this.setState({
      snakeCells: body
    });
  };

  handleGameCollision() {
    let head = this.state.snakeCells[this.state.snakeCells.length - 1];
    // Calculate the collision with the borders
    if (head[0] >= 512 || head[1] >= 512 || head[0] < 0 || head[1] < 0) {
      this.handleGameOver();
    }
  }

  handleGameOver() {
    alert("Game Over");
    this.setState(initialState);
  }

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
