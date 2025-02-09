# Promises

Table Of Contents
- [Promises](#promises)
  - [Introduction](#introduction)
    - [Define Promises](#define-promises)
    - [Buliding Blocks for Promises](#buliding-blocks-for-promises)
      - [Construcing a Promise](#construcing-a-promise)
      - [**resolve()** \& **reject()** methods](#resolve--reject-methods)
      - [Promise Handlers](#promise-handlers)
      - [Promise Combinators](#promise-combinators)
      - [Promise Chaining](#promise-chaining)
      - [Error Handling Insights](#error-handling-insights)
    - [Use Cases Of `Promises`](#use-cases-of-promises)
    - [Real world example](#real-world-example)



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
3. Promise Handlers
   1. **then()**
   2. **catch()**
   3. **finally()**
   4. **async** & **await** with **try - catch block**
4. Error Handling
5. Promise Combinators 
   1. **all()**
   2. **allSettled**
   3. **race()**
6. Promise Chaining

- Above list items are kind of **Buliding Blocks** for `Promises`.
  
#### Construcing a Promise
- `Promises` can be created by using **new Promise()** constructor.
- The `Promise` constructor takes a function called **executor** which takes two method as parameters which are provided by JavaScript and are callbacks :
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

- All `Promises` inherit from `Promise.prototype`, which provides methods like **then(), catch(), and finally()**.
- `Promise` has a property called **PromiseState**, which indicates current state of a `Promise`.
- `Promise` has another property called **PromiseResult**, which indicates result / value returned by `Promise`.
- **PromiseState** and **PromiseResult** are internal properties, not accessible directly in JavaScript.
- They can't be accessed like : **promise**.**PromiseState**.


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

#### Promise Handlers

1. **then()** 
2. **catch()**
3. **finally()** 

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
  - It doesn't modify return value.
  
- Example

```Javascript 
  new Promise((resolve, reject) => {
    let value = Math.floor(Math.random()*100);
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


1. **async** & **await** with **try - catch block**

   - This is another way to handle a `Promise`.
   - Often, `Promises` are used to perform some asynchronous tasks.
   - Thus **async** & **await** are highly used to perform those tasks using `Promises`.
   - When a functions has **async** attached with it, function can use **await**.
   - **async** indicates that code block / function is used to perform asynchronous tasks.
   - **await** indicates that until the statement prefixed with it, didn't gets executed fully with result,  dont let the program control move ahead.
   - There is a twist, using **async** & **await**, errors can't be handled gracefully, if **try - catch block** is not used.
   - Thus **try - catch block** is used to handle errors also when using **async** & **await**.
     
- Example
- 
  ```Javascript
  const asynchronous = new Promise((resolve, reject) => {
    let errors = false;
    if(!errors) {
      setTimeout(() => {
        resolve("Usage of async & await");
      }, 2000);
    }  
    else {
        reject(new Error("Failed to execute !"));
    }
  });

  async function consumeAsynchronous() {
    try {
      let result = await asynchronous;
      console.log(result);
    }
    catch (error) {
      console.log(`Error : ${error.message}`);
    }
  }
  consumeAsynchronous();
  ```

    - Here we used **try - catch block** when using **async** & **await**, handle errors gracefully also from the function <i>consumeAsynchronous</i>.

#### Promise Combinators 

   1. **all()**
   2. **allSettled()**
   3. **race()**

1. **all()**
  - It is a static method of class `Promise`  which return a new `Promise`, which resolves when given iterable(usually array of `Promises`)'s all the `Promises` are resolved.
  - It takes array of `Promises` as argument.
  - If any `Promise` is rejected entire `Promise.all()` rejeects with that error immediately.

```Javascript
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  },1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  },2000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 3 seconds");
  },3000);
});

Promise.all([p1, p2, p3])
.then( msg => console.log(msg))
.catch( error => console.log(error))

// Outputs
// 0: "Resolved after 1 second"
// 1: "Resolved after 2 seconds"
// 2: "Resolved after 3 seconds"
```

- Another example is lets say we have a platform where users are logging in simultaneously and we gathered their names to get their profiles from the server and then after fetching their details we display it, this can be done by **.all()** because here we need paralled processing, all users are fetched at same time.
  
```Javascript
let userProfilesRequested = ["ivey", "takeo", "roland"];

let requests = userProfilesRequested.map(user => fetch(`https://api.github.com/users/${user}`));

Promise.all(requests)
  .then(responses => {
    responses.forEach(response => {
      console.log(`${response.url} & ${response.status}`);
    });

    return Promise.all(responses.map(response => response.json()));
  })
  .then(users => {
    users.forEach(user => {
      console.log(`${user.login} has starred ${user.starred_url}`);
    });
  })
  .catch(error => console.error("Error fetching user data:", error));

```
- Output
![Promise.all example output](/img/promise-all.png)

1. **allSettled()**
  - It is a static method of class `Promise` which waits till all the `Promises` are settled(either resolve or rejected).
  - It takes array of `Promises` as argument.
  - Returns each `Promise`'s status(which is state) and reason(if rejected) or value(if fulfilled).
  - It never throws error, thus no catch callback required.
  
```Javascript
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  },1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    reject(new Error("Rejected after 2 seconds"));
  },2000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 3 seconds");
  },3000);
});

