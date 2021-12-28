// task
//call:

In call() method, we can write a method that can be used on different objects.
The call() method is a predefined JavaScript method.

example:
const myObject = {
    firstName:"vivek",
    lastName: "raj",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
     console.log(myObject.(fullName));

 //apply:

 The apply() method is similar to the call() method (previous chapter).
 The apply() method accepts arguments in an array.

 example:
 const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName:"vivek",
    lastName: "kumar"
  }
  console.log(person.fullName.apply(person1));

 //bind:
 
 The bind() method creates a new function, when invoked, has the this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method.

example:
var sum = function(a, b) {
    return a + b;
  };
  
  var add5 = sum.bind(null, 5);
  console.log(add5(10));

 //prototype inheritance:
 
 object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature 

example:
let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal;
 