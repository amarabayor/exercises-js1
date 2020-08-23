function exponential(num) {
  return num * num;
}



let num = 6;

while (num<=18){
  console.log("the exponential of " +num+ " is "+ exponential(num));
  num = num+2;
}
// Ecpected result.the exponential of 6 is 36
// the exponential of 8 is 64
// the exponential of 10 is 100
// the exponential of 12 is 144
// the exponential of 14 is 196
// the exponential of 16 is 256
// the exponential of 18 is 324

// function isEven(number) {
//   return number % 2 === 0;
// }

//const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
