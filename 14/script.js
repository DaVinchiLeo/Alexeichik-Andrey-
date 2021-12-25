/*14 DZ
Нужно создать форму логина, в которой есть логин, пароль и кнопка сабмит, 
по кнопке сабмит проверять данные(логин не меньше 5 символов, пароль должен 
содеражть не меньше 5 символов, 1 букву и  1 цифру минимум) и если все ок
сохранять в локалсторадж. Если данные есть в локалсторадже или вы только 
что сохранили успешно, нужно отрисовать любой контент вместо формы логина
и кнопку выйти(которая удаляет запись из локалсторадж).
*/
let but = document.getElementById("submit");
but.addEventListener("click", function () {
  let log = document.getElementById("login");
  let pas = document.getElementById("password");
  if (log.value.length < 5) {
    alert("Логин <5");
    return;
  }
  let newpas =pas.value.split('');
  alert(newpas);
  console.log(newpas);

  if (pas.value.length < 5) {
    alert("пароль <5");
    return;
  }

  for (let char of newpas) {
    if (isNaN(char) !== true) {
      alert("нет букв");
      return;
    }
    if (isNaN(char) === true) {
      alert("нет цифр");
      return;
    }
  }
  
  localStorage.setItem("log+pas", JSON.parse(JSON.stringify(log.value + pas.value)));
  let value = localStorage.getItem("log+pas");
  alert(JSON.parse(value));
});
if (localStorage.getItem("log+pas") !== null) {
  let p = document.createElement("p");
  let img = document.createElement("img");
  document.body.append(p);
  document.body.append(img);
  p.innerText = "Хорошо логин и пароль знаком";
  img.src = "http://risovach.ru/thumb/upload/200s400/2016/03/mem/nelzya-prosto-tak-vzyat-i-boromir-mem_107428305_orig_.jpg?eju0t";
}
