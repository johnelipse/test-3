function chooseShape(shape) {
  if (shape === "circle") {
    const radius = prompt("Enter radius");
    const area = (22 / 7) * radius ** 2;
    alert(`the area of a circle with a redius ${radius} is ${area}.`);
  } else if (shape === "rectangle") {
    const length = prompt("Enter length");
    const width = prompt("Enter width");
    const area = length * width;
    alert(
      `the area of a rectangle with length ${length} and width ${width} is ${area}.`
    );
  } else if (shape === "triangle") {
    const baseArea = prompt("Enter Basearea");
    const height = prompt("Enter Height");
    const area = 0.5 * baseArea * height;
    alert(
      `the area of a triangle with height ${height} and base area ${baseArea} is ${area}.`
    );
  } else {
    alert("Enter one of the following shapes;Circle,triangle,rectangle.");
  }
}
const shape = prompt("Enter shape");
chooseShape(shape);
