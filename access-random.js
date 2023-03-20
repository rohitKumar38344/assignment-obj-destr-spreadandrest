const extractNumbers = function (arr) {
  const [first, second] = arr;
  return [first, second, (last = arr[arr.length - 1])];
};

console.log(extractNumbers([1, 2, 3, 4, 45]));
