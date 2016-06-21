//AutomatedGrading.js

// A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.
// NOTE: Round any calculations to the nearest 2 decimal places.

// Input 
// "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" 
// Output
// { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

let findAverage = arr => {
  var avg = 0;
  return arr.reduce( (acc, num) => acc + Number(num), 0) / arr.length;
};

const makeReport = str => {
  str = str.split('\n');
  let reportCard = {"all": 0};
  let classGrades = [];
  
  str.forEach((student, i) => {
    student = student.split(' ');
    classGrades.push(findAverage(student.slice(1)));
    reportCard[student.slice(0,1)] = classGrades[i];
    reportCard.all = Number(findAverage(classGrades).toFixed(2)); 
  });
  return reportCard;
}; 

makeReport("Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" );