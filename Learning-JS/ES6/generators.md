Z# Generators

Table Of Contents
- [Introduction](#introduction)
  - [Defining Generator Function](#defining-generator-function)
  - [Generator Functions with Loops](#generator-functions-with-loops)
  - [Passing Values To Generator Functions](#passing-values-to-generator-functions)
  - [Infinite Loop Counter Using Generator Functions](#infinite-loop-counter-using-generator-functions)
  - [Generator Delegation](#generator-delegation)
  - [Return in Generator Functions](#return-in-generator-functions)
  - [Using With APIs](#using-with-apis)
  - [Reading File](#reading-file)
  - [Real World Example](#real-world-example)


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
    console.log(`All yield statements are executed :  ${JSON.stringify(generate.next())}`);

    // Outputs

    // First Generator yield executed : {"value" : "Generator" , "done" : false}

    // Second Generator yield executed : {"value" : "Function" , "done" : false}

    // All yield statements are executed : {"value" : "undefined" , "done" : true}
```

- Here the **yield** statements are executed when **next()** is used.
- It returns an object having two properties.
  1. **value** 
     - Indicates what the **yield** statement has returned.
     - When all **yield** are over it's value will be **undefined**.
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

### Return in Generator Functions

- When **return** statement is encountered control directly jumps to calling point of function.
- Thus the statements after **return** statement are ignored.

```Javascript
function* returnExample() {
  yield "Statement one";
  return "Statement two(return executed)" ;
  yield "Statement three";
}

const getReturn = returnExample();

console.log(getReturn.next().value);
console.log(getReturn.next().value);
console.log(getReturn.next().value);

// Outputs

// Statement one
// Statement two(return executed)
// undefined
```

- Here <i>Statement three</i> will never be executed.

### Using With APIs

- `Generator Functions` can be used with <i>APIs</i> to perform step wise tasks.

```Javascript
async function* getPages(url) {
  
  let page = 1;

  while(true) {
  const response = await fetch(`${url}?page=${page}`);
  const data = await response.json();

  if(data.length === 0) {
    break;
  }

  yield data;
  page++;

}

(async () => {
  const pages = getPages("https://api.example.com");

  for await (let page of pages) {
    console.log(page);
  }
})();
```

### Reading File

```Javascript
async function* readFile(file) {
  const reader = file.stream().getReader();

  while(true) {
    const {done, value} = await reader.read();

    if(done) break;
    yield value;
  }

}
```

### Real World Example

```Javascript
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

let newformat = hours >= 12 ? "PM" : "AM";

hours = hours % 12;

hours = hours ? hours : 12;
minutes = minutes < 10 ? "0" + minutes : minutes;

function* chat(c) {
    yield c;
}
document.getElementById("b1").addEventListener("click", () => {

    let c = chat(
          `<div class='container'><p>Person One</p><p id='sender-msg'>${document.getElementById("p1").value
          }<br><span class='t'>
            ${hours + ":" + minutes + " " + newformat}
            </span></p></div>`
    );
    document.getElementById("chat-msg").innerHTML += c.next().value;
    document.getElementById("p1").value = "";
});

document.getElementById("b2").addEventListener("click", () => {

    let c = chat(
          `<div class='container'><p style=' margin-left: 700px;'>Person Two</p><p id='receiver-msg'>${document.getElementById("p2").value
          }<br><span class='t'>
            ${hours + ":" + minutes + " " + newformat}
            </span></p></div>`
    );

    document.getElementById("chat-msg").innerHTML += c.next().value;
    document.getElementById("p2").value = "";
});

```

