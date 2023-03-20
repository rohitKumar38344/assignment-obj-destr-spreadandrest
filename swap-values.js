"use strict";

const swapValue = function () {
  let [a, b] = [...arguments];
  [a, b] = [b, a];

  return [a, b];
};

console.log(swapValue(8, 3));
