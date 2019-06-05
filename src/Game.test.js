import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Game from "./components/Game";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Game />, div);
  unmountComponentAtNode(div);
});
