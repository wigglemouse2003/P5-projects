var reset;
var pause;

function setup() {
  createCanvas(400, 400);
  registerServiceWorker("/addons/service-worker.js");
  reset = createButton("Reset Maze");
  reset.mousePressed(send);

  listenMessage(function (incomingData) {
    console.log(incomingData.client, incomingData.message);
  });
}

function draw() {
  background(0);
}

function mouseClicked() {
  registerServiceWorker("/addons/service-worker.js");
  // sendMessage(random(360));
}

function send() {
  sendMessage(true);
}
