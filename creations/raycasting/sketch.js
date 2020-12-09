let walls = [];
let ray;
let particle;

function setup() {
  console.clear();
  createCanvas(800, 800);
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);

  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(0, height, width, height));
  walls.push(new Boundary(0, height, 0, 0));
  particle = new Particle();
  // console.log(PI);
}

function draw() {
  background(0);
  for (wall of walls) {
    wall.show();
  }

  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  // // console.log(pt);
  // if (pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
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
