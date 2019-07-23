// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:
const Mitzi = {
  id: 1,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F"
};

const Kennan = {
  id: 2,
  name: "Kennan",
  email: "kdiben1@tinypic.com",
  gender: "M"
};

const Keven = {
  id: 3,
  name: "Keven",
  email: "kmummery2@wikimedia.org",
  gender: "M"
};

const Gannie = {
  id: 4,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M"
};

const Antonietta = {
  id: 5,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F"
};

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log("Mitzi's name: " + Mitzi.name);

// Kennan's ID
console.log("Kennan's ID: " + Kennan.id);

// Keven's email
console.log("Keven's email: " + Keven.email);

// Gannie's name
console.log("Gannie's name: " + Gannie.name);

// Antonietta's Gender
console.log("Antonietta's Gender: " + Antonietta.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
Kennan.speak = () => `\nHello, my name is ${Kennan.name}.`;
console.log(Kennan.speak() + "\n");

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
Antonietta.multiplyNums = (num1, num2) => num1 * num2;
console.log("Multiplying 3 and 4: " + Antonietta.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak: function() {
    return `My name is ${this.name}`;
  },
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return `My name is ${this.name}`;
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return `My name is ${this.name}`;
      }
    }
  }
};

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.name);

// Log the name and age of the grandchild
console.log(parent.child.grandchild.name + "\n");

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());

// Have the grandchild speak
console.log(parent.child.grandchild.speak());