Promise.allSettled([p1, p2, p3])
.then( msg =>  console.log(msg))
.catch(error => console.log(error));

// Outputs
// 0: {status: 'fulfilled', value: 'Resolved after 1 second'}
// 1: {status: 'rejected', reason: Error: Rejected after 2 seconds at <anonymous>:9:12}
// 2: {status: 'fulfilled', value: 'Resolved after 3 seconds'}
```

3. **race()**
  - It is a static method of class `Promise` which returns output of that `Promise` which is settled first, out of given array of `Promises`.
  - It takes array of `Promises` as argument.
  - It returns the first settled promise, whether fulfilled or rejected.
 
```Javascript
const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  },1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  },2000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Resolved after 3 seconds");
  },3000);
});

Promise.race([p1, p2, p3]).
then( msg => console.log(msg));

// Outputs
// "Resolved after 1 second"
```

#### Promise Chaining

- When there is a need to perform more than one asynchronous tasks back to back, each subsequent operations executes after previous's execution and using it's result.
- This is solution for **callback hell**.

```Javascript
    new Promise((resolve, reject) => {
    let value = Math.floor(Math.random()*100);
    console.log(`Age is ${value}`);
    if(value > 18) {
      resolve("You are eligible to vote");
    }
    else {
      reject(new Error("You must be greater than 18 to vote"));
    }
  })
  .then((result) => {
    return `Message : ${result}`;
  })
  .then((previousResult) => {
    return `System responded with result =  ${previousResult}!\n`;
  })
  .then((previousResult) => {
    console.log(`${previousResult} - You can leave this place now.\n - Have a goood day`);
  })
  .catch((error) => {
    console.log(`Error : ${error.message}`);
  })

```
- Outputs
   1. Age is 19
      System responded with result =  Message : You are eligible to vote!
      - You can leave this place now.
      - Have a goood day
   2. Age is 2
     Error : You must be greater than 18 to vote

- Explanation
  - If the age will be greater than 18.
    - Here the first **.then()** will receive **You are eligible to vote** and it will return **Message : You are eligible to vote**.
    - The second **.then()** will receive **Message : You are eligible to vote** and it will return **System responded with result = Message : You are eligible to vote!**.
    - The third **.then()** will receive **System responded with result = Message : You are eligible to vote!** and it will print to console **System responded with result = Message : You are eligible to vote!  - You can leave this place now.\n - Have a goood day**.

  - If the age will be less than 18 then the catch block will be executed.
  

- Thenables
  - Notice there is **return** at every **.then()**, at that point implicitly everytime a new `Promise` created and **resolved** with the value returned by that **.then()**.
  - Actually its not perfect `Promise` object, its an arbitrary object called **thenable** object, which has method **then()** providing functionalities as `Promise`.

#### Error Handling Insights

- While using `Promises`, there may be sometimes that the asynchronous operation fails, to handle it as discussed earlier **catch()** is used.
- The **catch()** method catches errors as well as abnormal declarations/callings of functions, variables etc.
- Example of simple **catch()**
```Javascript
new Promise( /**/ )
.then()
.catch(err => console.log(err));
```
- Here if the `Promise` encounters an error or **then()** throws an error, as closest error handler is only one , that catch handler should handle the error.

- What if the, that error handler doesn't know how to handle that error, in this case next closest handler will be passed with error to handle this error.

```Javascript
new Promise( (_, reject) => reject(new Error("error happend")))
.then()
.catch(err => throw err)
.then() (*)
.catch(err2 => console.log(err2));
```

- Note that here if the error will be generated, it will be first passed to first **catch()**, it doesn't know how to handle it so it will pass it to next error handler thus the line with **(*)** will never be executed when error will be passed to second **catch()**.

- What if no error handlers are provided like below.

```Javascript
new Promise( (_, reject) => reject(new Error("error happend")));
```

- In this case `Promise` will be in rejected and in **rejected** state.
- To handle this kind of situation where we have not handled and error.
- We have unhandledrejection event, which is triggered when there are errors which forms global errors and are unhandled.

```Javascript
window.addEventListener("unhandledrejection", function(event) {
  console.log(`failure occured in promise ${event.promise} `);
  console.log(`failure reason ${event.reason} `);
});
```

- Notice **event.promise & event.reason** are wriiten, which are special properties that **event** object has for the `Promise` which is generated the error and the reason for it.

### Use Cases Of `Promises`

- `Promises` are highly used in performing asynchronous tasks.
- Like fetching user details from database.
- Network calls.
- API calls.
- Delayed execution of code.

### Real world example

```Javascript
  fetch("user.json")
    .then(response => response.json())
    .then(userData => {
        if (!userData.name) {
            throw new Error("User name not found in JSON");
        }
        return fetch(`https://api.github.com/users/${userData.name}`);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(githubUser => {
        return new Promise((resolve, reject) => {
            let img = document.createElement("img");
            img.src = githubUser.avatar_url;
            document.body.append(img);

            setTimeout(() => {
                try {
                    img.remove();
                    resolve("Image removed successfully");
                } catch (err) {
                    reject(new Error(err));
                }
            }, 2000);
        });
    })
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error.message));
```

  - This code will get the user from the file <i>user.json</i>
  - After that from the user name extracted and fetch the user's image from <i>github api</i>
  - Append the dom and after 2 seconds remove the image.