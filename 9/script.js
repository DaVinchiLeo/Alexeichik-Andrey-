//------------------------array with object--------------------------------------------
let arrayLinks = [
  { name: "Google", myhref: "http://google.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
  { name: "VK", myhref: "http://Vkontakte.ru" },
  { name: "YouTybe", myhref: "http://youtube.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
  { name: "YouTybe", myhref: "http://youtube.com" },
];
//---------------------------function----------------------------------------------------------
function creature_footer_and_header(arrayLinks) {
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

  let footer = document.createElement("footer");
  footer.className = "class2";
  document.body.append(footer);

  let nav = document.createElement("nav");
  footer.append(nav);

  let ul = document.createElement("ul");
  nav.append(ul);
  let ul2 = document.createElement("ul");
  nav.append(ul2);

  arrayLinks.forEach((item) => {
    let newli = document.createElement("li");
    let li = document.createElement("li");
    let newa = document.createElement("a");
    let a = document.createElement("a");
    newli.append(newa);
    li.append(a);
    newa.innerText = item.name;
    newa.href = item.myhref;
    a.innerText = item.name;
    a.href = item.myhref;
    ul2.append(newli);
    ul_header2.append(li);
    li.className = "header_li";
  });
}
creature_footer_and_header(arrayLinks);
