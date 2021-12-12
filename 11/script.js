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
  { type: "textarea", name: "About", value: "Стюарт Гиллиган «Стьюи» Гриффин (англ. Stewart Gilligan «Stewie» Griffin) — персонаж мультсериала «Гриффины», феноменально одарённый годовалый ребёнок, сын Лоис и Питера Гриффинов." },
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
  }
}
creature_form(arrayform);
