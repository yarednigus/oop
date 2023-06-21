// const elf = {
//   name: "peter",
//   weapon: "bow",
//   attach() {
//     return elf.name + ` attack with ` + elf.weapon;
//   },
// };
// console.log(elf.attach());
// //factory functions
// function createElf(name, weapon) {
//   return {
//     name,
//     weapon,
//     attach() {
//       return elf.name + ` attack with ` + elf.weapon;
//     },
//   };
// }
// const jonas = createElf("jonas", "ak 47");

// console.log(jonas.attach());
// const yared = createElf("yared", "bow");

// console.log(yared.attach());
///// this two functions are related manually but ....
// const elfFunctions = {
//   attach() {
//     return this.name + ` attack with ` + this.weapon;
//   },
// };
// function createElf(name, weapon) {
//   return {
//     name,
//     weapon,
//   };
// }
// const jonas = createElf("jonas", "ak 47");
// jonas.attach = elfFunctions.attach;
// console.log(jonas.attach());
// const yared = createElf("yared", "bow");
// yared.attach = elfFunctions.attach;
// console.log(yared.attach());
/////// by using object.create we can make this a little bit cleaner
///// Object.Create creates prototypal inheritance
// const elfFunctions = {
//   attach() {
//     return this.name + ` attack with ` + this.weapon;
//   },
// };
// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }
// const jonas = createElf("jonas", "ak 47");
// jonas.attach = elfFunctions.attach;
// console.log(jonas.attach());
// const yared = createElf("yared", "bow");
// yared.attach = elfFunctions.attach;
// console.log(yared.attach());
/////////// Constructor Function

// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }
// Elf.prototype.attack = function () {
//   return "attack with " + this.weapon;
// };
// Elf.prototype.build = function () {
//   function building() {
//     return this.name + " builds a house";
//   }
//   return building.bind(this);
// };
// const peter = new Elf("peter", "stones");
// console.log(peter.build()());
// const sam = new Elf("sam", "fire");
// console.log(sam.attack());
/// In simple way
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }
// Elf.prototype.attack = function () {
//   return "attack with " + this.weapon;
// };
// Elf.prototype.build = function () {
//   const self = this;
//   function building() {
//     return self.name + " builds a house";
//   }
//   return building();
// };
// const peter = new Elf("peter", "stones");
// console.log(peter.build());
// const sam = new Elf("sam", "fire");
// console.log(sam.attack());
//// the new ES6 Class
// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack = function () {
//     return "attack with " + this.weapon;
//   };
// }
// const peter = new Elf("peter", "stones");
// console.log(peter.attack());
// const sam = new Elf("sam", "fire");
// console.log(sam.attack());

// const attach = {
//   attach() {
//     return "attack with " + this.weapon;
//   },
// };
// function elf(name, weapon) {
//   let newElf = Object.create(attach);
//   (newElf.name = name), (newElf.weapon = weapon);
//   return newElf;
// }
// const peter = elf("peter", "sniper");
// console.log(peter.attach());
//// application
// const functions = {
//   ageCalc() {
//     return 2023 - this.birthdate;
//   },
//   retirementLeft() {
//     return 2023 - this.birthdate - 50;
//   },
//   fullName() {
//     return this.fristName + this.lastName;
//   },
// };
// function calc(birthdate, fristName, lastName) {
//   let newObj = Object.create(functions);
//   newObj.birthdate = birthdate;
//   newObj.fristName = fristName;
//   newObj.lastName = lastName;
//   return newObj;
// }
// const peterson = calc(1999, "peterson", "smith");
// console.log(peterson.ageCalc());
// console.log(peterson.retirementLeft());
// console.log(peterson.fullName());
// class functions {
//   constructor(birthdate, fristName, lastName) {
//     (this.birthdate = birthdate),
//       (this.fristName = fristName),
//       (this.lastName = lastName);
//   }
//   ageCalc() {
//     return 2023 - this.birthdate;
//   }
//   retirementLeft() {
//     return 2023 - this.birthdate - 50;
//   }
//   fullName() {
//     return this.fristName + this.lastName;
//   }
// }
// const peterson = new functions(1999, "peterson", "smith");
// console.log(peterson.ageCalc());
// console.log(peterson.retirementLeft());
// console.log(peterson.fullName());

////////// 4 ways of this
///// new binding method
// function Person(name, age) {
//   (this.name = name), (this.age = age);
// }
// const pet = new Person("peter", 55);
// console.log(pet);
// ///// Implicit binding
// const person = {
//   name: "karen",
//   age: 40,
//   hi() {
//     console.log("hi " + this.name);
//   },
// };
// console.log(person.hi());
// // Explicit Binding
// const person3 = {
//   name: "kuku",
//   age: 40,
//   hi: function () {
//     console.log("hi" + this.setTimeout);
//   }.bind(window),
// };
// console.log(person3.hi());
// // arrow function
// const person4 = {
//   name: "karen",
//   age: 40,
//   hi: function () {
//     var inner = () => {
//       console.log("hi " + this.name);
//     };
//     return inner();
//   },
// };
// person4.hi();

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attach() {
    return "attack with " + this.weapon;
  }
}
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon); // the super class must called frist
    this.type = type;
  }
}
class orge extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the worl made with " + this.color;
  }
}
const fiona = new Elf("fiona", "fire");
const yasir = new orge("yasa", "klash", "green");
console.log(fiona);
console.log(fiona.attach());
console.log(yasir.attach());
console.log(yasir.makeFort());
console.log(orge.prototype.isPrototypeOf(yasir)); ///Its true
console.log(orge.isPrototypeOf(yasir)); ///Its false b/c orge is constructor function

// const yadaw = fiona;
// const tigistu = { ...fiona };
// console.log(yadaw.attach());
// // console.log(tigistu.attach());
// console.log(tigistu.__proto__);
// console.log(yadaw.__proto__);
// console.log(fiona.__proto__);
