// const years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
// const birthYear = (arr) => {
// 	const age = [];
// 	arr.forEach((year) => {
// 		console.log(`Your age is ${2020 - year}`);
// 		return age.push(`${2020 - year}`);
// 	});
// 	return age;
// };
// console.log(birthYear(years));

const years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
const birthYear = (arr) => {
	const age = [];
	arr.forEach((year) => {
		console.log(`Your age is ${2020 - year}`);
		return age.push(`${2020 - year}`);
	});
	return age;
};
console.log(birthYear(years));