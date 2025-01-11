# This

## Introduction

- `this` keyword refers to current context upon which a function is called.

- Where `this` points to which value will be determined on basis of <i>HOW</i> the function was called, not basis of <i>WHERE</i> the function was defined or called from.

- `this` is highly used with objects in JS.

- `this` behaves differently in different situation, (<i>i.e</i>) - It behaves differently in **Nodejs, Browser** environment, in different scopes, in **strict** and **non - strict** mode.

- `this` heavily depends on <i>current context</i>.

- Current context can be defined as - to which reference the `this` is associated with.

## Core Concepts

### Basic Example

```Javascript

const obj = {
    x : 10,
    y : 20,
    printThis : function() {
        console.log("Value of 'this' is");
        console.log(JSON.stringify(this));
    }
};

obj.printThis();

// Outputs
// Value of 'this' is
// {"x":10,"y":20}


```

- Here <i>printThis()</i> is a **this - aware** function.(<i>i.e</i>) - It contains `this` in it.

- Output shows that `this` in <i>printThis()</i> refers to <i>obj</i> because at call-site the <i>printThis()</i> was invoked with reference to <i>obj</i>.

### Weird Thing

- `this` is so unpredictable. It refers to what , depends on execution and current context, how function was called.

#### Global Context

1. Using **non - strict** mode

- In this mode, `this substitution` happens.
- i.e - value of `this` will be get replaced by **global object** of the execution context.

- In Browser :

```Javascript
console.log(this); // Outputs window object
```

- In Nodejs :

```Javascript
console.log(this); // Outputs global object
```

2. Using **strict** mode

- In this mode, `this substitution` will not happen.
- In Both Browser and Nodejs:
- `this` is **undefined** in the global context.

```Javascript
'use strict';
console.log(this); // undefined
```

#### Inside Functions

- Everything remains same as **Global Context**.

1. Using **non - strict** mode

- In this mode, `this substitution` happens.

- In Browser :

```Javascript
function test() {
    console.log(this); // Outputs window object
}

test();
```

- In Nodejs :

```Javascript
function test() {
    console.log(this); // Outputs global object
}

test();
```

2. Using **strict** mode

- In this mode, `this substitution` will not happen.
- In Both Browser and Nodejs:
- `this` is **undefined** in the global context.

```Javascript
'use strict';
function test() {
    console.log(this); // undefined
}

test();
```

#### Inside Method of an Object

- `this` refers to the object the method was called on. no matter whether `this` is in , **non - strict or strict** mode or in **Browser or Nodejs**.

```Javascript

const obj = {
    method : function test() {
        console.log(this); // Outputs object itself
    }
};

obj.method();
```

#### Arrow Functions

- Arrow functions do not have their own `this` reference , they inherit `this` from enclosing lexical context.

```Javascript

const obj = {

    method : () => {
        console.log(this); // Outputs In browser : window and in Nodejs : global
    }
};

obj.method();

```

#### Class Methods

- In class's method `this` refers to the class's instance.

```Javascript

class myClass {
    constuctor() {
        this.value = 19;
    }

    method() {
        console.log(this); // Outputs myClass's instance(obj)
    }
}

const obj = new myClass();
obj.method();

```
