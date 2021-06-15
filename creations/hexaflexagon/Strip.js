function Strip(length) {
  this.strip = new Array(length);

  this.triangle = function (num) {
    this.direction = num % 2;
    this.hilo = num % 3;
    this.numb = num;
  };
  for (let i = 0; i < this.strip.length; i++) {
    this.strip[i] = new this.triangle(i);
  }
  this.show = function () {
    // push();
    // rotateZ(30);
    // rotate(90);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // rotateZ(-60);
    // rotateY(-angle);
    // rotate(90);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // translate(0, 30, 0);
    // rotateZ(60);
    // rotateY(-angle);
    // rotate(90);
    // translate(-30, 0, 0);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // rotateZ(-60);
    // rotateY(-angle);
    // rotate(90);
    // fill(0, 0, 255);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // translate(0, 30, 0);
    // rotateZ(60);
    // rotateY(-angle);
    // rotate(90);
    // translate(-30, 0, 0);
    // fill(255, 255, 0);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // rotateZ(-60);
    // rotateY(-angle);
    // rotate(90);
    // fill(0, 255, 255);
    // triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
    // rotate(-90);
    // pop();
    push();
    rotateZ(30);
    for (let i = 0; i < round(this.strip.length); i++) {
      if (this.strip[i].direction == 0) {
        rotateZ(-60);
        if (this.strip[i].hilo == 0) {
          rotateY(-angle);
        } else {
          // rotateY(angle);
        }
        rotate(90);
        triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
        rotate(-90);
        translate(0, 30, 0);
        rotateZ(60);
      } else {
        if (this.strip[i].hilo == 0) {
          rotateY(-angle);
        } else {
          // rotateY(angle);
        }
        rotate(90);
        translate(-30, 0, 0);
        triangle(0, 0, 30, 0, 15, -15 * sqrt(3));
        rotate(-90);
      }
    }
    pop();
  };
}
