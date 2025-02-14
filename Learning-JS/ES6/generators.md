Z# Generators

Table Of Contents
- [Introduction](#introduction)
  - [Defining Generator Function](#defining-generator-function)


## Introduction

- `Generators` are special type of functions, which are not executed directly, instead executed each time **next()** is used to invoke `Generator Function`.


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
     - otherwise returns <i>true</i> when the `Generator Function` is finished, meaning all **yield** statements are over. 
- Thus if we want only result returned by **yield** statement then below can be done.
  - <i>generate.next().value</i>