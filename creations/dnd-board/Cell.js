function Cell(i, j) {
  this.index = index(i, j);
  this.x = i * resolution + resolution / 2;
  this.y = j * resolution + resolution / 2;
  this.pos = createVector(this.x, this.y);
  this.speed = 1;
  this.spots = [];
  this.available = false;
  this.getSpots = function () {
    this.spots[0] = grid[index(i, j - this.speed)];
    this.spots[1] = grid[index(i, j + this.speed)];
    this.spots[2] = grid[index(i - this.speed, j)];
    this.spots[3] = grid[index(i + this.speed, j)];
    this.spots[4] = grid[index(i - this.speed, j - this.speed)];
    this.spots[5] = grid[index(i + this.speed, j - this.speed)];
    this.spots[6] = grid[index(i - this.speed, j + this.speed)];
    this.spots[7] = grid[index(i + this.speed, j + this.speed)];

    //     if (this.spots.length == 0) {
    //   for (let k = 0; k < grid.length; k++) {
    //     var spot = grid[k];
    //     if (
    //       spot.pos.y >= grid[index(i, j - this.speed)].pos.y &&
    //       spot.pos.y <= grid[index(i, j + this.speed)].pos.y &&
    //       spot.pos.x >= grid[index(i - this.speed, j)].pos.x &&
    //       spot.pos.x <= grid[index(i + this.speed, j)].pos.x
    //     ) {
    //       this.spots.push(spot);
    //     }
    //   }
    // }
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
