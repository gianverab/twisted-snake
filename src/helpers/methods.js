export const getFoodPosition = () => {
  let min = 0;
  let max = 512;
  let x = Math.floor((Math.random() * (max - min) + min) / 32) * 32;
  let y = Math.floor((Math.random() * (max - min) + min) / 32) * 32;
  return [x, y];
};

export const getSnakePosition = () => {
  let min = 0;
  let max = 416;
  let x = Math.floor((Math.random() * (max - min) + min) / 32) * 32;
  let y = Math.floor((Math.random() * (max - min) + min) / 32) * 32;
  return [[x, y], [x + 32, y], [x + 64, y]];
};
