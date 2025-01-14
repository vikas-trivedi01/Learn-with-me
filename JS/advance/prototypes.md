# Prototypes

## Introduction

- Everything in **javascript** is an <i>object</i>. Let's prove it further in this section.
- `[[prototype]]` is a propety in every object which reference to another object.
- Every object's `[[prototype]]` descends from `Object.prototype` object. Which have common utilities for all objects.
- In simpler terms everything in **javascript** is pointing to single object which is `Object.prototype`.

### Examples For Everything Is Object

1. Starting With Functions

```javascript
function func() {
  console.log("Normal Function");
}
console.log(func.__proto__.__proto__);

// Outputs
 constructor
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
length
: 
0
name
: 
"toString"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)

get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()

```

- Is same as :

```javscript
console.log(Object.prototype);

// Outputs
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
length
: 
0
name
: 
"toString"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
```

- Thus it confirms that when `func.__proto__.__proto__` is logged the prototype we get is same as when we logged `Object.prototype`.

- Thus function is a object, is proven.

### Difference Between :

1. __ proto __
2. prototype
3. [[Prototype]]