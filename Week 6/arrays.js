//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ['A', 'B', 'A']
function GPA(grade) {
switch (grade){
    case 'A':
        point = 4;
        break;
    case 'B':
        point = 3;
        break;
    case 'C':
        point = 2;
        break;
    case 'D':
        point = 1
        break;
    default:
        point = 0;
        break;
}
return point;
}
const stepsGrades = grades.map(GPA);
console.log(stepsGrades);


const gpaPoints = stepsGrades.reduce((total, item) => total + item);
console.log(gpaPoints / stepsGrades.length);

//activity Filter

function isBigEnough(fruit) {
    return fruit.length < 6;
  }

const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'].filter(isBigEnough);
console.log(fruit);

//activity index of
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
console.log(myArray.indexOf(luckyNumber));



