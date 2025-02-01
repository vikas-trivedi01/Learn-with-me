# Promises

Table Of Contents
- [Promises](#promises)
  - [Introduction](#introduction)
    - [Define Promises](#define-promises)
    - [Buliding Blocks for Promises](#buliding-blocks-for-promises)
      - [Construcing a Promise](#construcing-a-promise)
      - [**resolve()** \& **reject()** methods](#resolve--reject-methods)
      - [**then()** \& **catch()** \& **finally()** methods](#then--catch--finally-methods)



## Introduction

- Just like real life, in **JavaScript** `promises` is used to make a <i>promise</i> for an asynchronous task.
- There are two types of ways we can see a code written using `Promises`.
  1. Producing Code
  2. Consuming Code

```Javascript
let myPromise = new Promise((resolve, reject) => {
  // tasks to be performed to return results as promise
}).then(()=> {
  // tasks depending on result's success of promise
}).catch(()=> {
  // tasks depending on result's failure of promise
})
```

- Here when **new Promise()** is used tp form a `Promise`, having a **executer** function which acts as a messanger between tasks which are promised(asynchronous code) and tasks dependent on results of promised tasks.
  
- Tasks performed in executer function are part of **Producing Code**, wich produces results for **Consuming Code**.
  
- Result returned as `Promise` from executer function are part of **Consuming Code**, which consumes `Promise` from **Producing Code**.
  
- `Promise` object has some properties..
  1. `[[PromiseState]]`

  - `Promises` have 3 main states :
  -  **fulfilled** : `Promise` is **resolved** successfully with a value/message.
  -  **pending** : `Promise` is **pending** and not **resolved** or **rejected**.
  -  **rejected** : `Promise` is **rejected** with a error or `Promise` is failed to **resolve**.
  -  One extra state is **settled** : `Promise` is either **fulfilled** or **rejected**.
  
  2. `[[PromiseResult]]`

  - Represents result returned by `Promise`.
  
### Define Promises

- `Promise` is a placeholder / proxy for a value which will be known in future.
- `Promise` is an object representing eventual completion or failure of an asynchronous task.
- `Promises` allows us to attach handlers to asynchronous operations, thus shadowing behavior like methods to return value.

### Buliding Blocks for Promises

1. Construcing a `Promise`
2. **resolve()** & **reject()** methods
3. **then()** & **catch()** methods
4. **async** & **await** 
5. Promise Api's **all()** & **allSettled** methods
6. Promise Chaining

- Above list items are kind of **Buliding Blocks** for `Promises`.
  
#### Construcing a Promise
- `Promises` can be created by using **new Promise()** constructor.
- The `Promise` constructor takes a function called **executor** which takes two method as parameters which are provided by JavaScript and are callbacks
- **resolve** and **reject**.
 
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

- These are callbacks, automatically provided by **JavaScript**.
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

#### **then()** & **catch()** & **finally()** methods

- These methods are associated with **resolve()** and **reject()** outcomes.
- When a Promise is resolved using **resolve()**, the result is passed as an argument to the **then()** method.
- Similarly, when a `Promise` is rejected using **reject()**, the error is passed as an argument to the **catch()** method.
  
   ---
- **finally()**
  - It is different from other two methods.
  - It executes everytime doesn't matter whether a `Promise` **resolved** or **rejected**.
  - It is used for finalizing common, clean up tasks.
  - It tell whether the `Promise` is done executing or not.
  - It doesn't return any values except, an **Error** occured, in that case it passes that error to the   closet error handler.
  - It passes the values received from the promise to next handler, rather than accepting them.
  - Meaning it doesn't accepts any arguments.
- Example

```Javascript 
  new Promise((resolve, reject) => {
    let value = Math.floor(Math.random()*10);
    if(value > 18) {
      resolve("You are eligible to vote");
    }
    else {
      reject(new Error("You must be greater than 18 to vote"));
    }
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`Error : ${error.message}`);
  })
  .finally(() => {
    console.log("Have a good day !");
  })
  ```

- Outputs
  - If code generates value like 10, output will be
    - You must be greater than 18 to vote
    - Have a good day !
  - If code generates value like 51, output will be
    - You are eligible to vote
    - Have a good day !
  
  - Notice that the **finally** always runs.


