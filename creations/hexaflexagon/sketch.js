let camera;
var angle = 0;
var triangles;

function setup() {
  // createCanvas(1200, 1200, WEBGL);
  createCanvas(400, 400, WEBGL);
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
  camera = createCamera();
  setCamera(camera);
  requestPointerLock();
  triangles = new Strip(9);
}

function draw() {
  angleMode(DEGREES);
  background(51);
  fill(255, 0, 0);
  triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
  circle(mouseX - 50, mouseY - 50, 10);

  hit = collidePointTriangle(
    mouseX - 50,
    mouseY - 50,
    0,
    0,
    30,
    0,
    15,
    -15 * sqrt(3)
  );
  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
  fill(255);
  stroke(0);
  // orbitControl();
  // requestPointerLock();
  // camera.pan(-movedX * 0.05);
  // camera.tilt(movedY * 0.05);
  if (keyIsDown(87)) {
    camera.move(0, 0, -10);
  }
  if (keyIsDown(65)) {
    camera.move(-10, 0, 0);
  }
  if (keyIsDown(83)) {
    camera.move(0, 0, 10);
  }
  if (keyIsDown(68)) {
    camera.move(10, 0, 0);
  }
  triangles.show();
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
