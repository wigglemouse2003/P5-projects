function Race(type, cellNum) {
  this.cellNum = grid[cellNum];
  this.pos = createVector(this.cellNum.pos.x, this.cellNum.pos.y);
  this.image;
  this.type = type;
  this.race = "";
  this.speed = 1;
  this.cellNum.speed = this.speed;
  this.active = false;
  this.spdCounter = this.speed;

  this.setRace = function () {
    if (this.type == 0) {
      this.race = "aasimar";
      this.image = loadImage("coin-images/aasimar.png");
    } else if (this.type == 1) {
      this.race = "dragonborn";
      this.image = loadImage("coin-images/dragonborn.png");
    } else if (this.type == 2) {
      this.race = "dwarf";
      this.image = loadImage("coin-images/dwarf.png");
    } else if (this.type == 3) {
      this.race = "elf";
      this.image = loadImage("coin-images/elf.png");
    } else if (this.type == 4) {
      this.race = "gnome";
      this.image = loadImage("coin-images/gnome.png");
    } else if (this.type == 5) {
      this.race = "half-elf";
      this.image = loadImage("coin-images/half-elf.png");
    } else if (this.type == 6) {
      this.race = "half-orc";
      this.image = loadImage("coin-images/half-orc.png");
    } else if (this.type == 7) {
      this.race = "halfling";
      this.image = loadImage("coin-images/halfling.png");
    } else if (this.type == 8) {
      this.race = "human";
      this.image = loadImage("coin-images/human.png");
    } else if (this.type == 9) {
      this.race = "lizardfolk";
      this.image = loadImage("coin-images/lizardfolk.png");
    } else if (this.type == 10) {
      this.race = "tabaxi";
      this.image = loadImage("coin-images/tabaxi.png");
    } else if (this.type == 11) {
      this.race = "tiefling";
      this.image = loadImage("coin-images/tiefling.png");
    }
  };

  this.activate = function () {
    if (moving) {
      this.cellNum.speed = this.speed;
    }
    var availableSpots = [];
    for (let i = 0; i < this.cellNum.spots.length; i++) {
      if (this.cellNum.spots[i]) {
        if (this.active) {
          availableSpots.push(this.cellNum.spots[i]);
          this.cellNum.spots[i].available = true;
        }
      }
    }
  };

  this.move = function (cell, cellPos) {
    this.cellNum.getSpots();
    this.pos.x = cell.pos.x;
    this.pos.y = cell.pos.y;
    this.cellNum.spots = [];
    this.cellNum = cell;
    if (this.spdCounter != 0) {
      this.cellNum.speed = this.spdCounter;
      this.spdCounter -= cellPos;
    }
    // this.cellNum.speed = this.speed;
  };

  this.show = function (x, y) {
    this.image.resize(resolution - 10, resolution - 10);
    push();
    translate(x, y);
    fill(221, 183, 144);
    if (this.active) {
      stroke(23, 247, 19);
      strokeWeight(3);
    } else {
      stroke(112, 74, 35);
    }
    ellipse(0, 0, resolution - 5, resolution - 5);
    image(this.image, 0, 2.25);
    image(this.image, 0, 2.25);
    pop();
  };
}
