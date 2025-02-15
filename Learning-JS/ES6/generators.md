Z# Generators

Table Of Contents
- [Introduction](#introduction)
  - [Defining Generator Function](#defining-generator-function)
  - [Generator Functions with Loops](#generator-functions-with-loops)
  - [Passing Values To Generator Functions](#passing-values-to-generator-functions)
  - [Infinite Loop Counter Using Generator Functions](#infinite-loop-counter-using-generator-functions)
  - [Generator Delegation](#generator-delegation)


## Introduction

- `Generators` are special type of functions, which are not executed directly, instead executed each time **next()** is used to invoke `Generator Function`.
- Highly used for processing large datasets and generating sequences.
  
### Defining Generator Function

- `Generator Function` can be defined using **function\*** syntax and **yield** keyword.

```Javascript
    function* generatorFunction() {
        yield "Generator";
        yield "Function";
    }

    const generate = generatorFunction();

    console.log(`First Generator yield executed : ${JSON.stringify(generate.next())}`);
    console.log(`Second Generator yield executed : ${JSON.stringify(generate.next())}`);

    // Outputs

    // First Generator yield executed : {"value" : "Generator" , "done" : false}

    // Second Generator yield executed : {"value" : " Function" , "done" : false}
```

- Here the **yield** statements are executed when **next()** is used.
- It returns an object having two properties.
  1. **value** 
     - Indicates what the **yield** statement has returned.
  2. **done** 
     - Returns <i>false</i>, if there are still remaining statements in a  `Generator Function`,
     - Otherwise returns <i>true</i> when the `Generator Function` is finished, meaning all **yield** statements are over. 
- Thus if we want only result returned by **yield** statement then below can be done.
  - <i>generate.next().value</i>

###  Generator Functions with Loops

```Javascript

function* counter() {
  for(let i=1;i<=3;i++) {
    yield i;
  }
}

let colletion = counter();

for (let num of colletion) {
  console.log(`Number is ${num}`);
}

// Outputs
// Number is 1
// Number is 2
// Number is 3
```
- The **for...of** loop automatically calls next() on each iteration.
- It stops when done: true.

###  Passing Values To Generator Functions

```Javascript
function* sayHello() {
  const name = yield "What is your name";
  yield `Hello ${name}`;
}

const greeter = sayHello();

console.log(greeter.next().value);
console.log(greeter.next("xyz").value);

// Outputs
// What is your name
// Hello xyz
```

### Infinite Loop Counter Using Generator Functions

```Javascript
function* generateCounts() {
  let num = 1;
  while(true) {
    yield num++;
  }
}

const counter = generateCounts();

for (let num  of counter) {
  console.log(num);
}

// Outputs an infinite number counter
```

### Generator Delegation

- One `Generator Function` can call / pass control to another `Generator Function`.

```Javascript
function* delegation() {
  yield "Delegated";
}
function* delegationExample() {
  yield "Doing delegation";
  yield* delegation();
  yield "Done delegation";
}

const delegate = delegationExample();

console.log(delegate.next().value);
console.log(delegate.next().value);
console.log(delegate.next().value);

// Outputs
// Doing delegation
// Delegated
// Done delegation
```