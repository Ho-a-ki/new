var age = prompt("How old are you?");

if(age < 0 ) {
    console.log("Age can't be a negative!")
}

else if (age == 21) {
    console.log("Happy 21st BirthDay!!")
}

else if(age % Math.sqrt(age) === 0) {
    console.log("Perfect sqaure!")
  }

else if(age % 2 == 1) {
    console.log("Your age is odd")
}

else {
    console.log("your age is " + age)
};