import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import { getFoodPosition, getSnakePosition } from "../helpers/methods";
import "../styles/Game.css";

class Game extends Component {
  state = {
    food: getFoodPosition(),
    snakeCells: getSnakePosition(),
    direction: "right"
  };

  componentDidMount() {
    setInterval(this.handleSnakeMove, 500);
    document.onkeydown = this.handleOnKeyDown;
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
