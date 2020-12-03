function makeGrid(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 15;
let val;
var numval;
var newnum = 0;
var num = 0;
var inputval = 0;
var frame;
var going = false;
var list = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  val = createP();
  numval = createInput();
  frameRate(3);
  newnum = num;
  grid = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == 0 || j == 0) {
        grid[i][j] = createP();
        grid[i][j].style("color", "rgb(0, 255, 0)");
        grid[i][j].style("font-size", "10px");
        grid[i][j].position(i * resolution + 4, j * resolution - 8);
      }
    }
  }
}

function draw() {
  background(0);
  val.html(newnum);
  if (frame % 2 != 0) {
    inputval = numval.value();
  }
  if (num != numval.value() && !going) {
    num = numval.value();
    newnum = num;
  }
  Game();
  frame += 0.5;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j]) {
        noFill();
        stroke(255);
        if (i > 0) {
          grid[i][j].html(i);
        } else if (j > 0) {
          grid[i][j].html(j);
        } else {
          grid[i][j].html("0");
        }
        rect(x, y, resolution, resolution);
      } else if (grid[i][j] >= 2) {
        grid[i][j] = 1;
      }
    }
  }
}

function Game() {
  going = true;
  while (newnum != 1 || numval.value() != 0) {
    console.log(newnum);
    list.push(newnum);
    if (num % 2 == 1) {
      newnum = num * 3 + 1;
    } else if (num % 2 == 0) {
      newnum = num / 2;
    }
    num = newnum;

    return newnum;
  }
}

function mousePressed() {
  print(numval.value());
  going = false;
  newnum = 1;
}
