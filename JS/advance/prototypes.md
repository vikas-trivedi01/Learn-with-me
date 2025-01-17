# Prototypes

## Introduction

- Everything in **javascript** is an <i>object</i>. Let's prove it further in this section.
- `prototype` simply a **javascript** mechanism through which objects share data with one another.
- In simpler terms everything in **javascript** is pointing to single object which is `Object.prototype`.

### Prototypes

- `prototype` is the type of link every object have which refers to another object and it can be acessed by property called >> <i>\_ _ proto _ \_</i> ,and `prototype` of an object is also an object - thus it also has it's own `prototype`.
- This creates **prototype chain**, it end's where the `prototype` of an object is **null**.
- Normal object's prototype points to one object called `Object.prototype` and that object's `prototype` points to **null**.

### Prototype Chain

- As every object has a `prototype`.
- Whenever a property is being accessed.
- If not found in the object itself, it's `prototype` will be checked.
- If not found there also, then the same process will be get reapeted until either property is found or an object's `prototype` is **null**.

- Here when **getFloorNumber()** invoked, firstly **newClasssRoom** object's all properties are checked and if property not found.
- **newClasssRoom** object's `prototype` will be refered to get the property, and if still not found it will go further until either the property is found or object's `prototype` is **null** this creates a <i>prototype chain</i>.

```javascript
function Classroom(floorNumber) {
  this.floorNumber = floorNumber;
}

Classroom.prototype.getFloorNumber = function () {
  return this.floorNumber;
};

const newClasssRoom = new Classroom(1);

newClasssRoom.getFloorNumber();

console.log(Object.getPrototypeOf(newClasssRoom) == Classroom.prototype); // Outputs true
console.log(Object.getPrototypeOf(Classroom.prototype) == Object.prototype); // Outputs true
```

- Here first log will display <i>true</i> because of `prototype` of the newly created object will refer to the constructor function's `prototype`(**Classroom.prototype**).

- Second log will display <i>true</i> because of `prototype` (Object) of the constructor function's `prototype (Function)` will be **Object.prototype**.

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

- **Note** : Object property which describes `prototype` can be accessed through >> <i>\_ _ proto _ \_</i> , however it's recommended to use **Object.getPrototypeOf()** to get the `prototype` of an object.

- <i> Is same as </i> :

```javascript
console.log(Object.prototype);
```

<details><summary>Output</summary>

![Object.prototype](https://codeforgeek.com/wp-content/uploads/2023/02/Object-prototype-constructor.jpg)

</details>
<br />

- Thus result is that everything is an object.

### Shadowing Properties

- It can happen that, a property was set which was already present in it's `prototype`, at that time most accessible property will be consider.

```javascript
const date = new Date(2015, 11, 26);
console.log(date.getTime()); // Outputs 1451068200000

date.getTime = function () {
  return "Property shadowed !";
};

console.log(date.getTime()); // Outputs Property shadowed !
```

### Setting `prototype`

- There are two general ways to set `prototype` of an object.

1. Through Object <b>.</b> create

2. Through Constructor Functions

---

1. Through Object <b>.</b> create

- Using this method, create an object and set `prototype` of the object as mentioned in method.

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

- Using this method, property named `prototype` which is present in every function is set as the `prototype` of newly created object in the property named >> <i>\_ _ proto _ \_</i>.

```javascript
const commonProto = {
  sayHello() {
    console.log("Hello ${this.name} !");
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = commonProto.sayHello; // or Object.assign(Person.prototype, commonProto);

const person = new Person("personOne");

person.sayHello(); // Outputs Hello personOne !
```

### <i>\_ _ proto _ \_</i>

- <i>\_ _ proto _ \_</i> , is the property of an object which points to (or holds reference for) the `prototype` of the object.
- It's recommended to use **Object.getPrototypeOf()** to get the `prototype` of an object and **Object.setPrototypeOf()** to set the `prototype`, instead of <i>\_ _ proto _ \_</i> .

```Javascript
const obj = {};

console.log("The prototype of 'obj'");
console.log(Object.getPrototypeOf(obj));
```

<details><summary>Output</summary>

![Object.getPrototypeOf(obj)](https://codeforgeek.com/wp-content/uploads/2023/02/Object-prototype-constructor.jpg)

</details>
<br />

```Javascript
console.log("The prototype of 'Object'");
console.log(Object.prototype);
```

<details><summary>Output</summary>

![Object.prototype](https://codeforgeek.com/wp-content/uploads/2023/02/Object-prototype-constructor.jpg)

</details>
<br />

```Javascript
console.log(`Is both prototypes are same : ${Object.getPrototypeOf(obj) == Object.prototype}`);
```

### Difference Between :

<table>
  <tr>
    <th> \_ _ proto _ \_ </th>
    <th> prototype </th>
    <th> [[Prototype]] </th>
  </tr>

  <tr>
    <td> A property present in every object, which gives access to `prototype` of an object</td>
    <td> Every object has an internal link to another object which is called it's `prototype`</td>
    <td> JS engine use `[[Prototype]]` to lookup for the object's `prototype`</td>
  </tr>
</table>

### `prototype` in Functions

- `prototype` is a property of a constructor function that refers to an object which will act as a `prototype` for objects which will be instantiated from the constructor function.
- By default, this property of a constructor function is set to `Object.prototype`.
- We can change it, so all objects instantiated by the constructor function will point to same `prototype`.

#### Example to set the `prototype`

```Javascript
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  console.log(this.name);
}

const newPerson = new Person("p1");

newPerson.getName();
```

- However, above code works same as below modern js code.

```Javascript

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}


  const newPerson = new Person("p1");

  newPerson.getName();
```

- <i>Quick Check</i>
- Take a look at, constructor function's `prototype` (i.e) object's `prototype` which will be instantiated from this constructor function.

```Javascript
console.log(Person.prototype);

// Outputs
// {getName: ƒ}getName: ƒ ()constructor: ƒ Person(name)[[Prototype]]: Object
```

#### Impact of dynamic `prototype` changes

- If already have methods / variables in `prototype` and objects are already instantiated and if now some changes are made in `prototype`, the old objects will still refer to the old `prototype`.

#### Images Credit

- https://codeforgeek.com
