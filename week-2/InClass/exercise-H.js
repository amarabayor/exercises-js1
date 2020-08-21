function exponential(num) {
  return num * num;
}

// function isEven(number) {
//   return number % 2 === 0;
// }

let num = 6;

while (num<=18){
  console.log("the exponential of " +num+ " is "+ exponential(num));
  num = num+2;
}