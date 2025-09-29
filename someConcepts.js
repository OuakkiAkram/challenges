// ------------------------------------------ CLASSES ----------------------------------------------------------

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello! My name is ${this.name}, and I'm ${this.age} old!!`);
  }
}

const Mallow = new Person1("Marshall", 36);
Mallow.sayHello();

// ------------------------------------------ OBJECT LITERALS ----------------------------------------------------------

const Person2 = {
  name: "Uncle Snoopy",
  age: 56,
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}, and I'm ${this.age} old!`);
  },
};

Person2.sayHello();
