var reset;
var pause;
var slider;
var showgrid;
var action = false;
var storedValSlider;
var storedValShowgrid;
var hilo;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  registerServiceWorker("/addons/service-worker.js");
  reset = createButton("Reset Maze");
  reset.mousePressed(one);
  pause = createButton("Pause");
  pause.mousePressed(two);
  slider = createSlider(1, 30, 10, 1);
  storedValSlider = slider.value();
  showgrid = createSlider(0, 1, 1, 1);
  storedValShowgrid = showgrid.value();
  hilo = createDiv("");
  hilo.child(reset);
  hilo.child(pause);
  hilo.child(slider);
  hilo.child(showgrid);
  // reset.position(0, (3 * height) / 4 - 100);
  // pause.position(0, (3 * height) / 4 - 60);
  // slider.position(0, (3.75 * height) / 4 - 40);
  // showgrid.position(0, (3.75 * height) / 4 - 10);
  // reset.center("horizontal");
  // pause.center("horizontal");
  // slider.center("horizontal");
  // showgrid.center("horizontal");
  hilo.center();
  listenMessage(function (incomingData) {
    console.log(incomingData.client, incomingData.message);
  });
}

function draw() {
  background(51);
  if (storedValSlider != slider.value()) {
    action = 2;
    send();
    storedValSlider = slider.value();
  }
  if (storedValShowgrid != showgrid.value()) {
    action = 3;
    send();
    storedValShowgrid = showgrid.value();
  }
}

function mouseClicked() {
  registerServiceWorker("/addons/service-worker.js");
  // sendMessage(random(360));
}

function send() {
  if (action == 0) {
    sendMessage([0, 0]);
  } else if (action == 1) {
    sendMessage([1, 0]);
  } else if (action == 2) {
    sendMessage([2, slider.value()]);
  } else if (action == 3) {
    sendMessage([3, showgrid.value()]);
  }
}
function one() {
  action = 0;
  send();
}
function two() {
  action = 1;
  send();
}
