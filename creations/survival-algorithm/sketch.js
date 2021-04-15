let slider;
let sliderval;
let creatures = [];
var maxforce = 0.2;
var targets = [];
var count;
var countAmnt = 100;
var targetAmnt = 7;
var cols, rows;
let resolution = 100;

function setup() {
  createCanvas(1920, 474);
  colorMode(HSB);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  slider = createSlider(1, 60, 45);
  slider.position(width / 2 - width / 16, height - 25);
  sliderval = createP();
  sliderval.position(slider.position().x + 150, slider.position().y - 30);
  sliderval.style("color", "rgb(0, 255, 0)");
  sliderval.style("font-weight", "900");
  sliderval.style("font-size", "25px");
  for (var i = 0; i < targetAmnt; i++) {
    targets[i] = createVector(((i + 1) * width + 1 * i) / 8, height / 2);
  }
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      creatures[i + j * cols] = new Creature(
        i * resolution + resolution / 2,
        j * resolution + resolution / 2
      );
    }
  }
}

function draw() {
  background(0);
  frameRate(slider.value());
  sliderval.html(slider.value());
  // for (var i = 0; i < countAmnt; i++) {
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // maxforce = creatures[i + j * cols].pos.y / creatures[i + j * cols].pos.x;
      creatures[i + j * cols].update();
      creatures[i + j * cols].show(
        creatures[i + j * cols].pos.x,
        creatures[i + j * cols].pos.y
      );
      // maxforce = 0.001;
    }
  }
  colorMode(RGB);
  fill(0, 255, 0);
  for (var i = 0; i < targetAmnt; i++) {
    ellipse(targets[i].x, targets[i].y, 8, 8);
  }
  colorMode(HSB);
}
