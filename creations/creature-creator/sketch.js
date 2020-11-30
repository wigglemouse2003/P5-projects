const heads = [];
const torsos = [];
const arms = [];
const legs = [];

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
}

function draw() {
  translate(width / 2, height / 2);
  background(51);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
