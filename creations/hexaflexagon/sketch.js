var angle = 0;

function setup() {
  // createCanvas(1200, 1200, WEBGL);
  createCanvas(400, 400, WEBGL);
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
}

function draw() {
  angleMode(DEGREES);
  background(51);
  fill(255);
  stroke(0);
  orbitControl();
  // requestPointerLock();

  push();
  rotateZ(30);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  rotateZ(-60);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  rotateZ(-60);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  rotateZ(-60);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  rotateZ(-60);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  rotateZ(-60);
  rotateY(-angle);
  rotate(90);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  rotate(-90);
  pop();

  stroke(0, 0, 255);
  line(-10000, 0, 10000, 0);
  stroke(0, 255, 0);
  line(0, -10000, 0, 10000);
  stroke(255, 0, 0);
  rotateY(90);
  line(-10000, 0, 10000, 0);
  angle += 0.1;
}

function openWin() {
  controller = window.open(
    "controller/controller.html",
    "",
    "width=150, height=175, resizable=no"
  );
  resizeWin();
}

function resizeWin() {
  controller.focus();
}
