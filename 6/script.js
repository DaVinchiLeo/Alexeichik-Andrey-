let animal1 = {
  name: "cow",
  weight: 525,
  age: 5,
  voise: "mooooo",
};
let animal2 = {
  name: "dog",
  weight: 22,
  age: 5,
  voise: "gav-gav",
};
let animal3 = {
  name: "chicken",
  weight: 2,
  age: 5,
  voise: "Ko-ko-ko",
};
let animal4 = {
  name: "pig",
  weight: 185,
  age: 5,
  voise: "hry-hry",
};
let animal5 = {
  name: "cat",
  weight: 2.5,
  age: 5,
  voise: "meows",
};

let arrayAnimals = [animal1, animal2, animal3, animal4, animal5];

class AllAnimals {
  constructor(_name, _weight, _age, _voise) {
    (this.name = _name), (this.weight = _weight), (this.age = _age), (this.voise = _voise);
  }
  voiseAnimal() {
    console.log(`животное:${this.name} вес:${this.weight} возраст: ${this.age} голос${this.voise}`);
  }
}

//вариант 1

function AnimalFabric(arrayAnimals) {
  let newarr = [];
  for (let i = 0; i < arrayAnimals.length; i++) {
    let NewAnimals = new AllAnimals(arrayAnimals[i].name, arrayAnimals[i].weight, arrayAnimals[i].age, arrayAnimals[i].voise);
    newarr.push(NewAnimals);

    NewAnimals.voiseAnimal();
  }
  console.log(newarr);
  return newarr;
}
AnimalFabric(arrayAnimals);

// Доп решение (не верно)
/*
function AnimalFabric(arrayAnimals) {
  let newarr = [];
  for (let i = 0; i < arrayAnimals.length; i++) {
    newarr.push(arrayAnimals[i]);
      //console.log(newarr);
      //newarr=Array.of(arrayAnimals);
     }
  
  let NewAnimals = new AllAnimals(newarr.flat(Infinity));
  NewAnimals.voiseAnimal();
  //return newarr; map
}

AnimalFabric(arrayAnimals);

*/
//решение по уроку  доделать
/*
const AnimalFabric = (arrayAnimals) => arrayAnimals.map((item) => new AllAnimals(item));

AnimalFabric(arrayAnimals);*/
