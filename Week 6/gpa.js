function getGrades(inputSelector) {
    // split them into an array (String.split(','))
    let myArray = inputSelector.split(",");
    const cleangrades = myArray.map(grade => grade.trim().toUpperCase());
    return cleangrades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
        switch (grade){
            case 'A':
                return 4;
                break;
            case 'B':
                return 3;
                break;
            case 'C':
                return 2;
                break;
            case 'D':
                return 1
                break;
            default:
                return 0;
                break;
        }
    }
  
  function calculateGpa(grades) {
   let gradesTotal = grades.reduce((total, items) =>  total + items);
    let gpa = gradesTotal / grades.length;
    return gpa;
  }
  
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa; 
    }
  
  function clickHandler() {
    let inputSelector = document.querySelector("#grades").value;
    let grades = getGrades(inputSelector);
    let gpaPoints = grades.map(lookupGrade);
    let totalGPA = calculateGpa(gpaPoints);
    outputGpa(totalGPA, "#output")
  }

document.querySelector("#submitButton").addEventListener("click", () => {
    clickHandler()

})