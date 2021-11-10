/*--------Домашнее задание VOWELS
Написать «чистую» функцию для эффективного подсчёта количества русских 
гласных букв в строке.
Функция должна вернуть функцию(аргумент принимает либо гласные 
которые нужно вывести либо ничего,
если ничего то выводим все гласные), которая выведет в консоль 
все гласные и вернет их число.------*/

/*let mystring= prompt(`Введите строку для поиска и подсчета согласных`)*/
/*
function SearchforForLetters(mystring) {
    let ListLetters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я","А", "О", "И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я",];
    let SumOfLetters= 0;
    
        for(let i = 0; i < mystring.length ; i++) {
            if (ListLetters.indexOf(mystring[i]) !== -1) {
                
              SumOfLetters += 1;
            }
          
          }
          console.log(SumOfLetters);
          return SumOfLetters;
    }
    
  
  let mystring= prompt(`Введите строку для поиска и подсчета согласных`)
  alert(SearchforForLetters(mystring));
*/

/* пример 
let SearchforForLetters = mystring => Array.from(mystring).filter(ListLetters => 'aeiou'.includes(ListLetters)).length;

alert(SearchforForLetters('fdlbgjeehfdouerturtgbyqefviz'));
*/

/* you*/

function SearchforForLetters(mystring) {
  let ListLetters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я", "А", "О", "И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я"];
  let SumOfLetters = 0;

  for (let i of mystring.toLowerCase()) {
    if (ListLetters.includes(i)) {
      SumOfLetters += 1;
    }
  }
  console.log(SumOfLetters);
  return SumOfLetters;
}

let mystring = prompt(`Введите строку для поиска и подсчета согласных`);
alert(SearchforForLetters(mystring));
