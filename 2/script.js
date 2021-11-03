let array = [1, 2, 3, 4, 5];
let x = Number(prompt(`Вводим число на которое хотим увеличить`));

let functionArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += x;
  }
  alert(array);
}
functionArray(array);
