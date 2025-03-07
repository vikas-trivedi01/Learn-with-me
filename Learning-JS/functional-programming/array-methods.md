# Array Methods

Table Of Contents
- [Array Methods](#array-methods)
  - [Introduction](#introduction)
    - [Concepts to Learn](#concepts-to-learn)
    - [Basic Methods](#basic-methods)
      - [length](#length)
      - [at()](#at)
      - [concat()](#concat)
      - [copyWithin()](#copywithin)
      - [entries()](#entries)
      - [fill()](#fill)
      - [flat()](#flat)
      - [flatMap()](#flatmap)
      - [includes()](#includes)
      - [indexOf() \&\& lastIndexOf()](#indexof--lastindexof)
      - [join()](#join)
      - [keys()](#keys)
      - [reverse()](#reverse)
      - [slice()](#slice)
      - [sort()](#sort)
      - [toString()](#tostring)
      - [values()](#values)


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

   #### copyWithin()
   - **copyWithin()** is a method, which modifies original array to copy given range of elements in the same array, maintaining the original length of array (i.e overwrites).
     - arguments :
       1. target - where to start putting copied elements.
       2. start - where to start copying from.
       3. end -  where to end copying of elements.
  
  ```Javascript
    const arr = ["one", "two", "three", "four", "five"];
    console.log(arr.copyWithin(1,2,3));

    // Outputs
    // ['one', 'three', 'three', 'four', 'five']
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

   #### fill()
   - **fill()** fills given **value** from **start** to **end** in original array.
     - arguments :
       1. value - value to fill array with.
       2. start - where to start filling from.
       3. end -  where to end filling of elements.
  
  ```Javascript
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.fill(0, 2, 5));

    // Outputs
    // 1, 2, 0, 0, 0
  ```

   #### flat()
   - **flat()** returns a new array sub-array elements of array are flatten(concated) to a specified depth.
  
  ```Javascript
    const arr = [1, [2, 3], [[4, 5]], [[[6]]]];
    const flatten = arr.flat(2);
    console.log(flatten);
    
    // Outputs
    // 1, 2, 3, 4, 5, [6]
  ```

   #### flatMap()
   - **flatMap()** maps each array element with a function and flats array till one level and returns a new array.
  
  ```Javascript
    const arr = [1, 2, 3];
    const flatten = arr.flatMap(num => [num, num * 2]);
    console.log(flatten);

    // Outputs
    // 1, 2, 2, 4, 3, 6
  ```

   #### includes()
   - **includes()** either returns true if element is found in array or false otherwise.
  
  ```Javascript
    const arr = [1, 2, 3];
    console.log(arr.includes(5));

    // Outputs
    // false
  ```

   #### indexOf() && lastIndexOf()
   - **indexOf()** returns index of first occurence of the given element.
   - **lastIndexOf()** returns index of last occurence of the given element.
  
  ```Javascript
    const arr =  ["one", "two", "three", "four", "three"];
    console.log(arr.indexOf("three"));
    console.log(arr.lastIndexOf("three"));

    // Outputs
    // 2
    // 4
  ```

  #### join()
  - **join** converts an array into string with joining elements of array with given separator.

  ```Javascript
    const arr =  ["This", "is", "joined", "with", "hyphens"];
    console.log(arr.join("-"));

    // Outputs
    // This-is-joined-with-hyphens
  ```

  #### keys()
  - **keys** returns an iterator having keys(indices) of given array.
  
  ```Javascript
    const arr =  ["This", "is", "joined", "with", "hyphens"];
    const iterator = arr.keys();
    
    for (let idx of iterator)
        console.log(idx);

    // Outputs
    // 0
    // 1
    // 2
    // 3
    // 4 
  ```

  #### reverse()
  - **reverse** reverses an array elements in place.

  ```Javascript
    const arr =  ["This", "is", "joined", "with", "hyphens"];
    arr.reverse();
    console.log(arr);

    // Outputs
    // ['hyphens', 'with', 'joined', 'is', 'This']
  ```
  
  #### slice()
  - **slice** slices an array's elements and returns new array with sliced elements.

  ```Javascript
    const arr =  ["This", "is", "joined", "with", "hyphens"];
    console.log(arr.slice(1,3));

    // Outputs
    // [is', 'joined']
  ```

  #### sort()
  - **sort** sorts an array's elements in place, but by default it sorts alphabetcally if numbered is required there must be a comparison function passed as argument.

  ```Javascript
    const arr =  [43,59,35,6,443];
    arr.sort( (a,b) => a - b );

    console.log(arr);

    // Outputs
    // [6, 35, 43, 59, 443]
  ```
  
  #### toString()
  - **toString** converts an array to a string separated by commas.

  ```Javascript
    const arr = ["apple", "banana", "cherry"];
    console.log(arr.toString());

    // Outputs
    // "apple,banana,cherry"
  ```

  #### values()
  - **values** returns an iterator having values(elements) of given array.
  
  ```Javascript
    const arr =  ["This", "is", "joined", "with", "hyphens"];
    const iterator = arr.values();
    
    for (let val of iterator)
        console.log(val);

    // Outputs
    // This
    // is
    // joined
    // with
    // hyphens
  ```
  