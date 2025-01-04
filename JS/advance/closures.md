# Closures

## Introduction

- Closures are collection of functions and variables which belongs to outer function's scope.
- Closures use lexical environment function they are defined in.
- Closures are created every time, when a function call.
- Closures use lexical scoping , which describes parser to parse variables from a function and lexical means that the closures use use variables of the function they are defined in.

## Core Concepts

### Normal Closures

- Closures are used to access variables of outer function.

<details><summary>Code Eaxmple Of Above Topic</summary>

```js
function generateEncryption(encryptionString) {
  return function (userPassword) {
    return `${userPassword}-${encryptionString}`;
  };
}

const adminEncryptedPass = generateEncryption("admin123");
const userEncryptedPass = generateEncryption("user123");

console.log(adminEncryptedPass("newAdmin"));
console.log(userEncryptedPass("firstUser"));

//Outputs
//newAdmin-admin123
//firstUser-user123
```

</details>

### Closures as Factory Functions & Class

- Closures can be used to generate new functions, dynamically.

<details><summary>Code Eaxmple Of Above Topic</summary>

```js
const newCounter = function () {
  let cnt = 0;
  function changeCnt(value) {
    cnt += value;
  }

  return {
    increment() {
      changeCnt(1);
    },
    decrement() {
      changeCnt(-1);
    },
    getValue() {
      return cnt;
    },
  };
};

const firstCounter = newCounter(); // acting as object
const secondCounter = newCounter(); // acting as object

firstCounter.increment();
firstCounter.increment();

console.log(
  `First counter value after adding two : ${firstCounter.getValue()}`
);

firstCounter.decrement();
console.log(
  `First counter value after subtracting one : ${firstCounter.getValue()}`
);

secondCounter.increment();

console.log(
  `Second counter value after adding one : ${secondCounter.getValue()}`
);

secondCounter.decrement();
console.log(
  `Second counter value after subtracting one : ${secondCounter.getValue()}`
);
c;

//Outputs
// First counter value after adding two : 2
// First counter value after subtracting one : 1
// Second counter value after adding one : 1
// Second counter value after subtracting one : 0
```

</details>

### Closures Based On Scopes

- Closures can capture variables which are block scoped and also module scoped.
- Block Scope Closures
- Module Scope Closures

#### Block Scope Closures

- We can create closures on variables which are in block of something.
<details><summary>Code Eaxmple Of Above Topic</summary>

```js
let getX;

{
  let x = 5;
  getX = () => x;
}
console.log(`Value of X : ${x}`); // Outputs ReferenceError: x is not defined
console.log(`Value of X : ${getX()}`); // Outputs 5
```

</details>

- We have created a blocked scoped closure over variable x.

#### Module Scope Closures

- We can create closures over variables which are part of a module.
- There are two ways we can use these types of closures

1. Without Exporting Variables
2. With Exporting Variables (Live Binding)

---

#### Without Exporting Variables

<details><summary>Code Eaxmple Of Above Topic</summary>
<details><summary>mainModule.js</summary>

```js
let x = 1;

export const getX = () => x;

export const setX = (val) => {
  x = val;
};
```

</details>

<details><summary>main.js</summary>

```js
import { getX, setX } from "./mainModule.js";

console.log(`${getX()}`); // Outputs 1

setX(2);

console.log(`${getX()}`); // Outputs 2
```

</details>

</details>
<br />

- Here we restricted direct access to our variable X and provided two methods to read/write that variable.

- Thus this demonstrates that how we can use closures to access variables in modules without exporting them.

#### With Exporting Variables

<details><summary>Code Eaxmple Of Above Topic</summary>
<details><summary>mainModule.js</summary>

```js
export let x = 1;

export const setX = (val) => {
  x = val;
};
```

</details>

<details><summary>getter.js</summary>

```js

import { x } from './mainModule.js';

export const getX = () => x;
}

```

</details>

<details><summary>main.js</summary>

```js
import { setX } from "./mainModule.js";
import { getX } from "./getter.js";

console.log(`${getX()}`);

setX(2);

console.log(`${getX()}`);
```

</details>

</details>
<br />

- Here we have given direct access to our variable X and any changes to the variable are automatically reflected at every place where the variable was imported.

- Thus this demonstrates that how we can use closures to access variables in modules with exporting them.

#### Difference Between These Two Ways

<table>

  <tr>
    <th>Getter - Setter Approach</th>
    <th>Live Binding Approach</th>
  </tr>

  <tr>
    <td>Variable will be private.</td>
    <td>Variable will be public.</td>
  </tr>

  <tr>
    <td>Any validations can be implemented before setting the variable's value.</td>
    <td>If validations implemented when setting the variable's value modules can bypass it because, variable is publicly available.</td>
  </tr>

</table>
