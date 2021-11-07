let array = [[5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]];

/*
let functionArray = (array) => {
  let result=0;
  for (let i = 0; i < array.length; i++) {
    result+= array[i];
  }
  alert(`сумма массива=${result}`);
  }
  functionArray(array);
  
*/

/*
let functionArray = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result += array[i][j];
    }
    alert(`сумма массива=${result}`);
  }
}
functionArray(array);*/


/*--------------------------------1метод-----------------------------------------------*/

/*const sum = array => array.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

alert(sum(array));*/
/*--------------------------------2метод-----------------------------------------------*/
var sum = 0;

function foo(array) {

  array.forEach(function(value, index) {
    Array.isArray(value) ? foo(value) : sum += value; 
  });

  return sum;
}

alert(foo(array));
