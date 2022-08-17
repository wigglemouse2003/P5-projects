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
var storedPos = [];
var grav = true;
var jump = false;
var number = 5;
devMode = 0;

function preload() {
  img[0] = loadImage("assets/red-bricks-wall-photo-taken-made-101731432.jpg");
  img[1] = loadImage(
    "assets/cement-polish-beautiful-texture-260nw-603431633.webp"
  );
}

function setup() {
  // createCanvas(400, 400, WEBGL);
  createCanvas(windowWidth - 5, windowHeight - 5, WEBGL);
  camera = createCamera();
  setCamera(camera);
  requestPointerLock();
  camera.setPosition(0, 0, 150);
  level = new Level();
  level.setup();
  // camera.setPosition(camera.eyeX, 490, camera.eyeZ);
  console.log(camera.centerX);
}

function draw() {
  let locX = -movedX * 0.001;
  let locY = movedY * 0.001;
  background(51);
  // pointLight(200, 200, 200, 375, -250, 125);
  // pointLight(150, 150, 150, 125, 0, -375);
  ambientLight(40, 40, 40);
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
  rooms[4].walls[2][1] = false;
  rooms[5].walls[0][1] = false;
  rooms[5].walls[1][3] = false;
  rooms[6].walls[1][1] = false;

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

  storedPos = [camera.eyeX, camera.eyeY, camera.eyeZ];
  // if (moving) {
  if (keyIsDown(87)) {
    camera.move(0, 0, -10);
  }
  if (keyIsDown(65)) {
    camera.move(-10, 0, 0);
  }
  if (keyIsDown(83)) {
    camera.move(0, 0, 10);
  }
  if (keyIsDown(68)) {
    camera.move(10, 0, 0);
  }
  // }
  if (keyIsDown(17) && keyIsDown(18) && keyIsDown(68)) {
    if (devMode == 0) {
      devMode = 1;
    } else {
      devMode = 0;
    }
  }

  if (devMode == 0) {
    if (grav && !jump) {
      camera.setPosition(
        camera.eyeX,
        camera.eyeY + (frameCount * frameCount) / 1000,
        camera.eyeZ
      );
    } else {
      grav = true;
    }
    level.collide();
    if (jump) {
      if (number >= 0) {
        console.log("yes");
        camera.setPosition(camera.eyeX, camera.eyeY - number, camera.eyeZ);
        frameCount = 0;
        number -= 0.1;
        // number = number - 0.0625;
        grav = false;
      }
    }
  }

  if (grav) {
    number = 5;
    jump = false;
  }
}

function keyPressed() {
  moving = true;
  if (key == "r") {
    setup();
    frameCount = 0;
  }
  if (keyIsDown(32) && !grav) {
    jump = true;
  }
}

function keyReleased() {
  // if (key == ) {
  //   console.log("c");
  // }
  moving = false;
  // jump = false;
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

function windowResized() {
  resizeCanvas(windowWidth - 5, windowHeight - 5);
}

function collisionDetect(x, z, w, h) {
  if (
    camera.eyeX > x &&
    camera.eyeX < x + w &&
    camera.eyeZ > z &&
    camera.eyeZ < z + h
  ) {
    return true;
  } else {
    return false;
  }
}
