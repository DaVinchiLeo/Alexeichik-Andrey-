/*№7. Добавить функцию из 4 домашки каждоой строке. Чтобы можно было вызвать как 
"Привет".getVowels(). Замыкание можно убрать и оставить просто подсчет гласных*/

String.prototype.SearchForLetters=function() {
   
  let SumOfLetters = 0;
     let params2 = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
      for (let i of this.toLowerCase()) { 
        if (params2.includes(i)) {
          console.log(i)
          SumOfLetters += 1;
        }
      };
      alert(`Сумма всех гласных ${SumOfLetters}`);
      return SumOfLetters;
    };
    "привет как дела(5)".SearchForLetters();

