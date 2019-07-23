// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function addingSomeVars(a) {
  var b = 296;
  function moreVars() {
    var c = 34834;
    function totalInception() {
      return a + b + c;
    }
    return totalInception();
  }
  return moreVars();
}
console.log("The sum is " + addingSomeVars(1763));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let varible = 0;
  return () => {
    return ++varible;
  };
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () =>
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  {};
