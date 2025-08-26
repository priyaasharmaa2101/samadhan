// Simple Student Marks Calculator
let sub1 = 91;
let sub2 = 90;
let sub3 = 95;
let sub4 = 88;
let sub5 = 98;

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let avg = total / 5;
let grade;

if (avg >= 90) {
  grade = 'A+';
} else if (avg >= 80) {
  grade = 'A';
} else if (avg >= 70) {
  grade = 'B';
} else if (avg>= 60) {
  grade = 'C';
} else if (avg>= 50) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log("Total Marks: " + total);
console.log("Average Marks: " + avg);
console.log("Grade: " + grade);
