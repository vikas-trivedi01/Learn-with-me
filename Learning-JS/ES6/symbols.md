# Symbols

Table Of Contents
- [Symbols](#symbols)
  - [Introduction](#introduction)
    - [Defining Symbol](#defining-symbol)
    - [Difference between `String` \& `Symbol`](#difference-between-string--symbol)
    - [Global `Symbols` Registry](#global-symbols-registry)
    - [**for()** \& **keyFor()** methods](#for--keyfor-methods)
    - [`Symbols` As Hidden Properties](#symbols-as-hidden-properties)
      - [Hidden Properties](#hidden-properties)
      - [Acessing Hidden Properties](#acessing-hidden-properties)
    - [Real World Example](#real-world-example)


## Introduction

- `Symbols` are unique and immutable identifiers, which provides high data hiding and security.
- They are highly used in custom object behaviors, API design, iterators.
- Used to avoid accidental modifications by providing way to create properties which are hidden sometimes.

### Defining Symbol

- Hence `Symbol` is a primitive data type, while creating a new `Symbol` , doesn't require **new** operator.
```Javascript
let id = Symbol();
console.log(id);

// Outputs
// Symbol()
```
- This will create a `Symbol` which is accessible by **id** variable.
- Type of `Symbol`
```Javascript
console.log( typeof(id) );

// Outputs
// symbol
```
- A description can be given to a `Symbol`.
```Javascript
let id = Symbol("This is a identifier");
console.log(id.description);

// Outputs
// This is a identifier
```

- Notice that the variable is named as **id**, which is allowed because every newly created `Symbol` is created no matter if the description is identical.

### Difference between `String` & `Symbol`
- Primarily `String` & `Symbol` are used as object's keys.
- If two strings are created which both have same content than they refer to same refernce location.
```Javascript
let s1 = "string";
let s2 = "string";

console.log( s1 == s2);

// Outputs 
// true
```

- If two symbols are created than they refer to different, unique refernce location.
```Javascript
let sym1 = Symbol();
let sym2 = Symbol();

console.log( sym1 == sym2);

// Outputs 
// false
```
- Main difference is if we use string in an object and object belongs to another code-base and there is a chance that there may be a error or confilicts.
- But using `Symbols` there is guarantee that there will be no conflicts, because `Symbols` are hidden while enumerating an object.
- Even if there is no other code-base and we different scripts and other script defines another user id, then there will be no error just because every `Symbol` is unique.
  
```Javascript
let id = Symbol("userId");
let user = {
    name : "xyz",
    [id] : 2
}

console.log(user);

// Outputs
// { 
//  name: 'xyz',
//  [Symbol(userId)]: 2
// }
```

### Global `Symbols` Registry

- There is a **Global `Symbols` Registry**, which holds `Symbols` which are shared everywhere.
- Otherwise `Symbols` are unique but when its necessary that if a `Symbol` is declared then it should be accessed rather than creating a new one.
---
- This work of creating and retrieving **Global `Symbols`** is done by a method **for()**.
- This method does that, if a **Global `Symbol`** is already created it returns that `Symbol`, otherwise it creates a new one.
```Javascript
let globalS1 = Symbol.for("global");
let localS1 = Symbol("local");

let globalS2 = Symbol.for("global");
let localS2 = Symbol("local");

console.log("Are both global symbols the same? -> " + (globalS1 == globalS2 ? "YES" : "NO"));
console.log("Are both local symbols the same? -> " + (localS1 == localS2 ? "YES" : "NO"));

// Outputs
// Are both global symbols the same? -> YES
// Are both local symbols the same? → NO
```

### **for()** & **keyFor()** methods

- As discussed earlier **for()** will do work of creating and retrieving **Global `Symbols`**.
- **keyFor()** method will return name of the `Symbol` from the given `Symbol`.
```Javascript
let globalS1 = Symbol.for("global");

console.log(Symbol.for("global") ) ;
// Outputs 
// Symbol(global)

console.log(Symbol.keyFor(globalS1)) ;
// Outputs 
// global
```

  - Verifying that the symbol returned by **Symbol.for("global")** 
  - is the same as the symbol stored in globalS1, confirming that 
  - **for()** always returns the same symbol for a given key.
  
```Javascript
console.log(Symbol.for("global") == globalS1);
// Outputs 
// true
```

### `Symbols` As Hidden Properties

- `Symbols` are hidden in **for...in** loop, **Object.keys()**, **Object.getOwnPropertyNames()**, etc..
- There are some ways to get the hidden `Symbols`.
  1. Object.assign()
  2. Object.getOwnPropertySymbols()

#### Hidden Properties
1. for...in loop
  ```Javascript
  let obj = {
    name : "xyz",
    email : "xyz@user.com",
    [Symbol("PASSWORD")] : "123"
  }

  for ( userDetail in obj) {
    console.log(`User's ${userDetail} is ${obj[userDetail]}`);
  }

  // Outputs
  // User's name is xyz
  // User's email is xyz@user.com
  ```

  - Here the password will never be shown in loop.
  
2. Object.keys()
  ```Javascript
  let obj = {
    name : "xyz",
    email : "xyz@user.com",
    [Symbol("PASSWORD")] : "123"
  }
  
  console.log(`Properties of object are : ${Object.keys(obj)}`);

  // Outputs
  // Properties of object are : name,email
  ```

  - Here the password will never be shown in object's keys.
  
3. Object.getOwnPropertyNames()
  ```Javascript
  let obj = {
    name : "xyz",
    email : "xyz@user.com",
    [Symbol("PASSWORD")] : "123"
  }
  
  console.log(`Properties of object are : ${Object.getOwnPropertyNames(obj)}`);

  // Outputs
  // Properties of object are : name,email
  ```

#### Acessing Hidden Properties
  - **Object.assign() & Object.getOwnPropertySymbols()**
     -  It looks weird that how this method can acess hidden `Symbols` which are properties.
     -  There is no magic reason is that whenever an object is getting cloned every property must be cloned thus ...
    
      ``` Javascript
      let obj = {
      name : "xyz",
      email : "xyz@user.com",
      [Symbol("PASSWORD")] : "123"
      }

      let symbolAwareObj = Object.assign( {}, obj );
      console.log(Object.getOwnPropertySymbols(symbolAwareObj));

      // Outputs
      // [Symbol(PASSWORD)]
      ```

### Real World Example

```Javascript
const SESSION_TOKEN = Symbol("sessiontoken");

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this[SESSION_TOKEN] = this.generateToken();
    }

    generateToken() {
        return Math.random().toString(20).slice(2);
    }

    getSessionToken() {
        return this[SESSION_TOKEN]; 
    }
}

const user = new User("xyz", "xyz@user.com");

console.log("User name is " + user.name);
console.log("User email is " + user.email);

// console.log(user.SESSION_TOKEN); undefined
console.log("Session token is " + user.getSessionToken());

console.log("Object keys " + Object.keys(user));
```