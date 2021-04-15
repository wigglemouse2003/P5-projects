let camera;
let person, head, torso, arms;

function setup() {
  createCanvas(400, 400, WEBGL);
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
  camera = createCamera();
  person = new Body();
  head = new person.head();
  torso = new person.torso();
  arms = new person.arms();
}

function draw() {
  background(0);
  orbitControl();
  // noStroke();
  person.show();
  head.face();
  head.show();
  head.update();
  // person.face();
  arms.show();
  // rotateZ(millis() / 1000);
  torso.show();
  // console.log(round(mouseY));
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
