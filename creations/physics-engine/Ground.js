function Ground() {
  this.pos = createVector(0, 500, 0);
  this.show = function (x, y, z) {
    push();
    fill(47, 175, 56);
    translate(x, y, z);
    rotateX(PI / 2);
    plane(1000000, 1000000);
    pop();
  };
}
