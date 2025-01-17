# Scopes

Table Of Contents
- [Scopes](#scopes)
  - [Introduction](#introduction)
  - [Core Concepts](#core-concepts)
    - [Drawbacks](#drawbacks)
  - [Advance Insights](#advance-insights)
    - [Closures with block scope](#closures-with-block-scope)
  - [Conclusion](#conclusion)


## Introduction

- Scope refers to current context of code.
- It shows accessibility of a variable and function etc.
- It ensures we correctly access different variables and function etc.
- Understanding scopes is necessary to control visibility of different variables and functions and avoiding conflicts.

## Core Concepts

- There are majorly three types of scopes:

1. Global Scope
2. Local / Function Scope
3. Block Scope

---

1. Global Scope

- Variables outside functions are known as global scope variables.
- All variables present inside this scope can be easily accessed across whole codebase.
- Modifieable from any part of the codebase.

2. Local / Function Scope

- Variables inside functions are treated as local / function Scope.
- All variables present inside this scope can be accessed across that particular function only.

3. Block Scope

- Variables declared with **let** or **const** inside a block is known as block scope.
- All variables present inside this scope can be only accessed in that particular block.

---

<details><summary> Examples </summary>

1. Global Scope

```javascript
let x = 10;

function printX() {
    console.log(`Value of x is ${x}`); // Outputs Value of x is 10
}

printX();

```

2. Local / Function Scope

```javascript

function printX() {
    let x = 10;
    console.log(`Value of x is ${x}`); // Outputs Value of x is 10
}

printX();

console.log(`Value of x is ${x}`); // Outputs ReferenceError

```

3. Block Scope

```javascript

if (true) {
    let x = 10;
    console.log(`Value of x is ${x}`); // Outputs Value of x is 10
}
console.log(`Value of x is ${x}`); // Outputs ReferenceError

```

</details>

### Drawbacks

- Scope provides many facilities but some scopes like , Global scope or ... will create issues if multiple scripts are present and there will be many global variables then there are chances to overwrite or get ambiguos values.

- Such problems can be solved by creating local scopes using **IIFE** by encapsulating related global variables toghether.

- **Temporal Dead Zone (TDZ)** : Variables declared as <i>let</i> or <i>const</i> are in temporal dead zone from starting of block scope until initialization encountered. However, this prevents accessing them before declaration, unlike var which gets hoisted and initialized to undefined.

## Advance Insights

- Scope is a widely used in **lexical scoping** and **closures**.

- where **lexical** means where actually variables are present in scopes of codebase.

<details><summary> Code Example Of Above Topic </summary>

```javascript
function parent(arg) {
    let parentVariable = 10;

    function child() {
        console.log(`value of parent's argument ${arg}`);

        console.log(`value of parent's local variable ${parentVariable}`);
    }

    child();
}

parent(5);

//Outputs

//value of parent's argument 5
//value of parent's local variable 10
```

</details>

---
### Closures with block scope

- Closures can be used with block scope variables to treat variables as private, thus making layer of encapsulation.

```javascript

function createCounter() {
    let count = 0; // private variable

    // closure
    return { 
            // public methods as properties

            increment : () => ++count,
            
            decrement : () => --count,
    
    };

}

const counter = createCounter();

console.log(`Counter current value : ${counter.increment()}`); // Outputs Counter current value : 1
console.log(`Counter current value : ${counter.increment()}`); // Outputs Counter current value : 2
console.log(`Counter current value : ${counter.decrement()}`); // Outputs Counter current value : 1

```
## Conclusion

- javascript's scope is one of the weakness of ES6, but after ES6 introduction to **let** or **const** facilitated block scoped variables.

- Scopes provide flexibility and accessibility of how we can declare, manipulate variables.

- Understanding it would let to a cleaner and maintainable code by defining related local, global variables togher.
