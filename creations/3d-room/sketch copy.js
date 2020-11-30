let camera;
var moving = false;
let level;
let rooms = [];
var roomBoxes;
let img = [];
let wallSecCollisions = [
  new Array(),
  new Array(),
  new Array(),
  new Array(),
  new Array(),
  new Array(),
];
function preload() {
  img[0] = loadImage("assets/red-bricks-wall-photo-taken-made-101731432.jpg");
  img[1] = loadImage(
    "assets/cement-polish-beautiful-texture-260nw-603431633.webp"
  );
}

function setup() {
  createCanvas(400, 400, WEBGL);
  camera = createCamera();
  setCamera(camera);
  requestPointerLock();
  camera.setPosition(0, 0, 150);
  level = new Level();
  level.setup();
  console.log(camera.centerX);
}

function draw() {
  let locX = -movedX * 0.001;
  let locY = movedY * 0.001;
  background(51);
  ambientLight(40, 40, 40);
  // pointLight(200, 200, 200, 375, -250, 125);
  // pointLight(150, 150, 150, 125, 0, -375);
  spotLight(
    200,
    200,
    200,
    camera.eyeX,
    camera.eyeY,
    camera.eyeZ,
    camera.centerX - camera.eyeX,
    camera.centerY - camera.eyeY,
    camera.centerZ - camera.eyeZ,

    PI,
    25
  );

  requestPointerLock();
  // camera.setPosition(camera.eyeX, 490, camera.eyeZ);

  noStroke();
  rooms[0].walls[0][5] = false;
  rooms[0].walls[2][5] = false;
  rooms[1].walls[3][3] = false;
  rooms[1].walls[2][1] = false;
  rooms[2].walls[1][1] = false;
  rooms[2].walls[1][0] = false;
  rooms[2].walls[3][2] = false;
  rooms[3].walls[2][0] = false;
  rooms[3].walls[2][1] = false;
  rooms[4].walls[1][0] = false;
  rooms[5].walls[0][1] = false;
  rooms[5].walls[1][3] = false;

  level.show();
  for (let i = 0; i < rooms.length; i++) {
    rooms[i].restore();
  }
  // orbitControl();
  stroke(0);
  fill(255);
  // noFill();
  push();
  // sphere(40);
  pop();

  camera.pan(-movedX * 0.001);
  camera.tilt(movedY * 0.001);

  var storedPos = [camera.eyeX, camera.eyeY, camera.eyeZ];
  if (moving) {
    if (key == "w") {
      camera.move(0, 0, -10);
    } else if (key == "a") {
      camera.move(-10, 0, 0);
    } else if (key == "s") {
      camera.move(0, 0, 10);
    } else if (key == "d") {
      camera.move(10, 0, 0);
    }
  }
  for (let i = 0; i < rooms.length; i++) {
    rooms[i].makeCollisions();
  }
}

function keyPressed() {
  moving = true;
  if (key == "r") {
    // frameCount = 0;
    setup();
  }
}

function keyReleased() {
  moving = false;
}

function makeGrid(x, y, z) {
  var arr = new Array(x);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(y);

    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(z);
    }
  }
  return arr;
}

function index(i, j, width) {
  return i + j * width;
}
