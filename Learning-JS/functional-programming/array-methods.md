# Array Methods

Table Of Contents
- [Array Methods](#array-methods)
  - [Introduction](#introduction)
    - [Concepts to Learn](#concepts-to-learn)
    - [Basic Methods](#basic-methods)
      - [length](#length)
      - [at()](#at)
      - [concat()](#concat)
      - [entries()](#entries)


## Introduction

- Array is powerful concept in **JavaScript** to form ordered collection of data under a single name.

### Concepts to Learn

![array methods](../img/array-methods.png)

### Basic Methods

   #### length
   - **length** is a property of array which returns the current length / number of elements in array.
   - It is not a method.
   - Used to dynamically determine the number of elements.
   - We can also truncate the array elements by reducing the value of this property.

  ```Javascript
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.length);

    // Outputs
    // 5
    arr.length = 3;
    console.log(arr.length);

    // Outputs
    // 3
  ```

   #### at()
   - **at()** is a method to determine the element at the given index.
  
  ```Javascript
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.at(2));

    // Outputs
    // 3
  ```

   #### concat()
   - **concat()** is a method used to concat arrays.
  
  ```Javascript
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    console.log(arr1.concat(arr2));

    // Outputs
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ```

   #### entries()
   - **entries()** is a method which returns an iterator object consist of given array's key-value pairs having index and element.
  
  ```Javascript
    const arr =  ["one", "two", "three", "four", "five"];
    const iterator = arr.entries();

    for(let [index, elem] of iterator) {
      console.log(`Element ${elem} is at index ${index}`);
    }

    // Outputs
    // Element one is at index 0
    // Element two is at index 1
    // Element three is at index 2
    // Element four is at index 3
    // Element five is at index 4
  ```

