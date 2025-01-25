# Classes

Table Of Contents
- [Classes](#classes)
  - [Introduction](#introduction)
    - [Overview Of Classes](#overview-of-classes)
    - [Define a Class](#define-a-class)
    - [Inheritance Of Classes](#inheritance-of-classes)
    - [Static and Private fields](#static-and-private-fields)



## Introduction

- Often, **inheritance** is required in softwares, this can be done by `classes`.
- Introduced in <i> ES6 </i>.
- Used as alternative of `prototypes`.

### Overview Of Classes

- `Class` is used for design and implementation of data.
- `Class` includes methods, varibles etc..

### Define a Class

- `Class` can include methods and variables.
- `Class` can also include **constructors**.(i.e) - methods to construct the object of that class, with some initial / common values.
- **new** keyword is used to instantiate the class.
  
```Javascript
class Demo {
  constructor(value) {
    this.var = value;
  }

  method() {
    console.log(`This is variable value : ${this.var} using method of class`);
  }
}

const demoObj = new Demo(10);
demoObj.method();

// Outputs
// This is variable value : 10 using method of class
```

### Inheritance Of Classes

```Javascript

class Parent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    parentMethod() {
        console.log(`This is variable values : ${this.x} & ${this.y} using method of parent class`);
    }
}
class Child extends Parent {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    childMethod() {
        console.log(`This is variable value of child class: ${this.z}`);
    }
}

const parentObject = new Parent(10, 20);
const childObject = new Child(10, 20, 30);

parentObject.parentMethod();
childObject.parentMethod();
childObject.childMethod();

// Outputs
// This is variable values : 10 & 20 using method of parent class
// This is variable values : 10 & 20 using method of parent class ==  supere()
// This is variable value of child class: 30
```

### Static and Private fields

1. Static
- **static** methods are common to all objects of a class.
- It belongs to class, not the instances.
  
```Javascript
class Demo {
  static calculate(a, b, c) {
    return a + b - c ;
  };
}

console.log(Demo.calculate(10,20,5));

// Outputs
// 25
```

2. Private
- **Private** variables are used to encapsulate data withing a class.
- They are prefixed with `#`.
  
```Javascript
class Demo {
    #private = 10;
     accessPrivate() {
      return this.#private;
    }
  }
  
  const obj = new Demo();
  console.log(obj.accessPrivate());

// Outputs 
// 10
```