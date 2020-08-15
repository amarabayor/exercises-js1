const numberofstudents = 12;
const numberofmentors = 5;

const studentsandmentor = numberofstudents + numberofmentors;
console.log(studentsandmentor);
 
const percentagesofstudent = numberofstudents / studentsandmentor * 100;
console.log(percentagesofstudent);

const percentageofmentors = numberofmentors / studentsandmentor * 100;
console.log(percentageofmentors);

const precise = Math.round(percentagesofstudent);
console.log(precise);


const precisementors = Math.round(percentageofmentors)
console.log(precisementors);


const percentages = "percentages of students";
console.log(percentages);


const messagestudents = percentages + precise + "%";
 
console.log(messagestudents);

const mentorpercentages = "percentages of mentors";
console.log(mentorpercentages);

const messagementors = mentorpercentages + precisementors + "%";

console.log(messagementors);

