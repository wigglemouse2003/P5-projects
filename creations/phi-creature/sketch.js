let bgcolor = 0;
let figure;
var b = 0;
var c = 0;
var changeExpression;
var facialExpression = "happy";
let camera;

function setup() {
  createCanvas(400, 400, WEBGL);
  figure = new Character();
  changeExpression = createButton("Change Expression");
  changeExpression.mousePressed(randomExpression);
  camera = createCamera();
  setCamera(camera);
}

function draw() {
  camera.lookAt(0, 0, 0);
  // rotateY(millis() / -1000);
  // camera.setPosition(0, 0, 150);
  background(bgcolor);
  figure.show(0, 0, bgcolor, b, b, facialExpression);
  if (c % 10 == 0) {
    b += random(-0.5, 0.5);
  }
  camera.setPosition(cos(frameCount / 60) * 150, 0, sin(frameCount / 60) * 150);
  // camera.lookAt(0, 0, 0);
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
