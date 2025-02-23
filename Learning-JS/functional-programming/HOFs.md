# Higher Order Functions

Table Of Contents
- [Higher Order Functions](#higher-order-functions)
  - [Introduction](#introduction)
    - [Function with Functions as arguments](#function-with-functions-as-arguments)
    - [Function with Returning a Function](#function-with-returning-a-function)


## Introduction

- `Higher-order function` can be defined as function which either take one or more functions as arguments like callbacks or return function from it like closures.
- It helps in providing more flexibility.
- Can be used to create specialized functions.

### Function with Functions as arguments

```Javascript
function startTask() {
    console.log("Starting task processing...");
}
function processTask() {
    console.log("Task processing...");
}
function endTask() {
    console.log("Ending task processing...");
}
function handleTask(startTask, processTask, endTask) {
    startTask();
    processTask();
    endTask();
}

handleTask(startTask, processTask, endTask);
```

### Function with Returning a Function
- Suppose API will return this data
```Javascript

async function fetchUsersData(url) {
    const response = await fetch(url);
    const data = await response.json();
  
    return function(userId) {
        return data.filter(user => user.id === userId);
    };
}

(async () => {
    const getUserProfileById = await fetchUsersData("https://jsonplaceholder.typicode.com/users");
    console.log(`User profile:`, getUserProfileById(2)); 
})();
```