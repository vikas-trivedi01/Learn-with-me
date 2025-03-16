# Pure Functions

Table Of Contents
- [Pure Functions](#pure-functions)
  - [Introduction](#introduction)
    - [Characteristics](#characteristics)
    - [Example of **pure function**](#example-of-pure-function)
    - [Example of an **impure function**](#example-of-an-impure-function)
    - [Advantages of **pure functions**](#advantages-of-pure-functions)


## Introduction

- `Pure functions` are powerful functions and are part of functional programming.
- `Pure function` is a function
  - That produces same result for same input.
  - Doesn't modify external variables, databses or files etc.

### Characteristics

- **Deterministic** : Produces same result for same input
- **No side effects** : Doesn't modify external DOM, files, databases etc
- **Immutable** : Returns a copy of data and doesn't change the original data.

### Example of **pure function**

  ```Javascript
      function sum(a, b) {
          return a + b
      }

      console.log(sum(4, 3))
      console.log(sum(4, 3))

      // outputs
      // 7
      // 7
  ```
### Example of an **impure function**

  ```Javascript
      total = 0
      function increaseTotal(val) {
          total += val
          return total
      }

      console.log(increaseTotal(3))
      console.log(increaseTotal(3))

      // outputs
      // 3
      // 6
  ```

### Advantages of **pure functions**

- **optimizable** : **pure functions** can be easily optimized by JS engine.
- **predictable** : Output for same input is predictable.
- **less errors** : Because same input produces same output debugging becomes easy. 