# Hoisting

## Introduction

- Hoisting is a mechanism in javascript which moves/hoistes variables/functions to top of the current scope.

## Key Points About Hoisting

- Only declarations are hoisted not initializations.
- Only function declarations are hoisted , function expressions and arrow functions are not.
- Variables with **var** are hoisted and initialized with **undefined**.
- variables with **Let** and **Const** and classes are hoisted but not initialized and would not be accessible until their declarations,leading to temporal dead zone.

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

#### Let & Const

<details><summary>Code Example Of Above Topic</summary>

```Javascript
console.log(a); // Outputs Reference Error "cannot access variable before initialization"
console.log(b); // Outputs Reference Error "cannot access variable before initialization"

let a = 10;
const b = 20;

console.log(a); // Outputs 10
console.log(b); // Outputs 20
```

</details>

#### Function Declaration

<details><summary>Code Example Of Above Topic</summary>

```Javascript
func(); // Outputs Hoisted

function func() {
    console.log(`Hoisted`);
}
```

</details>

#### Function Expressions & Arrow Functions

<details><summary>Code Example Of Above Topic</summary>

```Javascript

funcExp(); //Ouptputs Reference Error "cannot access function before initialization"
funcArrow(); //Ouptputs Reference Error "cannot access function before initialization"

let funcExp = function () {
    console.log("function expression will be hoisted but not be accessed");
}
let funcArrow = () => {
    console.log("arrow function will be hoisted but not be accessed");
}
```

</details>

## Benefits of Understanding Hoisting

1. Avoiding Errors : Understanding how **Let** and **Const** are only hoisted and not initialized until their declaration can prevent reference errors or entering in temporal dead zone.

2. Writing Cleaner Code : Writing variables at top level of current scope would be more readable.

3. Debugging : Understanding how hoisting works and which declarations are hoisted and can be accessed can help while debugging scope related issues.
