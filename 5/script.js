let user1={
  name:"Anton",
  age:24,
  salary:1000,
}
let user2={
  name:"Ivan",
  age:26,
  salary:1000,
}
let user3={
  name:"Peter",
  age:23,
  salary:1000,
}
let user4={
  name:"Jhon",
  age:24,
  salary:1000,
}
let user5={
  name:"Vasya",
  age:24,
  salary:1000,
}
let array=[user1,user2,user3,user4,user5];

function SumUserSalary(array) {
  let sum=0;
  for (let i = 0; i < array.length; i++) {
    sum+=array[i].salary;
  }
  console.log(`Сумма зарплат-${sum}`);
    return sum;
}
SumUserSalary(array);