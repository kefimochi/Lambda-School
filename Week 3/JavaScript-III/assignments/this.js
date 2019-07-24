/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If 'this' is used in a global scope(like inside a function, not an object) then 'this' will be DOM's window object
 * 2. If 'this' is called inside an object w/ just a dot call(like dog.bark()) then `this` will be that exact instance of an object
 * 3. If there are multiple objects constructed w/ a `new` keyword, then `this` will refer to the particular instance of an object that was created
 * 4. If .apply, .call or .bind are called on any initialized objects then they will overwrite `this` with whatever argument was passed as an object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function loveStickers() {
  console.log(this);
  console.log("Stickers are awesome!");
}

loveStickers();

// code example for Implicit Binding

const dogObject = {
  greeting: "Bark! ",
  speak: function() {
    console.log("Implicit this: ", this);
    return `${this.greeting}You're a human!`;
  }
};

console.log(dogObject.speak());

// code example for New Binding

function cat(obj) {
  this.name = obj.name;
  this.nickname = obj.nickname;
  this.speak = function() {
    console.log("This new binding: ", this);
    console.log(
      `Meow! My name is ${this.name} and my nickname is ${this.nickname}!`
    );
  };
}

const popmadour = new cat({ name: "Popmadour", nickname: "Pop" });
const elizabeth = new cat({ name: "Elizabeth", nickname: "Eliza" });

console.log();
popmadour.speak();
console.log();
elizabeth.speak();

// code example for Explicit Binding
console.log();
popmadour.speak.call(elizabeth);
elizabeth.speak.apply(popmadour);
