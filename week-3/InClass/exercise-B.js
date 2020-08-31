// Exercise B (10 minutes)
// Use the array of the people from your class
// Combine it with another array filled with the names from another class
// console.log the names in alphabetical order
//Create a function that takes a name and an array of names and returns a string. If the name is not in an array, it should return <name> is not at the class with <people in the array>. If the name is in the array, it should return <name> is at the class with <people in the array>.


const myClassmates = ["Amy","Ramin","Ale","Carlos","Amara "];
const otherClassmates = ["Aleksey","Ali","Jaime", "Reajul"];
const Classmate = myClassmates.concat(otherClassmates);
let NameOrder = Classmate.sort();
console.log(Classmate);
console.log(NameOrder);

function checkNames(name, classMates) {
    if (classMates.includes(name)) {
      return `${name} is in the class with ${classMates}.`;
    }
    return `${name} is not in the class with ${otherClassmates}.`;
  }
  console.log(checkNames('Amara', myClassmates));