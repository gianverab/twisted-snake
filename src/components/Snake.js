import React from "react";

const Snake = ({ snakeCells }) => (
  <div>
    {// Loop over the array of snake coordinates
    snakeCells.map((cell, key) => {
      const style = {
        left: `${cell[0]}px`,
        top: `${cell[1]}px`
      };
      // Get the snake body in place
      return <div className="snake-cell" style={style} key={key} />;
    })}
  </div>
);

export default Snake;
