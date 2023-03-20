const findMinAndMax = function (arrOfNum) {
  const obj = {
    max: Math.max(...arrOfNum),
    min: Math.min(...arrOfNum),
  };
  return obj;
};

console.log(findMinAndMax([12, 4, 56, 33]));
