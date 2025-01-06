# Hoisting

## Introduction

- Hoisting is a mechanism in javascript which moves/hoistes variables/functions to top of the current scope.

## Key Points About Hoisting

- Only declarations are hoisted not initializations.
- Only function declarations are hoisted , function expressions and arrow functions are not.
- Variables with **var** are hoisted and initialized with **undefined**.
- variables with **let** and **const** and classes are hoisted but not initialized and would not be accessible until their declarations,leading to temporal dead zone.

## Core Concepts

### Hoisting of Variables

#### Var

<details><summary>Code Example Of Above Topic</summary>

```Javascript
console.log(a); // Outputs undefined

var a = 10;

console.log(a); // Outputs 10
```

</details>

- Variables declared with **var** are hoisted and initialized with **undefined**.

#### Let & Const

<details><summary>Code Example Of Above Topic</summary>

```Javascript
console.log(a); // Outputs ReferenceError: Cannot access 'a' before initialization
console.log(b); // Outputs ReferenceError: Cannot access 'b' before initialization

let a = 10;
const b = 20;

console.log(a); // Outputs 10
console.log(b); // Outputs 20
```

</details>

- Variables declared with **let** & **const** are hoisted but not initialized.Thus leading to temporal dead zone from start of block until the declaration is encountered.

### Hoisting of Functions

#### Function Declarations

<details><summary>Code Example Of Above Topic</summary>

```Javascript
func(); // Outputs Hoisted

function func() {
    console.log(`Hoisted`);
}
```

</details>

- Here above because of **func()** is a function declaration using **function** , it will be hoisted at top of global scope thus will be accessible if call it before it's declaration.

#### Function Expressions & Arrow Functions

<details><summary>Code Example Of Above Topic</summary>

```Javascript

funcExp(); //Ouptputs  ReferenceError
funcArrow(); //Ouptputs ReferenceError

let funcExp = function () {
    console.log("function expression will be hoisted but not be accessed");
}
let funcArrow = () => {
    console.log("arrow function will be hoisted but not be accessed");
}
```

</details>

- Unlike <i>function declarations</i>, function expressions and arrow function are hoisted but not initialized because they will be assigned to variables and variables will be hoisted and applie

## Benefits of Understanding Hoisting

1. Avoiding Errors : Understanding how **Let** and **Const** are only hoisted and not initialized until their declaration can prevent reference errors or entering in temporal dead zone.

2. Writing Cleaner Code : Writing variables at top level of current scope would be more readable.

3. Debugging : Understanding how hoisting works and which declarations are hoisted and can be accessed can help while debugging scope related issues.
