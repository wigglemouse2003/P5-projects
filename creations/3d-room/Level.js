function Level() {
  this.hilo = 10;
  this.trans = [];
  this.setup = function () {
    for (let i = 0; i < 100; i++) {
      rooms.push(new Room());
    }
  };

  this.translate = function (x, y, z) {
    this.trans.push(createVector(x, y, z));
  };

  this.show = function () {
    let clr = color(237, 109, 35);
    rooms[0].show(2, 3, 4, createVector(0, 0, 0), clr);
    rooms[1].show(2, 2, 2, createVector(0, 250, -501), clr);
    rooms[2].show(3, 1, 5, createVector(501, 500, -751), clr);
    rooms[3].show(1, 2, 1, createVector(250, 250, -752), clr);
    rooms[4].show(3, 1, 2, createVector(501, 250, -751), clr);
    rooms[5].show(4, 2, 2, createVector(1001, 250, 0), clr);
  };
  this.collide = function () {
    rooms[0].makeCollisions(2, 3, 4, createVector(0, 0, 0));
    rooms[1].makeCollisions(2, 2, 2, createVector(0, 250, -501));
    rooms[2].makeCollisions(3, 1, 5, createVector(501, 500, -751));
    rooms[3].makeCollisions(1, 2, 1, createVector(250, 250, -752));
    rooms[4].makeCollisions(3, 1, 2, createVector(501, 250, -751));
    rooms[5].makeCollisions(4, 2, 2, createVector(1001, 250, 0));
  };
}
