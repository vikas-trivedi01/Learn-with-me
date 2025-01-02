# 1. Functions

## Introduction

- Functions are widely used in js.They are reusable code chunks and provides modularity, reusability, efficiency.
- Functions are widely used to remove tasks which are repetitive and can use **WORA** method (Write Once Run Anywhere (i.e - concept of <i>Java</i>) here used in context of writing functions of a project.).

## Core Concepts

### Function Declaration

- A named function defined using **function** keyword.
- It can be called before it's declaration using concept of <i>Hoisting</i>.

```js
function sayHello(name) {
  return `Hello ${name}!`;
}
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```

### Function Expressions

- A function defined by assigning it to a variable.
- Also known as **Anonymous Functions**.

```js
const sayHello = function (name) {
  return `Hello ${name}!`;
};
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```

### Arrow Functions

- Introduced in ES6, and are shorter way to write functions.
- It doesn't bind it's own <i>this</i>.

```js
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Robert"));

//Outputs
//Hello Robert!
```

### Default Parameters

- Default Parameters are a way to handle default / base cases where caller of function if doesn't provide necessary values for parameters then these default ways are taken as reference.

```js
function sayHello(name = "Guest") {
  return `Hello ${name}!`;
}
console.log(sayHello());

//Outputs
//Hello Guest!
```

### REST Parameters

- REST Parameters are typically used to group remaining parameters which are provided in function call but not accepted as individuals in function definition.

```js
function multiplyBy(multiplier, ...toMultiplyNums) {
  return toMultiplyNums.map((numToMultiply) => {
    return multiplier * numToMultiply;
  });
}

console.log(multiplyBy(2, 2, 3, 4));

// Outputs:
// [4, 6, 8]
```

### SPREAD Parameters

- SPREAD Parameters are typically used to spread out parameters's values which are provided in function call.
- Expands arrays,object's values/properties in parameters.

```js
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

## Real-World Applications

**Function Declaration**: Used for calculations, transformations, to remove repetitive tasks.
**Function Expression**: Used in <i>IIFE</i> and anonymous event handlers.
**Arrow Functions**: Used with array methods and short callbacks.
**Default Parameters**: Used to remove many validity checks,handling optional configurations.
**Rest Parameters**: Used to combine remaining parameters provided.
**Spread Syntax**: Used to clone and spread objects and arrays.
