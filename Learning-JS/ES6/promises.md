# Promises

Table Of Contents
- [Promises](#promises)
  - [Introduction](#introduction)
    - [Define Promises](#define-promises)
    - [Buliding Blocks for Promises](#buliding-blocks-for-promises)
      - [Construcing a Promise](#construcing-a-promise)
      - [**resolve()** \& **reject()** methods](#resolve--reject-methods)
      - [**then()** \& **catch()** methods](#then--catch-methods)



## Introduction

- Just like real life, in **JavaScript** `promises` is used to make a <i>promise</i> for an asynchronous task.
  
### Define Promises

- `Promise` is a placeholder / proxy for a value which will be known in future.
- `Promise` is an object representing eventual completion or failure of an asynchronous task.
- `Promises` allows us to attach handlers to asynchronous operations, thus shadowing behavior like methods to return value.

### Buliding Blocks for Promises

1. Construcing a `Promise`
2. **resolve()** & **reject()** methods
3. **then()** & **catch()** methods
4. `Promise`'s states
5. Promise Api's **all()** & **allSettled** methods
6. Promise Chaining

- Above list items are kind of **Buliding Blocks** for `Promises`.
  
#### Construcing a Promise
- `Promises` can be created by using **new Promise()** constructor.
- The `Promise` constructor takes a function called **executor** which takes two method as parameters : **resolve** and **reject**.

```Javascript
const promiseDemo = new Promise((resolve,reject) => {
  let hasErrors = false;

  if(!hasErrors) {
    resolve("Successful execution");
  }
  else {
    reject("Failed to execute");
  }
});

promiseDemo.then((msg) => console.log(msg));
promiseDemo.catch((err) => console.log(err));
promiseDemo.finally(() => console.log("All done"));

// Outputs

// Successful execution
// All done

// if 'hasErrors' set to true 

// Outputs

// Failed to execute
// All done
```

- `Promise`'s **Prototype** belongs to, **Promise.prototype** Object.
- `Promise` has a property called **PromiseState**, which indicates current state of a `Promise`.
- `Promise` has another property called **PromiseResult**, which indicates result / value returned by `Promise`.


#### **resolve()** & **reject()** methods

- These methods are used to fulfill or reject a `Promise`.
- They are used to indicate fulfillment or rejection state of a `Promise`.
- When **resolve()** is called and arguments passed to it, forms a promise which is passed to **then()** method.
- When **reject()** is called and arguments passed to it, forms a promise which is passed to **catch()** method.
  
```Javascript
new Promise((resolve, reject) => {
  let resultStatus = 200;

  if(resultStatus !== 404) {
    resolve("Fetched Successfully");
  }
  else {
    reject(new Error("Operation Failed"));
  }
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error.message);
});

// Outputs
// Fetched Successfully

// if resultStatus is 404 then

// Outputs
// Operation Failed

```

#### **then()** & **catch()** methods

- These methods are associated with **resolve()** and **reject()** outcomes.
- When a Promise is resolved using **resolve()**, the result is passed as an argument to the **then()** method.
- Similarly, when a `Promise` is rejected using **reject()**, the error is passed as an argument to the **catch()** method.