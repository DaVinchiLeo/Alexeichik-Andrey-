let sum = 0;
let array = [1, 1, [2, [2, [2, [2]]]]];

let functionArray = (array) => {
  array.forEach(function (value) {
    Array.isArray(value) ? functionArray(value) : (sum += value);
  });

  return sum;
};

alert(`сумма массива=${functionArray(array)}`);
/*---------------------Тут уже нормальное решение-------------------------*/

function nameEE(arr) {
  let summm = 0;
  for (let i = 0; i < arr.length; i++) {
    summm += arr[i];
  }
  console.log(`сумма=${summm}`);
  return summm;
}
let array2 = [[5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]];

nameEE(array2.flat(Infinity));
