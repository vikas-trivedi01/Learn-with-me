# Objects

Table Of Contents
- [Objects](#objects)
  - [Introduction](#introduction)
    - [Defining an Object](#defining-an-object)
      - [Object Literals](#object-literals)
      - [Object Constructor](#object-constructor)
      - [Object Prototype](#object-prototype)
    - [Operations of Object](#operations-of-object)
      - [Adding \& Modifying Properties](#adding--modifying-properties)
      - [Deleting Properties](#deleting-properties)
      - [Getters \& Setters](#getters--setters)
    - [Object Methods](#object-methods)
      - [Object.keys()](#objectkeys)
      - [Object.values()](#objectvalues)
      - [Object.entries()](#objectentries)
    - [Using with APIs](#using-with-apis)
    - [Prototypes](#prototypes)
    - [Using **Object.entries()** for optimized iterations](#using-objectentries-for-optimized-iterations)


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

### Operations of Object

  #### Adding & Modifying Properties
  ```Javascript
  const user = {
    age : 33,
  }
  user.name = "xyz";
  user.age = 34;

  console.log(user);

  // Ouputs
  // {name: 'xyz', age: 34}
  ```

  - Here the age property will be modified and name property will be added.
  
  #### Deleting Properties
  ```Javascript
  const user = {
    name : "xyz",
    age : 34,
  }
  console.log(user);

  // Ouputs
  // {name: 'xyz', age: 34}

  delete user.age;
  console.log(user);

  // Ouputs
  // {name: 'xyz'}
  ```

  - Here the age property will be modified and name property will be added.
  
  #### Getters & Setters
  - **Getters & Setters** are used to get the value of a existing property of an `Object` and set the value of a property of an `Object`.
  ```Javascript
  const user = {
    set userName(name) {
      this.name = name; 
    },
    get userName() {
      return this.name;
    }
  }

  user.userName = "xyz";
  console.log("Name is " + user.userName);
  
  // Ouputs
  // Name is xyz
  ```

### Object Methods

  #### Object.keys()
  - Returns arrays of all keys of an `Object`.
  ```Javascript
  const obj = {
    demoString : "demo",
    num : 134,
    anotherNum : 43,
  }

  console.log("All keys are")
  console.log(Object.keys(obj));
  // Ouputs
  // ['demoString', 'num', 'anotherNum']
  ```

  #### Object.values()
  - Returns arrays of all keys' values of an `Object`.
  ```Javascript
  const obj = {
    demoString : "demo",
    num : 134,
    anotherNum : 43,
  }

  console.log("All values are")
  console.log(Object.values(obj));
  // Ouputs
  //  ['demo', 134, 43]
  ```

  #### Object.entries()
  - Returns array of arrays having keys and values of an `Object`. 
  ```Javascript
  const obj = {
    demoString : "demo",
    num : 134,
    anotherNum : 43,
  }

  console.log("All entries are")
  console.log(Object.entries(obj));
  
  // Ouputs
  // [
  //    ['demoString', 'demo']
  //    ['num', 134]
  //    ['anotherNum', 43]
  // ]
  ```

### Using with APIs

- When getting repsponse from an API the data will be in **JSON** thus it should be converted in `Objects` to perform further operations.
```Javascript
async function fetchData() {
  const response = await fetch("api.example.com");
  const data = await response.json();
  console.log(data.name);
}
```

### Prototypes

- `Objects` can acts as a base class through which other `Objects` can inherit.
```Javascript 
const proto = {
  getName() {
    return this.name;
  },
}

const obj = Object.create(proto);
obj.name = "xyz";
console.log(obj.name);

// Outputs
// xyz
```

### Using **Object.entries()** for optimized iterations

```Javascript
const obj = {
  isLogged : false,
  userId : 123
}

Object.entries(obj).forEach(([userProp, userDetail] ) => {
  console.log(userProp, userDetail);
});

// Outputs
// isLogged false
// userld 123
```

- It provides faster retrievals of values and faster lookups.
