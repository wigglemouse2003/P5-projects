var cols, rows;
var grid = [];
let resolution = 50;
let coins = [];
var amnt = 5;
var moving = false;
var activeAmnt = [];

function preload() {}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  rectMode(CENTER);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  for (let i = 0; i < amnt; i++) {
    coins[i] = new Race(floor(random(11)), floor(random(grid.length)));
    coins[i].setRace();
  }

  for (let i = 0; i < grid.length; i++) {
    grid[i].getSpots();
  }
}

function draw() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  for (let i = 0; i < amnt; i++) {
    coins[i].show(coins[i].pos.x, coins[i].pos.y);
    coins[i].activate();
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function mouseClicked() {
  for (let i = 0; i < coins.length; i++) {
    var posCoinX = coins[i].pos.x + resolution / 2;
    var posCoinY = coins[i].pos.y + resolution / 2;
    var negCoinX = coins[i].pos.x - resolution / 2;
    var negCoinY = coins[i].pos.y - resolution / 2;
    for (let j = 0; j < coins[i].cellNum.spots.length; j++) {
      if (moving && coins[i].active == true) {
        var posSpotX = coins[i].cellNum.spots[j].pos.x + resolution / 2;
        var posSpotY = coins[i].cellNum.spots[j].pos.y + resolution / 2;
        var negSpotX = coins[i].cellNum.spots[j].pos.x - resolution / 2;
        var negSpotY = coins[i].cellNum.spots[j].pos.y - resolution / 2;

        if (
          mouseX < posSpotX &&
          mouseX > negSpotX &&
          mouseY < posSpotY &&
          mouseY > negSpotY
        ) {
          coins[i].move(
            coins[i].cellNum.spots[j],
            coins[i].cellNum.spotsRelPos[j]
          );

          console.log("yes");
        }
      }
    }
    if (
      mouseX < posCoinX &&
      mouseX > negCoinX &&
      mouseY < posCoinY &&
      mouseY > negCoinY &&
      !moving
    ) {
      coins[i].active = true;
      activeAmnt.push(coins[i]);
      moving = true;
    } else if (moving) {
      for (let l = 0; l < grid.length; l++) {
        grid[l].available = false;
      }
    } else {
      coins[i].spdCounter = coins[i].speed;
    }
    if (coins[i].spdCounter == 0) {
      moving = false;
      coins[i].active = false;
      coins[i].spdCounter = coins[i].speed;
    }
  }
}
