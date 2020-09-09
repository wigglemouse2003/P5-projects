function Particle(num) {
  this.pos = createVector(random(width - 100), random(height - 100));
  this.vel = createVector();
  // this.acc = p5.Vector.random2D();
  this.acc = createVector(1);
  this.neighbors = 0;
  this.leftHemisphere = p5.Vector.fromAngle(270, (25 * radius) / 2);
  this.rightHemisphere = p5.Vector.fromAngle(90, (25 * radius) / 2);
  this.lt = 0;
  this.rt = 0;
  this.numb = num;

  this.checkNeighbors = function () {
    this.neighbors = 0;
    this.lt = 0;
    this.rt = 0;

    for (let i = 0; i < particles.length; i++) {
      var d_general = dist(
        this.pos.x,
        this.pos.y,
        particles[i].pos.x,
        particles[i].pos.y
      );
      var d_left = dist(
        this.leftHemisphere.x + this.pos.x,
        this.leftHemisphere.y + this.pos.y,
        particles[i].pos.x,
        particles[i].pos.y
      );
      var d_right = dist(
        this.rightHemisphere.x + this.pos.x,
        this.rightHemisphere.y + this.pos.y,
        particles[i].pos.x,
        particles[i].pos.y
      );
      if (d_general <= 25 * radius && i != this.numb) {
        this.neighbors += 1;
        if (d_left < d_right) {
          this.lt += 1;
        } else if (d_right < d_left) {
          this.rt += 1;
        }
      }
      // if (this.numb == 2 && d_left < d_right && d_general <= 25 * radius) {
      //   console.log(
      //     "this is " +
      //       this.numb +
      //       " d_right = " +
      //       d_right +
      //       " and d_left = " +
      //       d_left
      //   );
      //   console.log(particles[i]);
      // }
    }
  };
  this.update = function () {
    // this.leftHemisphere.rotate(rotateAmnt + 90);
    // this.rightHemisphere.rotate(rotateAmnt - 90);
    this.vel.rotate(rotateAmnt);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.leftHemisphere.set(0, -25 * radius);
    this.rightHemisphere.set(0, 25 * radius);
    this.acc.mult(0);
    this.vel.setMag(3 * speed);
    this.leftHemisphere.setMag((25 * radius) / 2);
    this.rightHemisphere.setMag((25 * radius) / 2);

    if (this.pos.x >= width - 25) {
      this.show(this.pos.x - width, this.pos.y);
      this.pos.x -= width;
    }

    if (this.pos.x <= 25) {
      this.show(this.pos.x + width, this.pos.y);
      this.pos.x += width;
    }

    if (this.pos.y >= height - 12.5) {
      this.show(this.pos.x, this.pos.y - height);
      this.pos.y -= height;
    }

    if (this.pos.y <= 12.5) {
      this.show(this.pos.x, this.pos.y + height);
      this.pos.y += height;
    }
  };

  this.show = function (x, y) {
    push();
    translate(x, y);
    rotate(this.vel.heading());
    noStroke();
    if (this.numb == 2) {
      fill(217, 0, 255, 50);
    } else {
      fill(0, 217, 255, 50);
    }
    ellipse(0, 0, 25 * radius, 25 * radius);
    stroke(51);
    fill(255);
    ellipse(0, 0, 25, 25);
    line(0, 0, 25 / 2, 0);
    line(this.leftHemisphere.x, this.leftHemisphere.y, 0, 0);
    ellipse(this.leftHemisphere.x, this.leftHemisphere.y, 25, 25);
    fill(51);
    ellipse(0, 0, 10, 10);
    pop();
    // rotate(this.leftHemisphere.heading());
  };
}
