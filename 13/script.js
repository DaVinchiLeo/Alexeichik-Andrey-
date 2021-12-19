/*#13 DZ
Нужно создать несколько кнопок на одной странице index.html, 
при нажатии на одну из них в div content должны отрисовываться 
данные которые приходят из random api(данные которые были загружены по другой кнопке должны очиститься)
https://random-data-api.com/api/company/random_company
https://random-data-api.com/api/users/random_user
https://random-data-api.com/api/phone_number/random_phone_number
*/


let but1 = document.getElementById("index-index");
but1.addEventListener("click", function () {
  let div=document.getElementById('div_content');
  let del_div = document.getElementById("div_restaurant");
  del_div.innerHTML = "";

  
  let input = document.createElement("input");
  input.id = "last_name";
  let img = document.createElement("img");
  img.id = "my_img";
  let input1 = document.createElement("input");
  input1.id = "payment_method";
  let input2 = document.createElement("input");
  input2.id = "plan";
  let input3 = document.createElement("input");
  input3.id = "user_firstname";
  div.append(img);
  div.append(input);
  div.append(input1);
  div.append(input2);
  div.append(input3);

  let url = "https://random-data-api.com/api/users/random_user";
  let my_img = document.getElementById("my_img");
  let last_name = document.getElementById("last_name");

  let lpayment_method = document.getElementById("payment_method");
  let plan = document.getElementById("plan");
  let user_firstname = document.getElementById("user_firstname");

  const promise_test = fetch(url);
  promise_test
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      last_name.value = data.last_name;
      user_firstname.value = data.first_name;
      my_img.src = data.avatar;
      lpayment_method.value = data.subscription.payment_method;
      plan.value = data.subscription.plan;
    });
});

let but2 = document.getElementById("index-user");

but2.addEventListener("click", function () {
  let div2=document.getElementById('div_restaurant');
  let del_div2 = document.getElementById("div_content");
  del_div2.innerHTML = "";
  

  let my_img2 = document.createElement("img");
  my_img2.id = "my_img2";
  let name = document.createElement("input");
  name.id = "name";
  div2.append(my_img2);
  div2.append(name);

  let url2 = "https://random-data-api.com/api/restaurant/random_restaurant";
  const promise_test2 = fetch(url2);
  promise_test2
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let my_img2 = document.getElementById("my_img2");
      let name = document.getElementById("name");

      my_img2.src = data.logo;
      name.value = data.name;
    });
});
