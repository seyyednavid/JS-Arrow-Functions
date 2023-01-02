// Normal function
const sayHello = function () {
  console.log("Hello");
};
sayHello();

// Convert function to arrow function
const sayHello1 = () => {
  console.log("Hello 1");
};
sayHello1();

// One line arrow function does not need braces
const sayHello2 = () => console.log("Hello 2");
sayHello2();

// ---------------------------------------------

// normal function with return
const sayHello3 = function () {
  return "Hello 3";
};
result_nor = sayHello3();
console.log(result_nor);

// SAme as above => One line (return) in arrow function
const sayHello4 = () => "Hello 4";
result_arrow = sayHello4();
console.log(result_arrow);

// ---------------------------------------------

//  Return object(we need put object into parenthesis )
const sayHello5 = () => ({ msg: "hello 5" });
res_obj = sayHello5();
console.log(res_obj);

// Single param(here is: name) does need parenthesis
const sayHello6 = (name) => console.log(`Hello ${name}`);
sayHello6("navid");

// Multiple params need parenthesis
const sayHello7 = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
sayHello7("navid", "hejazi");

// --------------------------------------------------
const users = ["navid", "arash", "maziar"];

const nameLengths1 = users.map(function (name) {
  return name.length;
});

// Shorter
const nameLengths2 = users.map((name) => {
  return name.length;
});

// Shortest
const nameLengths3 = users.map((name) => name.length);

console.log(nameLengths1);
console.log(nameLengths2);
console.log(nameLengths3);
