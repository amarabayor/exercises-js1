// function abracaFunction(myfunction) {
//     console.log(
//          "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
//             );
// 	const abracaArray = [ 'Amara', 'Alex', 'Ismal', 'Amy', 'Calros', 'Antina' ];
//     const abracaOutput = abracaArray.map((idx) => idx.toUpperCase()).sort();
    
// 	return abracaOutput;
// }

// console.log(abracaFunction(this.abracaOutput));





function abracaFunction(name){
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
  
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = abracaArray.map((name) => name.toUpperCase()).sort();
  
    return abracaOutput;
  }
  console.log(abracaFunction(this.abracaOutput));