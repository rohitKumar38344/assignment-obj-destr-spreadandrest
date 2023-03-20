const testArr = [3, 5, 1, 12, 3, 45, 45, 5];

const findUnique = function (arr) {
  return [...new Set(arr)];
};

console.log(findUnique(testArr));
