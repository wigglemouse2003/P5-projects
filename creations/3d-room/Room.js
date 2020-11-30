function Room() {
  this.walls = [
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array(),
  ];
  this.restore = function () {
    for (let i = 0; i < 100; i++) {
      this.walls[0][i] = true;
      this.walls[1][i] = true;
      this.walls[2][i] = true;
      this.walls[3][i] = true;
    }
  };
  this.show = function (l, h, w, trans, c) {
    ambientMaterial(c);
    push();
    translate(trans);

    // fill(c);
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        if (this.walls[0][index(j, i, h)]) {
          var posSet = createVector(
            trans.x + i * 250,
            trans.y + j * 250,
            trans.z - 125
          );
          wallSecCollisions[0].push(posSet);
          push();
          texture(img[0]);
          translate(0, 0, -125);
          translate(i * 250, j * 250, 0);
          plane(250, 250);
          pop();
        }
      }
    }
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < l; j++) {
        var posSet = createVector(
          trans.x + i * 250,
          trans.y + (h - 1) * 250 + 125,
          trans.z + j * 250
        );
        wallSecCollisions[1].push(posSet);
        push();
        texture(img[1]);
        translate(0, (h - 1) * 250 + 125, 0);
        translate(i * 250, 0, j * 250);
        rotateX(HALF_PI);
        plane(250, 250);
        pop();
      }
    }
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < l; j++) {
        var posSet = createVector(
          trans.x + i * 250,
          trans.y - 125,
          trans.z + j * 250
        );
        wallSecCollisions[2].push(posSet);
        push();
        texture(img[1]);
        translate(0, -125, 0);
        translate(i * 250, 1, j * 250);
        rotateX(-HALF_PI);
        plane(250, 250);
        pop();
      }
    }
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < h; j++) {
        if (this.walls[1][index(j, i, h)]) {
          var posSet = createVector(
            trans.x - 125,
            trans.y + j * 250,
            trans.z + i * 250
          );
          wallSecCollisions[3].push(posSet);
          push();
          texture(img[0]);
          translate(-125, 0, 0);
          translate(0, j * 250, i * 250);
          rotateY(HALF_PI);
          plane(250, 250);
          pop();
        }
      }
    }
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < h; j++) {
        if (this.walls[2][index(j, i, h)]) {
          var posSet = createVector(
            trans.x + (w - 1) * 250 + 125,
            trans.y + j * 250,
            trans.z + i * 250
          );
          wallSecCollisions[4].push(posSet);
          push();
          texture(img[0]);
          translate((w - 1) * 250 + 125, 0, 0);
          translate(0, j * 250, i * 250);
          rotateY(-HALF_PI);
          plane(250, 250);
          pop();
        }
      }
    }
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        if (this.walls[3][index(j, i, h)]) {
          var posSet = createVector(
            trans.x + i * 250,
            trans.y + j * 250,
            trans.z + (l - 1) * 250 + 125
          );
          wallSecCollisions[5].push(posSet);
          push();
          texture(img[0]);
          translate(0, 0, (l - 1) * 250 + 125);
          translate(i * 250, j * 250, 0);
          rotateY(PI);
          plane(250, 250);
          pop();
        }
      }
    }
    pop();
    this.walls[0] = [];
    this.walls[1] = [];
    this.walls[2] = [];
    this.walls[3] = [];
  };
  this.makeCollisions = function (l, h, w, trans) {
    for (let j = 0; j < wallSecCollisions.length; j++) {
      for (let i = 0; i < wallSecCollisions[j].length; i++) {
        if (
          floor(camera.eyeX / (10 * (2 ^ w) + 11) - 11) ===
            floor(wallSecCollisions[j][i].x / 10) &&
          this.walls[j][i] === true
        ) {
          camera.setPosition(storedPos[0], camera.eyeY, camera.eyeZ);
        }
        if (
          floor(camera.eyeY / (10 * (2 ^ h) + 36) - 10) ===
          floor(wallSecCollisions[j][i].y / 10)
        ) {
          camera.setPosition(camera.eyeX, storedPos[1], camera.eyeZ);
          grav = false;
        }
        if (
          floor(camera.eyeZ / (10 * (2 ^ (l - 2.75)) - 4) + 30) ===
            wallSecCollisions[j][i].z / 10 &&
          this.walls[j][i] === true
        ) {
          camera.setPosition(camera.eyeX, camera.eyeY, storedPos[2]);
        }
      }
    }

    wallSecCollisions[0] = [];
    wallSecCollisions[1] = [];
    wallSecCollisions[2] = [];
    wallSecCollisions[3] = [];
    wallSecCollisions[4] = [];
    wallSecCollisions[5] = [];
  };
}
