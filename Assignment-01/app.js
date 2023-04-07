//QUESTION 01

let num1 = +prompt("enter num1");
let num2 = +prompt("enter num2");
let result = null
if(num1>num2){
    result = num1
} else{
    result = num2
}
console.log("The largest number is " + result)

// QUESTION 02

// let num = +prompt("enter number");
// if(num>0){
//     alert("The sign is +");
// } else {
//    alert("The sign is -");
// }

// QUESTION 03

// let num1 = +prompt("enter num1");
// let num2 = +prompt("enter num2");
// let num3 = +prompt("enter num3");
// let num4 = +prompt("enter num4");
// let num5 = +prompt("enter num5");
// let maxNum = Math.max(num1, num2, num3, num4, num5);
// console.log("The largest number is " + maxNum);

// QUESTION 04

// for(let i=0; i<=15; i++){
//    if(i%2==0){
//     document.write(i + " is Even " + "<br>")
//    }
//    else {
//     document.write(i + " is Odd " + "<br>")
//    }
// }let

// QUESTION 05

// var students = [
//     { marks: [95, 97, 92] },
//     { marks: [60, 68, 73] },
//     { marks: [85, 91, 89] },
//     { marks: [50, 45, 80] },
//     { marks: [70, 70, 70] },
//   ];
  
//   students.forEach((student) => {
//     const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
//     student.average = average;
//   });
//   students.forEach((student) => {
//     let grade;
//     if (student.average < 60) {
//       grade = "F";
//     } else if (student.average < 70) {
//       grade = "D";
//     } else if (student.average < 80) {
//       grade = "C";
//     } else if (student.average < 90) {
//       grade = "B";
//     } else {
//       grade = "A";
//     }
//     student.grade = grade;
//   });

//   document.write("<table>");
//   document.write("<tr><th>Average Marks </th><th>Grade </th></tr>");
//   students.forEach((student) => {
//     document.write(`<tr><td>${student.average.toFixed(2)}</td><td>${student.grade}</td></tr>`);
//   });
//   document.write("</table>");
  
// QUESTION 06

// for(let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         document.write("FizzBuzz <br>")
//     }
//     else if(i%5 === 0){
//         document.write("Buzz <br>")
//     }
//     else if(i%3 === 0){
//         document.write("Fizz <br>")
    
//     }
//     else {
//         document.write(i + "<br>")
//     }
// }

//  QUESTION 07

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }

