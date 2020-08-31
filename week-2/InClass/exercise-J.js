// function secondMatchesAmy(array) {
//   if ( ) {
//     return "Second index matched!";
//   }
//   return "Second index not matched";
// }
function secondMatchesAmy(array){
    if ( array[1]==="Amy") {
      return "Second index matched!";
    }
    else{
        return "Second index not matched";
    }
    
  }

  let name = ["Amara","Amy", "Hawa","Ramin", "Carlos"];
  let names2 = ["Amy","Alex","Carlos"];

  const result = (secondMatchesAmy(name));
  console.log(result);


  let num = 10;

function satisfiesRequirements(num) {

if (num >3 || (num<10 && num>8)) {
return true;
}
return false;
}
console.log(satisfiesRequirements(5));