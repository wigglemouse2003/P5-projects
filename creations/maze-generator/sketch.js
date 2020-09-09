var cols, rows;
var w = 15;
var grid = [];

var current;

var stack = [];

var slider;
var showgrid;
var reset;
var pause;

var playing = true;

function setup() {
  slider = createSlider(1, 30, 10, 1);
  showgrid = createSlider(0, 1, 1, 1);
  reset = createButton("Reset Maze");
  reset.mousePressed(resetMaze);
  pause = createButton("Pause");
  pause.mousePressed(pauseMaze);
  createCanvas(600, 600);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  frameRate(slider.value());
  // console.log(frameRate());

  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  current.highlight();
  if (playing) {
    current.visited = true;
    var next = current.checkNeighbors();
    if (next) {
      next.visited = true;

      // STEP 2
      stack.push(current);

      // STEP 3
      removeWalls(current, next);

      // STEP 4
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
    }
  }
}

function resetMaze() {
  var resetgrid = [];

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      resetgrid.push(cell);
    }
  }
  stack = [];
  grid = resetgrid;
  current = grid[0];
}

function pauseMaze() {
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

function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
