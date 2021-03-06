var amnt = 50;
var particles = [];
var speed = 0.67;
var rotateAmnt = 180;
var radius = 5;
var beta = -17;
var cols, rows;
var playing = false;
var pause;
let resolution = 120;

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  pause = createButton("Pause");
  // pause.size(600, 200);
  pause.style("font-size", 50 + "px");
  pause.position(windowWidth / 2 - width / 8, (3.25 * windowHeight) / 4);
  pause.mousePressed(Pause);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // for (let i = 0; i < amnt; i++) {
      // var particle = new Particle(
      //   i,
      //   random(
      //     width // - 500
      //   ), // + 250
      //   random(
      //     height // - 500
      //   ) // + 250
      // );
      // }
      var particle = new Particle(
        index(i, j),
        i * resolution + resolution / 2,
        j * resolution + resolution / 2
      );
      particles.push(particle);
    }
  }

  for (let i = 0; i < 0; i++) {
    var particle = new Particle(
      particles.length,
      width / 2 + random(20) - 10,
      height / 2 + random(20) - 10
    );
    particles.push(particle);
  }
  angleMode(DEGREES);
}

function draw() {
  background(0);
  // ellipse(width / 2, height / 2, 40, 40);
  for (var i = 0; i < particles.length; i++) {
    particles[i].checkNeighbors();
    if (playing) {
      particles[i].update();
    }
    particles[i].show(particles[i].pos.x, particles[i].pos.y);
  }
}

function mouseClicked() {
  if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
    var particle = new Particle(particles.length, mouseX, mouseY);
    particles.push(particle);
  }
}

function Pause() {
  if (playing) {
    playing = false;
  } else if (!playing) {
    playing = true;
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}
function windowResized() {
  resizeCanvas(windowWidth - 5, windowHeight - 5);
  pause.position(windowWidth / 2 - width / 8, (3.25 * windowHeight) / 4);
}
