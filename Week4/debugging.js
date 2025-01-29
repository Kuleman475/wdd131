const PI = 3.14;
let radius = 3;
let area = 0;
// area = radius * radius * PI;
// radius = 4;
// area = radius * radius * PI;

function circleArea(radius) {
    area = radius * radius * PI;
    return area;
  }
console.log(circleArea(4));
console.log(circleArea(3));