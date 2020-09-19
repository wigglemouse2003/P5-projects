function Cell(i, j) {
  this.index = index(i, j);
  this.x = i * resolution + resolution / 2;
  this.y = j * resolution + resolution / 2;
  this.pos = createVector(this.x, this.y);
  this.speed = 1;
  this.spots = [];
  this.spotsRelPos = [];
  this.available = false;
  this.getSpots = function () {
    for (let k = this.speed; k >= -1 * this.speed; k--) {
      for (let l = this.speed; l >= -1 * this.speed; l--) {
        var spX = Math.abs(l);
        var spY = Math.abs(k);
        if (grid[index(i + k, j + l)]) {
          this.spotsRelPos.push(Math.max(spX, spY));
          this.spots.push(grid[index(i + k, j + l)]);
        }
      }
    }
    this.speed = 1;
  };
  this.show = function () {
    if (this.available) {
      fill(242, 202, 2);
    } else {
      fill(51);
    }
    stroke(255);
    rect(this.pos.x, this.pos.y, resolution, resolution);
  };
}
