# Promises

Table Of Contents
- [Promises](#promises)
  - [Introduction](#introduction)
    - [Define Promises](#define-promises)
      - [Construcing a Promise](#construcing-a-promise)



## Introduction

- Just like real life, in **JavaScript** `promises` is used to make a <i>promise</i> for an asynchronous task.
  
### Define Promises

- `Promise` is a placeholder / proxy for a value which will be known in future.
- `Promise` is an object representing eventual completion or failure of an asynchronous task.
- `Promises` allows us to attach handlers to asynchronous operations, thus shadowing behavior like methods to return value.

#### Construcing a Promise
- `Promises` can be created by using **new** and **Promise()**(`Promise` constructor).
- The `Promise` constructor takes a function called **executor** which takes two function as parameters.

```Javascript
const promiseDemo = new Promise((resolve,reject) => {
  let hasErrors = false;

  if(!hasErrors) {
    resolve("Successful execution");
  }
  else {
    reject();
  }
});

promiseDemo.then((msg) => console.log(msg));
promiseDemo.catch(() => console.log("Error"));
promiseDemo.finally(() => console.log("All done"));

// Outputs

// Successful execution
// All done
```

- `Promise`'s **Prototype** belongs to, **Promise** Object.
- `Promise` has a property called **PromiseState**, which indicates current state of a `Promise`.
- `Promise` has another property called **PromiseResult**, which indicates result / value returned by `Promise`.
