# Prototypes

## Introduction

- Everything in **javascript** is an <i>object</i>. Let's prove it further in this section.
- `prototype` simply a **javascript** mechanism through which objects share data with one another.
- In simpler terms everything in **javascript** is pointing to single object which is `Object.prototype`.
- `Prototype` is the property of every object, which is also a object - thus it also has it's own `prototype`.
- This creates **prototype chain**, it end's where the `prototype` of an object is **null**.
- Normal object's prototype points to one object called `Object.prototype` and that object's `prototype` points to **null**.

### Examples For Everything Is Object

1. Starting With Functions

```javascript
function func() {
  console.log("Normal Function");
}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(func)));
```

<details><summary>Output</summary>

![Object.prototype](https://codeforgeek.com/wp-content/uploads/2023/02/Object-prototype-constructor.jpg)

</details>
<br />

- Is same as :

```javascript
console.log(Object.prototype);
```

<details><summary>Output</summary>

![Object.prototype](https://codeforgeek.com/wp-content/uploads/2023/02/Object-prototype-constructor.jpg)

</details>
<br />

- Thus result is that everything is an object.

### Setting `prototype`

- There are two general ways to set `prototype` of an object.

1. Through Object.create

2. Through Constructor Functions

---

1. Through Object.create

```javascript
const commonProto = {
  sayHello() {
    console.log("Hello !");
  },
};

const person = Object.create(commonProto);
person.sayHello(); // Outputs Hello !
```

2. Through Constructor Functions

```javascript
const commonProto = {
  sayHello() {
    console.log("Hello ${this.name} !");
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = commonProto.sayHello;

const person = new Person("personOne");

person.sayHello(); // Outputs Hello personOne !
```

### Difference Between :

1. \_ _ proto _ \_
2. prototypev
3. [[Prototype]]

#### Image Credits

- https://codeforgeek.com
