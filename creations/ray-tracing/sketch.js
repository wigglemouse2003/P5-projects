function setup() {
  createCanvas(400, 400);
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
}

function draw() {
  background(0);
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
