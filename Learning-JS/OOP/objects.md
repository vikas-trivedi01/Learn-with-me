# Objects

Table Of Contents
- [Objects](#objects)
  - [Introduction](#introduction)
    - [Defining an Object](#defining-an-object)
      - [Object Literals](#object-literals)
      - [Object Constructor](#object-constructor)
      - [Object Prototype](#object-prototype)


## Introduction

- `Objects` are key-value pairs, providing data and behaviors to efficiently work with real world entities.
- Everything in **JavaScript** is an object.
- Because everything's **prototype** points to **Object.prototype**.

### Defining an Object

- There are atleast three ways to create an object.
  1. Object literals
  2. Object constructor
  3. Object prototype

  #### Object Literals
  - One of the highly used way to create `ojects`.
  ```Javascript
  const user = {
    name : "xyz",
    age : 34
  }

  console.log(user);

  // Ouputs
  // {name: 'xyz', age: 34}
  ```

  #### Object Constructor
  - It uses constructor of `Object` to create an `Object`.
  ```Javascript
  const user = new Object();

  user.name = "xyz";
  user.age = 34;

  console.log(user);

  // Ouputs
  // {name: 'xyz', age: 34}
  ```

  #### Object Prototype
  - It uses a **prototype object** and **Object.create()** to create an another `Object` from the existing one. 
  ```Javascript
  const userProto = {
    getName() {
      return this.name;
    },
    getAge() {
      return this.age;
    }
  }

  const user = Object.create(userProto);
  user.name = "xyz";
  user.age = 34;

  console.log("Name is " + user.getName());
  console.log("Age is " + user.getAge());

  // Ouputs
  // Name is xyz
  // Age is 34
  ```
