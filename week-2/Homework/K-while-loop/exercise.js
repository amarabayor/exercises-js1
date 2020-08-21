/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

// let n = 10;

// function sumTillNum(num){
// 	while(num<=0){
// 		console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
// 		num=+1;
// 	}
// }

//console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


let n = 10;

function sumTillNum(num) {
 let rese = 0;
	while (num > 0) {
	rese += num--;
	 }
	
	return num * ((num + 1) / 2);
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

