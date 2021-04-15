function Body() {
  this.show = function () {
    noStroke();
    fill(255, 233, 168);
  };
  this.head = function () {
    this.pos = createVector(0, 0, 0);
    this.vel = createVector();
    this.acc = createVector(10, -10, 0);
    this.dis = createVector();
    this.grav = createVector(0, 0.988, 0);
    this.update = function () {
      this.dis = this.vel.add(this.acc);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      //   this.acc.add(-this.dis.heading());
      //   this.acc.limit(this.grav);
      this.acc.add(this.grav);
      if (this.pos.mag() > 50) {
        this.pos.limit(50);
      }
    };
    this.show = function () {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      translate(0, 50, 0);
      rotate(this.vel.heading() + PI / 2);
      translate(0, -50, 0);
      ellipsoid(40, 50, 30, 24, 24);
      pop();
    };
    this.face = function () {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      translate(0, 50, 0);
      rotate(this.vel.heading() + PI / 2);
      translate(0, -50, 0);
      // eyes
      push();
      fill(255);
      translate(-20, -15, 20);
      sphere(10);
      fill(51);
      translate(0, 0, 6);
      sphere(5);
      pop();
      push();
      fill(255);
      translate(20, -15, 20);
      sphere(10);
      fill(51);
      translate(0, 0, 6);
      sphere(5);
      pop();
      // nose
      push();
      fill(200, 100, 50);
      translate(0, -7, 30);
      rotateX(PI);
      cone(5, 30, 24, 16);
      pop();
      // mouth
      push();
      fill(225, 150, 100);
      translate(0, 15, 25);
      rotateX(PI / 16);
      ellipse(0, 0, 45, 25);
      pop();
      pop();
    };
  };
  this.torso = function () {
    this.show = function () {
      push();
      fill(252, 0, 67);
      translate(0, 90, 0);
      rotateX(PI);
      cone(25, 200, 24, 16);
      pop();
      push();
      translate(0, 18, 0);
      rotateX(PI);
      fill(0);
      cone(7.5, 61, 24, 16);
      pop();
    };
  };
  this.arms = function () {
    this.hilo = 1;
    this.show = function () {
      push();
      push();
      translate(-25, 80, 0);
      rotateZ(PI / 4);
      cylinder(7.5, 75);
      pop();
      push();
      translate(-50, 127, 0);
      cylinder(7.5, 50);
      pop();
      push();
      translate(25, 80, 0);
      rotateZ(-PI / 4);
      cylinder(7.5, 75);
      pop();
      push();
      translate(50, 127, 0);
      cylinder(7.5, 50);
      pop();
      pop();
    };
  };
}

249 && 191;
