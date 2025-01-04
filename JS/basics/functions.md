# Functions

## Introduction

- Functions are widely used in js.They are reusable code chunks and provides modularity, reusability, efficiency.
- Functions are widely used to remove tasks which are repetitive and can use **WORA** method (Write Once Run Anywhere (i.e - concept of <i>Java</i>) here used in context of writing functions of a project.).
- Functions in JS are first-class citizens meaning they can be treated as normal values and can be passed and returned from a function.

## Core Concepts

### Function Declaration

- A named function defined using **function** keyword.
- It can be called before it's declaration using concept of <i>Hoisting</i>.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
function sayHello(name) {
  return `Hello ${name}!`;
}
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```
</details>

### Function Expressions

- A function defined by assigning it to a variable.
- Also known as **Anonymous Functions**.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
const sayHello = function (name) {
  return `Hello ${name}!`;
};
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```

</details>

### Arrow Functions

- Introduced in ES6, and are shorter way to write functions.
- It doesn't bind it's own <i>this</i>.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```

</details>

### Default Parameters

- Default Parameters are a way to handle default / base cases where caller of function if doesn't provide necessary values for parameters then these default ways are taken as reference.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
function sayHello(name = "Guest") {
  return `Hello ${name}!`;
}
console.log(sayHello());

//Outputs
//Hello Guest!
```

</details>

### REST Parameters

- REST Parameters are typically used to group remaining parameters which are provided in function call but not accepted as individuals in function definition.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
function multiplyBy(multiplier, ...toMultiplyNums) {
  return toMultiplyNums.map((numToMultiply) => {
    return multiplier * numToMultiply;
  });
}

console.log(multiplyBy(2, 2, 3, 4));

// Outputs:
// [4, 6, 8]
```

</details>

### SPREAD Parameters

- SPREAD Parameters are typically used to spread out parameters's values which are provided in function call.
- Expands arrays,object's values/properties in parameters.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
let user = {
    id : "user123",
    pass : "user",
}

function addUserAge(age) {
    let updatedUser = {...user,age:`${age}`};
    return updatedUser;
}

console.log(addUserAge(parseInt(20,10));

// Outputs:
// { id : "user123", pass : "123", age:20}

```

</details>

## Real-World Applications

**Function Declaration**: Used for calculations, transformations, to remove repetitive tasks.<br /><br />
**Function Expression**: Used in <i>IIFE</i> and anonymous event handlers.<br /><br />
**Arrow Functions**: Used with array methods and short callbacks.<br /><br />
**Default Parameters**: Used to remove many validity checks,handling optional configurations.<br /><br />
**Rest Parameters**: Used to combine remaining parameters provided.<br /><br />
**Spread Syntax**: Used to clone and spread objects and arrays.<br /><br />

## Advance Insights

### IIFE (Immediately Invoked Function Expressions)

- Functions which are invoked just after starting the program is know as an IIFE.
- Used for isolation of scope.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
(function () {
  console.log("This runs immediately!");
})();

//Outputs
//This runs immediately!
```

</details>

### Higher-Order Functions

- A function which either takes another function as argument or returns another function is known as higher order function.
- It's Powerfull because it can provide abstraction, reusability, modularity.
- It makes easy to handle operations like filtering, mapping, reducing, or dynamically generating new functions.

<details><summary>Code Example Of Above Topic</summary>

```Javascript
function createStatusLogger(status) {
  return function (userName) {
    return `${userName}'s status : ${status}`;
  };
}

const logUserIn = createStatusLogger("Logged In");
const logUserOut = createStatusLogger("Logged Out");

console.log(logUserIn("Alice"));
console.log(logUserOut("Alice"));

// Outputs
// Alice is Logged In
// Alice is Logged Out
```

</details>

## Conclusion

- Functions serve as backbone of JS. They provide flexibility, reusability, modularity, etc.
- It provides foundations for understanding more advance topics like closures, asynchronous programming, etc.