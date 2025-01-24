# Classes

Table Of Contents
- [Classes](#classes)
  - [Introduction](#introduction)
    - [Overview Of Classes](#overview-of-classes)
    - [Define a Class](#define-a-class)



## Introduction

- Often, **inheritance** is required in softwares, this can be done by `classes`.
- Introduced in <i> ES6 </i>.
- Used as alternative of `prototypes`.

### Overview Of Classes

- `Class` is used for design and implementation of data.
- `Class` includes methods, varibles etc..

### Define a Class

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