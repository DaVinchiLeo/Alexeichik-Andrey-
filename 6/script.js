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
    (this.name = _name), 
    (this.weight = _weight), 
    (this.age = _age), 
    (this.voise = _voise);
  }
  voiseAnimal() {
    console.log(`животное:${this.name} вес:${this.weight} возраст: ${this.age} ${this.voise}`);
  }
}

function AnimalFabric(arrayAnimals) {
  for (let i = 0; i < arrayAnimals.length; i++) {
    /* console.log(arrayAnimals[i].name);
       console.log(arrayAnimals[i].weight);
       console.log(arrayAnimals[i].age);
       console.log(arrayAnimals[i].voise);*/

    let NewAnimals = new AllAnimals(arrayAnimals[i].name, arrayAnimals[i].weight, arrayAnimals[i].age, arrayAnimals[i].voise);
    NewAnimals.voiseAnimal();
  }
}

AnimalFabric(arrayAnimals);
