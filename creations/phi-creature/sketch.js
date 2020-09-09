let bgcolor = 0;
let figure;
var b = 0;
var c = 0;
var changeExpression;
var facialExpression = "happy";

function setup() {
  createCanvas(400, 400);
  figure = new Character();
  changeExpression = createButton("Change Expression");
  changeExpression.mousePressed(randomExpression);
}

function draw() {
  background(bgcolor);
  figure.show(width / 2, height / 2, bgcolor, b, b, facialExpression);
  if (c % 10 == 0) {
    b += random(-0.5, 0.5);
  }

  c++;
}

function randomExpression() {
  var r = ceil(random(3));
  if (r == 1) {
    facialExpression = "happy";
  } else if (r == 2) {
    facialExpression = "sad";
  } else if (r == 3) {
    facialExpression = "scared";
  }
}
