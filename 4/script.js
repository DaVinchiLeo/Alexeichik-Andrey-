/*--------Домашнее задание VOWELS
Написать «чистую» функцию для эффективного подсчёта количества русских 
гласных букв в строке.
Функция должна вернуть функцию(аргумент принимает либо гласные 
которые нужно вывести либо ничего,
если ничего то выводим все гласные), которая выведет в консоль 
все гласные и вернет их число.------*/

function SearchForLetters(params1) {
  let SumOfLetters = 0;
  return function (params2) {
    for (let i of params1.toLowerCase()) {
      if (params2.includes(i)) {
        SumOfLetters += 1;
        console.log(i);
      }
    }

    return SumOfLetters;
  };
}
let mystring = prompt(`Введите строку для поиска и подсчета согласных`);
let ListLetters = ["и", "е"];

let new_Search = SearchForLetters(mystring);
alert(`число гласных:${new_Search(ListLetters)}`);
