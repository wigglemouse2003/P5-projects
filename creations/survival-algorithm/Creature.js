function Creature(x, y) {
  var dna = 1;
  // this.pos = createVector(random(width - 100), random(height - 100));
  this.pos = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  this.move = createVector();
  this.fitness = 0;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }

  let hu = random(255);
  let sat = random(255);
  let brt = random(255);
  this.applyForce = function (force) {
    this.acc.add(force);
  };
  this.update = function () {
    for (var i = 0; i < targetAmnt; i++) {
      var d = dist(this.pos.x, this.pos.y, targets[i].x, targets[i].y);

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit((this.pos.y / this.pos.x) * 10);

      this.move = createVector();
      this.move.add(
        targets[i].x - this.pos.x + 100 / ((d ^ 2) - 1000),
        targets[i].y - this.pos.y + 100 / ((d ^ 2) - 1000)
      );

      this.move.setMag(maxforce);
      this.applyForce(this.move);

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
    }
  };
  this.show = function (x, y) {
    push();
    translate(x, y);
    rotate(this.vel.heading());
    fill(hu, sat, brt);
    ellipse(0, 0, 12.5, 12.5);
    fill(255, 0, 255);
    ellipse(2.5, -1.875, 3.125, 3.125);
    ellipse(2.5, 1.875, 3.125, 3.125);
    fill(255, 0, 0);
    ellipse(3.125, -1.875, 1.25, 1.25);
    ellipse(3.125, 1.875, 1.25, 1.25);
    pop();
  };

  this.calcFitness = function () {};
}
