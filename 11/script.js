/*#11 DZ
const formArray = [{ type: text, name: "text" }, { type: password, name: "passwords" }, {}];

const form = document.createElement("form");

Создать функцию, для создания элементов формы, результат функции вставить в форму*/
let div = document.createElement("div");
div.className = "class_div";
document.body.append(div);
let arrayform = [
  { type: "text", name: "Name", value: "Stewie" },
  { type: "text", name: "Surname", value: "Griffin" },
  { type: "text", name: "Sicond name", value: "Piter" },
  { type: "textarea", name: "About", value: "Стюарт Гиллиган «Стьюи» Гриффин \n(англ. Stewart Gilligan «Stewie» Griffin) — персонаж \n мультсериала «Гриффины», феноменально одарённый\n годовалый ребёнок, сын Лоис и\n Питера Гриффинов." },
  
  { type: "radio", name: "Voise",value:"Yes" },
  { type: "radio", name: "Voise",value:"No" },
  { type: "radio", name: "Voise",value:"Maybe" },
];
function creature_form(arrayform) {
  let form = document.createElement("form");
  div.append(form);

  for (let i = 0; i < arrayform.length; i++) {
    if (arrayform[i].type === "text") {
      let input_text = document.createElement("input");
      input_text.value = arrayform[i].value;
      form.append(input_text);
      input_text.className = "class_input";
    }
    if (arrayform[i].type === "textarea") {
      let input_textarea = document.createElement("input");
      input_textarea.value = arrayform[i].value;

      form.append(input_textarea);
      input_textarea.className = "class_textarea";
    }
    if (arrayform[i].type === "radio") {
      let other_input = document.createElement("input");
      other_input.setAttribute('type', 'radio');
      let lebel=document.createElement("label")
      lebel.innerText = arrayform[i].value;
      lebel.className = "class_lebel";
      form.append(other_input);
      form.append(lebel);
    }
  }
}
creature_form(arrayform);
