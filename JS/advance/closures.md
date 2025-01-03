# Closures

## Introduction

- Closures are collection of functions and variables which belongs to outer functions.
- Closures use lexical environment of outer function using lexical scoping which means it retains outer function's variables.
- Closures are created every time, when a function csll.

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
function newCounter() {
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
}

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
