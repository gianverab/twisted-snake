import React from "react";

const ScoreBoard = ({ score, topScore }) => (
  <div className="score-panel">
    <div className="game-score">{score}</div>
    <div className="game-top-score">{topScore}</div>
  </div>
);

export default ScoreBoard;
