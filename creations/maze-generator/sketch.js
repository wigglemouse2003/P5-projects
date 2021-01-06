var cols, rows;
var w = 10;
var grid = [];
var grid2 = [];
var controller;
var current;

var stack = [];

var showgrid = 1;
var playing = true;
var remoteReset = false;
var remotePause = false;
var remoteSlider;
var remoteShowgrid;
var fmRt = 10;

function setup() {
  createCanvas(200, 200);
  cols = floor(width / w);
  rows = floor(height / w);

  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
  // grid2 = makeGrid(cols, rows);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      var solver = new Solver(i, j);
      grid.push(cell);
      grid2.push(solver);
    }
  }

  listenMessage(function (incomingData) {
    //the incoming data has 2 keys, client and message
    // console.log(incomingData.client, incomingData.message);
    if (incomingData.message[0] === 0) {
      remoteReset = true;
    } else if (incomingData.message[0] === 1) {
      remotePause = true;
    } else if (incomingData.message[0] === 2) {
      fmRt = incomingData.message[1];
    } else if (incomingData.message[0] === 3) {
      showgrid = incomingData.message[1];
    }
  });

  current = grid[0];
  grid2[0].activated = false;
  registerServiceWorker("service-worker.js");
}

function draw() {
  frameRate(fmRt);
  // console.log(frameRate());

  background(51);

  for (var i = 0; i < grid.length; i++) {
    grid[i].show(0);
  }
  for (let k = 0; k < 2; k++) {
    if (k == 0) {
      for (var j = rows - 1; j > -1; j--) {
        for (var i = cols - 1; i > -1; i--) {
          grid2[index(i, j)].show();
          grid2[index(i, j)].checkWalls();
          grid2[index(i, j)].update(k);
        }
      }
    } else if (k == 1) {
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          grid2[index(i, j)].checkWalls();
          grid2[index(i, j)].update(k);
          grid2[index(i, j)].show();
        }
      }
    }
  }
  for (var i = 0; i < grid.length; i++) {
    grid[i].show(2);
  }
  if (current != grid[0]) {
    current.highlight();
  }
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
  if (remoteReset === true) {
    resetMaze();
    remoteReset = false;
  }
  if (remotePause === true) {
    pauseMaze();
    remotePause = false;
  }
  grid[0].walls[3] = false;
  grid[grid.length - 1].walls[1] = false;
  if (frameCount >= 10 && stack.length == 0) {
    grid2[0].activated = true;
  } else {
    grid2[0].activated = false;
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

function index(i, j, bool) {
  if ((i < 0 || j < 0 || i > cols - 1 || j > rows - 1) && bool) {
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

function mouseClicked() {
  //this will only go to the other clients that are connected (not itself).
  sendMessage(random(360));
}

function openWin() {
  controller = window.open(
    "controller/controller.html",
    "",
    "width=150, height=175, resizable=no"
  );
  resizeWin();
  // controller.document.write("<p>This is 'myWindow'</p>");
}

function resizeWin() {
  // controller.resizeTo(200, 250);
  controller.focus();
}

function makeGrid(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
