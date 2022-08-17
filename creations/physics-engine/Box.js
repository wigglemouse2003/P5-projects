function Box(index, drawParts) {
  this.pos = createVector(
    random(index / 10, -index / 10),
    random(index / 5, -index / 5) - index / 5,
    random(index / 10, -index / 10)
  );
  this.vel = createVector();
  this.rotation = createVector(random(10, -10), -random(50), random(10, -10));
  // this.rotation = p5.Vector.random3D();
  this.acc = createVector(random(10, -10), -random(50), random(10, -10));
  this.center = this.pos;
  this.corners = new Array();
  this.edges = new Array();
  this.faces = new Array();
  this.parts = [this.corners, this.edges, this.faces, this.center];
  this.update = function (size, otherCubesPos, otherCubesParts) {
    size /= 2;
    this.center = this.pos;
    if (this.corners.length == 0) {
      for (let i = 0; i < 8; i++) {
        var h = Math.abs(60 * (i - 1));
        var s = Math.abs(100 * (i - 7));
        var b = 100 * i;
        if (s > 100) {
          s = 100;
        }
        if (b > 100) {
          b = 100;
        }
        this.corners[i] = [
          createVector(
            size * ((i % 2) * 2 - 1),
            size * ((Math.floor(i / 2) % 2) * 2 - 1),
            size * ((Math.floor(i / 4) % 2) * 2 - 1)
          ),
          [h, s, b],
        ];
      }
    }
    if (this.edges.length == 0) {
      this.edges.push([this.corners[0], this.corners[1], [0, 100, 50]]);
      this.edges.push([this.corners[0], this.corners[2], [60, 100, 50]]);
      this.edges.push([this.corners[0], this.corners[4], [180, 100, 50]]);
      this.edges.push([this.corners[1], this.corners[3], [60, 100, 100]]);
      this.edges.push([this.corners[1], this.corners[5], [300, 100, 100]]);
      this.edges.push([this.corners[2], this.corners[3], [90, 100, 100]]);
      this.edges.push([this.corners[2], this.corners[6], [180, 100, 100]]);
      this.edges.push([this.corners[3], this.corners[7], [120, 50, 100]]);
      this.edges.push([this.corners[4], this.corners[5], [210, 100, 100]]);
      this.edges.push([this.corners[4], this.corners[6], [240, 100, 100]]);
      this.edges.push([this.corners[5], this.corners[7], [240, 50, 100]]);
      this.edges.push([this.corners[6], this.corners[7], [300, 50, 100]]);
    }
    size *= 2;

    this.acc.y = (this.acc.y ^ 2) / 9.81;
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    for (let i = 0; i < otherCubesPos.length; i++) {
      if (
        Math.abs(this.pos.y - otherCubesPos[i].y) <= size &&
        Math.abs(this.pos.x - otherCubesPos[i].x) <= size &&
        Math.abs(this.pos.z - otherCubesPos[i].z) <= size
      ) {
        this.vel.mult(0.9, -0.75, 0.9);
        if (this.pos.x >= otherCubesPos[i].x) {
          this.rotation.x += 1 / 100;
        } else if (this.pos.x <= otherCubesPos[i].x) {
          this.rotation.x -= 1 / 100;
        }

        if (this.pos.z >= otherCubesPos[i].z) {
          this.rotation.z += 1 / 100;
        } else if (this.pos.z <= otherCubesPos[i].z) {
          this.rotation.z -= 1 / 100;
        }

        if (this.pos.y >= otherCubesPos[i].y) {
          this.rotation.y += 1 / 100;
        } else if (this.pos.y <= otherCubesPos[i].y) {
          this.rotation.y -= 1 / 100;
        }
      }
      for (
        let j = 0;
        Math.abs(this.pos.y - otherCubesPos[i].y) <= size &&
        Math.abs(this.pos.x - otherCubesPos[i].x) <= size &&
        Math.abs(this.pos.z - otherCubesPos[i].z) <= size;
        j++
      ) {
        if (this.pos.y <= otherCubesPos[i].y) {
          this.pos.y -= 1 / 100;
        } else if (
          this.pos.y >= otherCubesPos[i].y
          // !(this.pos.y >= ground.pos.y - size / 2)
        ) {
          this.pos.y += 1 / 100;
        }
      }
    }
    for (let i = 0; i < this.parts[0].length; i++) {
      if (
        Math.floor(
          dist(
            ground.pos.x,
            ground.pos.y,
            ground.pos.z,
            this.pos.x + this.parts[0][i][0].x,
            this.pos.y + this.parts[0][i][0].y,
            this.pos.z + this.parts[0][i][0].z
          )
        ) <= 200
      ) {
        // this.pos.y -= 1;
        this.vel.mult(0.75, -0.75, 0.75);
        // if ((this.rotation.x || this.rotation.z) > 0) {

        // }
        for (
          let j = 0;
          this.pos.y +
            this.parts[0][i][0].y * sin(this.rotation.y) +
            this.parts[0][i][0].x * sin(this.rotation.x) +
            this.parts[0][i][0].z * sin(this.rotation.z) -
            ground.pos.y >=
          0;
          j++
        ) {
          this.pos.y -= 0.1;
        }
      }
      this.acc.mult(0);
    }
  };
  this.show = function (x, y, z, size) {
    push();
    colorMode(HSB);
    noStroke();

    fill(((index / 200) * 20 * PI) % 360, 100, 100);
    translate(x, y, z);

    // rotateZ(this.rotation.z);
    // rotateX(this.rotation.x);
    // rotateY(this.rotation.y);
    if (this.rotation != undefined) {
      rotate(this.rotation.mag(), this.pos);
      // rotate(this.rotation.x);
    }
    // print(this.rotation);

    box(size, size, size);

    if (drawParts) {
      for (let i = 0; i < this.corners.length; i++) {
        push();
        fill(
          this.corners[i][1][0],
          this.corners[i][1][1],
          this.corners[i][1][2]
        );

        translate(
          this.corners[i][0].x,
          this.corners[i][0].y,
          this.corners[i][0].z
        );
        sphere(10);
        pop();
      }
      for (let i = 0; i < 12; i++) {
        push();
        stroke(this.edges[i][2][0], this.edges[i][2][1], this.edges[i][2][2]);

        line(
          this.edges[i][0][0].x,
          this.edges[i][0][0].y,
          this.edges[i][0][0].z,
          this.edges[i][1][0].x,
          this.edges[i][1][0].y,
          this.edges[i][1][0].z
        );
        pop();
      }
    }
    pop();
  };
}
