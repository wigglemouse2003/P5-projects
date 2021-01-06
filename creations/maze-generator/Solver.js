function Solver(i, j) {
  this.i = i;
  this.j = j;
  this.activated = false;
  this.blocked = false;
  this.current = false;
  this.path = [];
  this.end = true;
  //   this.clone;
  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    if (this.activated) {
      noStroke();
      fill(0, 255, 0);
      rect(x, y, w, w);
    }
    if (this.end == false) {
      fill(255, 127, 0);
      rect(x, y, w, w);
    }
  };
  this.checkWalls = function () {
    var wallNeighbors = 0;
    this.blocked = true;
    if (
      grid[index(this.i - 1, this.j)] &&
      !grid[index(this.i - 1, this.j)].walls[1] &&
      grid2[index(this.i - 1, this.j, true)] &&
      grid2[index(this.i - 1, this.j, true)].activated == true
    ) {
      this.blocked = false;
      this.end = true;
      wallNeighbors++;
    }
    if (
      grid[index(this.i - cols, this.j)] &&
      !grid[index(this.i - cols, this.j)].walls[2] &&
      grid2[index(this.i - cols, this.j, false)] &&
      grid2[index(this.i - cols, this.j, false)].activated == true
    ) {
      this.blocked = false;
      this.end = true;
      wallNeighbors++;
    }
    if (
      grid[index(this.i + 1, this.j)] &&
      !grid[index(this.i + 1, this.j)].walls[3] &&
      grid2[index(this.i + 1, this.j, true)] &&
      grid2[index(this.i + 1, this.j, true)].activated == true
    ) {
      this.blocked = false;
      this.end = true;
      wallNeighbors++;
    }
    if (
      grid[index(this.i + cols, this.j)] &&
      !grid[index(this.i + cols, this.j)].walls[0] &&
      grid2[index(this.i + cols, this.j, false)] &&
      grid2[index(this.i + cols, this.j, false)].activated == true
    ) {
      this.blocked = false;
      this.end = true;
      wallNeighbors++;
    }
    if (wallNeighbors == 1) {
      this.end = false;
    }
  };
  this.update = function (number) {
    for (var j = rows - 1; j > -1; j--) {
      for (var i = cols - 1; i > -1; i--) {
        grid2[index(i, j, true)].current = false;
      }
    }
    this.current = true;
    this.path.push(index(this.i, this.j));
    if (!this.blocked) {
      if (
        (((grid2[index(this.i - 1, this.j, true)] &&
          grid2[index(this.i - 1, this.j, true)].activated == true) ||
          (grid2[index(this.i - cols, this.j, false)] &&
            grid2[index(this.i - cols, this.j, false)].activated == true)) &&
          number == 0) ||
        (((grid2[index(this.i + 1, this.j, true)] &&
          grid2[index(this.i + 1, this.j, true)].activated == true) ||
          (grid2[index(this.i + cols, this.j, false)] &&
            grid2[index(this.i + cols, this.j, false)].activated == true)) &&
          number == 1)
      ) {
        this.activated = true;
      }
    }
  };
}
