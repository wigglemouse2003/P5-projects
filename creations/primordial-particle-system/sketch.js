var amnt = 50;
var particles = [];
var speed = 0.67;
var rotateAmnt = 180;
var radius = 5;
var beta = -17;

var playing = false;
var pause;

function setup() {
  createCanvas(1600, 1600);
  pause = createButton("Pause");
  pause.size(600, 200);
  pause.style("font-size", 150 + "px");
  pause.position(width, 0);
  pause.mousePressed(Pause);
  for (let i = 0; i < amnt; i++) {
    var particle = new Particle(
      i,
      random(
        width // - 500
      ), // + 250
      random(
        height // - 500
      ) // + 250
    );
    particles.push(particle);
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
    if (playing) {
      particles[i].checkNeighbors();
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
