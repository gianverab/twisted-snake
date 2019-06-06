import React, { Component } from "react";

import Snake from "./Snake";
import Food from "./Food";
import ScoreBoard from "./ScoreBoard";
import { getFoodPosition, getSnakePosition } from "../helpers/methods";
import "../styles/Game.css";

class Game extends Component {
  state = {
    food: getFoodPosition(),
    snakeCells: getSnakePosition(),
    direction: "right",
    score: 0
  };

  componentDidMount() {
    setInterval(this.handleSnakeMove, 300);
    document.onkeydown = this.handleOnKeyDown;
  }

  componentDidUpdate() {
    this.handleGameCollision();
    this.handleSnakeFeeding();
  }

  // Change the direction with the arrow keys
  handleOnKeyDown = event => {
    // State destructuring assignment
    const { direction } = this.state;
    // Set the direction avoiding the snake to go backwards
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
    let snake = [...snakeCells];
    let head = snake[snake.length - 1];

    // Match the direction with the head
    if (direction === "right") {
      head = [head[0] + 32, head[1]];
    } else if (direction === "left") {
      head = [head[0] - 32, head[1]];
    } else if (direction === "down") {
      head = [head[0], head[1] + 32];
    } else if (direction === "up") {
      head = [head[0], head[1] - 32];
    }

    // Update the position of the head
    snake.push(head);
    // Remove the tail of the snake
    snake.shift();
    // Update the snake position to our state
    this.setState({
      snakeCells: snake
    });
  };

  handleGameCollision() {
    // Get the snake head
    let head = this.state.snakeCells[this.state.snakeCells.length - 1];
    // Calculate the collision with the game borders
    if (head[0] >= 512 || head[1] >= 512 || head[0] < 0 || head[1] < 0) {
      this.handleGameOver();
    }
  }

  handleSnakeFeeding() {
    // State destructuring assignment
    const { snakeCells, food } = this.state;
    // Get the snake head and food
    let head = snakeCells[snakeCells.length - 1];
    let acorn = food;
    // Check when the snake head touches the food
    if (head[0] === acorn[0] && head[1] === acorn[1]) {
      // Set a new random position to the food
      this.setState({
        food: getFoodPosition()
      });
      this.handleSnakeGrowth();
    }
  }

  handleSnakeGrowth() {
    // Make a copy of our snake
    let newSnake = [...this.state.snakeCells];
    // Adding a new cell to the snake tail
    newSnake.unshift([]);
    // Update our snake with the new one
    this.setState({
      snakeCells: newSnake
    });
    this.handleGameScore();
  }

  handleGameOver() {
    alert("Game Over");
    this.handleNewDirection();
    this.setState({
      snakeCells: getSnakePosition(),
      food: getFoodPosition(),
      score: 0
    });
  }

  handleNewDirection() {
    // Set a new direction when the game restart
    if (this.state.direction === "left") {
      this.setState({
        direction: "up"
      });
    } else if (this.state.direction === "up") {
      this.setState({
        direction: "right"
      });
    } else if (this.state.direction === "right") {
      this.setState({
        direction: "down"
      });
    } else if (this.state.direction === "down") {
      this.setState({
        direction: "up"
      });
    }
  }

  handleGameScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    // State destructuring assignment
    const { snakeCells, food, score } = this.state;
    return (
      <div className="game-wrapper">
        <ScoreBoard score={score} />
        <div className="game-field">
          <Snake snakeCells={snakeCells} />
          <Food food={food} />
        </div>
      </div>
    );
  }
}

export default Game;
