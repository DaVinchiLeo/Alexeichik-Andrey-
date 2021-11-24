/*№7. Добавить функцию из 4 домашки каждоой строке. Чтобы можно было вызвать как 
"Привет".getVowels(). Замыкание можно убрать и оставить просто подсчет гласных*/


function SearchForLetters(params1) {
  let SumOfLetters = 0;
     let params2 = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
      for (let i of params1.toLowerCase()) { //если параметр 2 не одна буква
        if (params2.includes(i)) {
          console.log(i)
          SumOfLetters += 1;

        }
      }
      alert(`Сумма всех гласных ${SumOfLetters}`);
      return SumOfLetters;
    }

  

let mystring = prompt(`Введите строку для поиска и подсчета согласных`);


SearchForLetters(mystring);
