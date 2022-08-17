let camera;
var Cubes = new Array();
let ground;
var size = [];
for (let i = 0; i < 10; i++) {
  // size[i] = (Math.random() * 10 + 1) * 10;
  size[i] = 100;
}
var CubesPos = new Array();
var CubesParts = new Array();
let drawParts = false;

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5, WEBGL);
  camera = createCamera();
  setCamera(camera);
  ground = new Ground();
  for (let i = 0; i < size.length; i++) {
    Cubes[i] = new Box(200 * i, drawParts);
    CubesPos[i] = Cubes[i].pos;
    CubesParts[i] = Cubes[i].parts;
  }
  camera.setPosition(-100, 0, 500);
}

function draw() {
  background(55);
  ambientLight(50);
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
  // orbitControl();
  ground.show(ground.pos.x, ground.pos.y, ground.pos.z);
  for (let i = 0; i < Cubes.length; i++) {
    // for (let j = 0; j < Cubes.length; j++) {
    storedPos = Cubes[i].pos;
    CubesPos.splice(i, 1);
    Cubes[i].update(size[i], CubesPos, CubesParts);
    CubesPos.splice(i, 0, Cubes[i].pos);
    Cubes[i].show(Cubes[i].pos.x, Cubes[i].pos.y, Cubes[i].pos.z, size[i]);
    // }
    Cubes[i].stop = false;
  }
  // Cube.pos.y = Cube.pos.y + ((9.81 / frameCount) ^ 2);
  camera.pan(-movedX * 0.001);
  camera.tilt(movedY * 0.001);

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
}

function keyPressed() {
  if (key == "r") {
    setup();
    frameCount = 0;
  }
}

function mousePressed() {
  requestPointerLock();
}
