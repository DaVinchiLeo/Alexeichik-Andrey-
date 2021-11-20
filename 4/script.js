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

    if (params2.length === 1) {
      for (let i of params1.toLowerCase()) { //если параметр 2 = одна буква
        if (params2.includes(i)) {
          console.log(i)
          SumOfLetters += 1;

        }
      }
      alert(`Сумма одной конкретной буквы(${params2}) ${SumOfLetters}`);
      return SumOfLetters;
    }
    else {

      params2 = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
      for (let i of params1.toLowerCase()) { //если параметр 2 не одна буква
        if (params2.includes(i)) {
          console.log(i)
          SumOfLetters += 1;

        }
      }
      alert(`Сумма всех гласных ${SumOfLetters}`);
      return SumOfLetters;
    }

  }
}

let mystring = prompt(`Введите строку для поиска и подсчета согласных`);
let ListLetters = ["а"];

let New_Search = SearchForLetters(mystring);
New_Search(ListLetters);
