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
let resolution = 1.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001;
let slider;
let sliderval;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  slider = createSlider(1, 60, 45);
  slider.position(windowWidth / 2 - width / 8, 3.75 * windowHeight / 4)
  sliderval = createP();
  sliderval.position(slider.position().x + 150, slider.position().y - 30);
  sliderval.style('color', 'rgb(0, 255, 0)');
  sliderval.style('font-weight', '900');
  sliderval.style('font-size', '25px');

  grid = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(5));
    }
  }
}

function draw() {
  background(0);
  frameRate(slider.value());
  sliderval.html(slider.value());


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        noStroke();
        rect(x, y, resolution, resolution);
      } else if (grid[i][j] >= 2) {
        grid[i][j] = 1;
      }
    }
  }

  let next = makeGrid(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  grid = next;



}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {

      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}