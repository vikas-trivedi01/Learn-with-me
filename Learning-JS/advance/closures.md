# Closures

Table Of Contents
- [Closures](#closures)
  - [Introduction](#introduction)
  - [Core Concepts](#core-concepts)
    - [Normal Closures](#normal-closures)
    - [Closures as Factory Functions \& Class](#closures-as-factory-functions--class)
    - [Closure to Perform Memoization](#closure-to-perform-memoization)
    - [Closures Based On Scopes](#closures-based-on-scopes)
      - [Block Scope Closures](#block-scope-closures)
      - [Module Scope Closures](#module-scope-closures)
      - [Without Exporting Variables](#without-exporting-variables)
      - [With Exporting Variables](#with-exporting-variables)
      - [Difference Between These Two Ways](#difference-between-these-two-ways)
    - [Closures in Loop](#closures-in-loop)
    - [Performance Insights](#performance-insights)
      - [Injecting Unnecessary Functions Inside Functions For a Common Task](#injecting-unnecessary-functions-inside-functions-for-a-common-task)


## Introduction

- Closure is collection of functions and lexical environment which belongs to outer function's scope.
- Closures use lexical environment of function they are defined in.
- Closures are created every time, when a function call.
- Closures retains it's lexical environment variables even if executed outside where the closures are defined;
- Closures use lexical scoping , which describes parser to parse variables from a function and lexical means that the closures use use variables of the function they are defined in.
- Closures provides encapsulation and state management.

## Core Concepts

### Normal Closures

- Closures are used to access variables of outer function.

<details><summary>Code Example Of Above Topic</summary>

```javascript
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

<details><summary>Code Example Of Above Topic</summary>

```javascript
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


//Outputs
// First counter value after adding two : 2
// First counter value after subtracting one : 1
// Second counter value after adding one : 1
// Second counter value after subtracting one : 0
```

</details>

### Closure to Perform Memoization

- Here we will use closure to perform memoization.
<details><summary>Code Example Of Above Topic</summary>

```javascript
function memoize(func) {
    let cache = {};

    return function (key) {
        let startTime = performance.now();
        if (key in cache) {
            let endTime = performance.now();
            return { val: cache[key], time: (endTime - startTime).toFixed(5) };
        }

        let result = func(key);
        cache[key] = result;
        let endTime = performance.now();
        return { val: result, time: (endTime - startTime).toFixed(5) };
    };
}

const double = memoize(num => num * 2);

let { val: doubledValue1, time: time1 } = double(2);
console.log(`Doubled Value ${doubledValue1} returned in ${time1} ms.`);

let { val: doubledValue2, time: time2 } = double(2); // Cached result
console.log(`Doubled Value ${doubledValue2} returned in ${time2} ms. {Cached result}`);

let { val: doubledValue3, time: time3 } = double(3);
console.log(`Doubled Value ${doubledValue3} returned in ${time3} ms.`);

```

</details>

### Closures Based On Scopes

- Closures can capture variables which are block scoped and also module scoped.
- Block Scope Closures
- Module Scope Closures

#### Block Scope Closures

- We can create closures on variables which are in block of something.
<details><summary>Code Example Of Above Topic</summary>

```javascript
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

<details><summary>Code Example Of Above Topic</summary>
<details><summary>mainModule.js</summary>

```javascript
let x = 1;

export const getX = () => x;

export const setX = (val) => {
  x = val;
};
```

</details>

<details><summary>main.js</summary>

```javascript
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

<details><summary>Code Example Of Above Topic</summary>
<details><summary>mainModule.js</summary>

```javascript
export let x = 1;

export const setX = (val) => {
  x = val;
};
```

</details>

<details><summary>getter.js</summary>

```javascript

import { x } from './mainModule.js';

export const getX = () => x;

```

</details>

<details><summary>main.js</summary>

```javascript
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

### Closures in Loop

- We can create closures in loop also but there is concern , we should not use var in loops while creating closures because var will be hoisted and thus in loop if we create more than one closures they will share the same lexical environment and closures will not hold different values accordingly for different iterations.

<details><summary>Code Example Of Above Topic</summary>

```javascript
function showFieldSuggestion (fieldSuggestion) {
  document.getElementById('field_suggestion').textContent = fieldSuggestion;
}

function setupFieldsSuggestion() {
  const fields = [
    {
      id: "neural_networks", 
      fieldSuggestion: "You should explore Artificial Intelligence and Machine Learning!"
    },
    {
      id: "ethical_hacking", 
      fieldSuggestion: "You should consider the Cybersecurity field!"
    },
    {
      id: "responsive_design", 
      fieldSuggestion: "You should pursue Web Development!"
    }
];

  fields.forEach((field)=> {
    document.getElementById(field.id).isChecked = function () {
      showField (field.fieldSuggestion);
    }
  });

}

setupFieldsSuggestion();
```

</details>

### Performance Insights

- Although closures are very powerfull but if they are not used correctly , they can introduce performance issues and slower response of script.

#### Injecting Unnecessary Functions Inside Functions For a Common Task

- When creating new object/class using functions, injecting methods which will be common to all objects/classes would not be recommended.

- Methods should normally be associated to the object's prototype rather than defined into the object constructor. The reason is that whenever the constructor is called, the methods would get reassigned.

<details><summary>Code Example Of Above Topic</summary>

```javascript
function itemObj (name,message) {
  this.name = name.toString;
  this.message = message.toString;

  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}

```

</details>
<br />

- Instead we can inject these methods in object's prototype using closures, so that each can access these methods.

<details><summary>Code Example Of Above Topic</summary>

```javascript
function itemObj (name,message) {
  this.name = name.toString;
  this.message = message.toString;
}

itemObj.prototype.getName = function () {
    return this.name;
};
itemObj.prototype.getMessage = function () {
    return this.message;
};

```

</details>

