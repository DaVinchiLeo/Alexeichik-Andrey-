const allul = document.getElementsByTagName("ul");
const ul = allul[0];
let selectedLi;
ul.addEventListener("click", function (event) {
  if (event.target.tagName != "LI") return;
  if (event.target.tagName === "LI") {
      if (event.ctrlKey || event.metaKey) {
      event.target.style.background = "red";
    } else {
      color_line1(event.target);
    }
  }
});
function color_line1(li) {
  let selected1 = ul.querySelectorAll("li");
  for (let elem of selected1) {
    elem.style.background = "none";
  }
  li.style.background = "red";
}
//-------------------------------------------------------------------------------------------------------
id.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle("color_li2");
  } else {
    color_line(event.target);
  }
};

function color_line(li) {
  let selected = id.querySelectorAll(".color_li2");
  for (let elem of selected) {
    elem.classList.remove("color_li2");
  }
  li.classList.add("color_li2");
}
