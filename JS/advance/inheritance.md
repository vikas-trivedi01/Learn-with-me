# Inheritance

Table Of Contents
- [Inheritance](#inheritance)
  - [Introduction](#introduction)
  - [Classical Inheritance](#classical-inheritance)
    - [Advantages Of Classical Inheritance](#advantages-of-classical-inheritance)
    - [Disadvantages Of Classical Inheritance](#disadvantages-of-classical-inheritance)

##  Introduction

- `Inheritance` refers to ability to inherit variables, methods from other object in **JavaScript**.
- There are two major type of `Inheritance`  in **JavaScript**.
  
  1. Classical Inheritance
  2. Prototypal Inheritance

## Classical Inheritance

- After **ES6**, classes are introduced in **JavaScript**.
  
- Providing <i>suger-coating</i> on **prototypes**.
  
- Classes includes **constructors, methods, super keyword** to facilitate properties initialization, implementing functionalitites, call the parent constructor respectively.
  
- Classes provide facility to create objects based on the class template, thus eliminating code redundancy.

```Javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle, department) {
    super(name, age);
    this.jobTitle = jobTitle;
    this.department = department;
  }

  displayEmployeeInfo() {
    console.table([{ 
      Name: this.name, 
      Age: this.age, 
      "Job Title": this.jobTitle, 
      Department: this.department 
    }]);
  }
}

const firstEmployee = new Employee("Bob", 30, "Software Engineer", "IT");
const secondEmployee = new Employee("Kyle", 40, "Software Engineer", "IT");

firstEmployee.displayEmployeeInfo();
secondEmployee.displayEmployeeInfo();
```

- Outputs

![Classical-Inheritance](../img/classical-inheritance.png)

### Advantages Of Classical Inheritance

- Provides intuitive syntax for `inheritance`.
- Performace wise its better to use <i>Classical Inheritance</i> rather than <i>Prototypal Inheritance</i>

### Disadvantages Of Classical Inheritance

- <i>Classical Inheritance</i> is more rigid and supports less accessiblity for direct inheritance from other object.
- Doesn't provide dynamic object composition from other object.
