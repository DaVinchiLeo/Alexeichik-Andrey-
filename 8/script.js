/*№8. Создать из придуманных массивов типа const headerArray = [{ name: "google", href: "http://google.cpm" }...] 
хедер и футер с помощью JS. 
header > nav > ul > li;
footer > nav > ul > li;
тег body в html должен быть пустым, все теги вы должны создать с помощью JS.
Можно использовать классы либо inline-css в js. Работа по парам, пары разбиты были на занятиях. 
Для тех кого не было : у вас в паре человек который был на занятии, он должен вам написать. 
Если есть вопросы пишите*/
//---------------------------------------------------------------HEADER------------------------------------------------------------------------------------
let header = document.createElement("header");
header.className = "header_class";
document.body.append(header);

let nav_header = document.createElement("nav");
nav_header.className = "header_nav";
header.append(nav_header);

let ul_header1 = document.createElement("ul");
ul_header1.className = "header_ul";
nav_header.append(ul_header1);

let ul_header2 = document.createElement("ul");
ul_header2.className = "header_ul";
nav_header.append(ul_header2);



let array_of_Links = [
    { name: "Google", myhref: "http://google.com" },
    { name: "Goodfon", myhref: "http://goodfon.ru" },
    { name: "VK", myhref: "http://Vkontakte.ru" },
    { name: "YouTybe", myhref: "http://youtube.com" },
    { name: "Goodfon", myhref: "http://goodfon.ru" },
    { name: "YouTybe", myhref: "http://youtube.com" },
];

for (let i = 0; i < array_of_Links.length; i++) {
    let li = document.createElement("li");
    li.className = "header_li";
    let a = document.createElement("a");
    li.append(a);
    a.innerText = array_of_Links[i].name;
    a.href = array_of_Links[i].myhref;
    ul_header2.append(li);
}



//---------------------------------------------------------------FOOTER------------------------------------------------------------------------------------
let footer = document.createElement("footer");
footer.className = "class2";
document.body.append(footer);

let nav = document.createElement("nav");
footer.append(nav);

let ul = document.createElement("ul");
nav.append(ul);
let ul2 = document.createElement("ul");
nav.append(ul2);
let arrayLinks = [
  { name: "Google", myhref: "http://google.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
  { name: "VK", myhref: "http://Vkontakte.ru" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
];

for (let i = 0; i < arrayLinks.length; i++) {
  let li=document.createElement("li");
  let a = document.createElement("a");
  li.append(a);
  a.innerText = arrayLinks[i].name;
  a.href = arrayLinks[i].myhref;
  ul.append(li);
}

arrayLinks.forEach((item) => {
  let newli=document.createElement("li");
  let newa = document.createElement("a");
  newli.append(newa);
  newa.innerText=item.name;
  newa.href=item.myhref;
  ul2.append(newli);
});
