// // function moodcheck(mood){
// //         if ( mood === "happy"){
// //         return "Good job you are doing great";
        
// //         }
// //     } else if  ( mood === "sad"){
// //         return "Every cloud has a silver";
    
// //     } else if (typeof mood === "number"){
    
// //         return "Been beep boop";
// //     }
// //     else {
// //         return "I´m sorry, I am still learning about feeling";
// //     }    

// function mymoodcheck(mood){
//     if (mood === "happy"){
//         return"Good job, you are doing great";
//     }
//     else if (mood === "sad");{
//         return"every good silver lining";
//     }
//     else if (typeof mood === "number"){
//         return"Been  been boop"; 
//     }
//     else {
//         return "I´m sorry,I am still learning about feeling";
//     }
    

// } 
// var return = mymoodcheck("sad");
// console.log(return);

function mymoodcheck(mood){
    if (mood === "happy"){
        return "Good job, you are doing great";
    }
    else if (mood === "sad"){
        return "every good silver lining";
    }
    else if (typeof mood === "number"){
        return "Been  been boop";
    }
    else {
        return "I´m sorry,I am still learning about feeling";
    }
}
//let msg = mymoodcheck("sad");
console.log(mymoodcheck("happy"));
console.log(mymoodcheck("Sad"));
console.log(mymoodcheck("number"));
