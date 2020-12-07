function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  this.checkNeighbors = function () {
    var neighbors = [];
    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];
    if ((top && !top.visited) || (random(1) <= 0.01 && stack.length != 0)) {
      neighbors.push(top);
    }
    if ((right && !right.visited) || (random(1) <= 0.01 && stack.length != 0)) {
      neighbors.push(right);
    }
    if (
      (bottom && !bottom.visited) ||
      (random(1) <= 0.01 && stack.length != 0)
    ) {
      neighbors.push(bottom);
    }
    if ((left && !left.visited) || (random(1) <= 0.01 && stack.length != 0)) {
      neighbors.push(left);
    }
    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  };
  this.highlight = function () {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(212, 151, 37);
    rect(x, y, w, w);
  };
  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    if (this.visited) {
      noStroke();
      fill(133, 31, 133);
      rect(x, y, w, w);
      // stroke(0);
      stroke(255);
      strokeWeight(2);
      if (this.walls[0]) {
        line(x, y, x + w, y);
      }
      if (this.walls[1]) {
        line(x + w, y, x + w, y + w);
      }
      if (this.walls[2]) {
        line(x + w, y + w, x, y + w);
      }
      if (this.walls[3]) {
        line(x, y + w, x, y);
      }
    }
    if (!this.visited && showgrid == 1) {
      stroke(255);
      strokeWeight(1);
      if (this.walls[0]) {
        line(x, y, x + w, y);
      }
      if (this.walls[1]) {
        line(x + w, y, x + w, y + w);
      }
      if (this.walls[2]) {
        line(x + w, y + w, x, y + w);
      }
      if (this.walls[3]) {
        line(x, y + w, x, y);
      }
    }
  };
}
