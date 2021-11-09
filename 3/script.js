let array = [[5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]];
let sum = 0;


let functionArray = (array) => {
  array.forEach(function (value) {
    Array.isArray(value) ? functionArray(value) : (sum += value);
  });

  return sum;
};

alert(`сумма массива=${functionArray(array)}`);