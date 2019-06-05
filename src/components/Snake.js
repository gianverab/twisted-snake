import React from "react";

const Snake = ({ snakeCells }) => (
  <div>
    {snakeCells.map((cell, key) => {
      const style = {
        left: `${cell[0]}px`,
        top: `${cell[1]}px`
      };
      return <div className="snake-cell" style={style} key={key} />;
    })}
  </div>
);

export default Snake;
