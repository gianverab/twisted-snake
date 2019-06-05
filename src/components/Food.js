import React from "react";

const Food = ({ food }) => {
  const style = {
    left: `${food[0]}px`,
    top: `${food[1]}px`
  };
  return <div className="snake-food" style={style} />;
};

export default Food;
