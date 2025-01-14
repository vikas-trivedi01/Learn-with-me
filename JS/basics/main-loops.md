# 1. Loops: for...in and for...of

## Introduction

- These are loops for iterating over objects, arrays, sets, maps, strings depending on use cases.
- Generally **for...in** is used with objects majorly and rarely with arrays. Whereas **for...of** is used with many iterables like strings, arrays, sets etc...

## Core Concepts

### **for...in**

- Used widely with objects . An object is a collection of key - value pairs. Thus it's not recommended to iterate an object via other loops.

```javascript
const cars = {
  carName: "Fortuner",
  color: "black",
};

for (let carProp in cars) {
  console.log(`${carProp} : ${cars[carProp]}`);
}
// outputs
// carName : Fortuner
// color : black
```

- Where cars is an object having two keys/properties 1. car name 2. color having respective values Fortuner and black.

- When the loop starts it iterates object's properties and at every iteration it references that particular property as <i>carProp</i> and that key's values can be accesed via <i>cars[carProp]</i>.

- At the end it logs everything in each iteration.

- Real world application : Used when working with objects like users' profiles and iterating each properties of a user and displaying it.

### **for...of**

- Used widely with arrays, sets, maps, strings . These iterable's values can be accessed using this loop.

```javascript
const cars = ["fortuner", "mustang", "rangerover"];

for (let carName in cars) {
  console.log(`Car name : ${carName}`);
}
// outputs
// Car name : fortuner
// Car name : mustang
// Car name : rangerover
```

- Where cars is an array having three values 1. fortuner 2. mustang 3. rangerover

- When the loop starts it iterates array's values and at every iteration it references that particular value as <i>carName</i>.

- At the end it logs everything in each iteration.

- Real world application : Used in apis to access each response field and display in UI.

## Conclusion
- for...in is key-based and works with objects.
- for...of is value-based and works with iterables.