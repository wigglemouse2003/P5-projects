function Character() {
  this.show = function (x, y, bgcolor, lookingX, lookingY, expression) {
    push();
    noStroke();
    fill(50, 0, 150);
    translate(x, y);
    scale(1.5);
    // arc(0, -10, 35, 35, TWO_PI - HALF_PI, PI + QUARTER_PI);
    push();
    translate(0, -10);
    // fill(bgcolor);
    // stroke(bgcolor);
    // cylinder(5.25, 25);
    fill(50, 0, 150);
    noStroke();
    torus(12, 5.5);
    pop();
    // circle(0, -10, 20);
    fill(50, 0, 150);
    push();
    translate(0, 15);
    cylinder(5, 30);
    pop();
    push();
    translate(0, -25);
    cylinder(5, 10);
    pop();
    push();
    translate(0, -30, 0);
    sphere(5);
    pop();
    push();
    translate(0, 30, 0);
    sphere(5);
    pop();
    circle(0, -30, 10);
    circle(0, 30, 10);
    push();
    translate(0, 0, 5.5);
    fill(255);
    push();
    translate(-12, -10, -3.5);
    sphere(6.25);
    pop();
    push();
    translate(12, -10, -3.5);
    sphere(6.25);
    pop();
    fill(0);
    push();
    translate(cos(lookingX) * 2.5 + 12.5, sin(lookingY) * 2.5 - 10, 0);
    sphere(3.75);
    pop();
    push();
    translate(cos(lookingX) * 2.5 - 12.5, sin(lookingY) * 2.5 - 10, 0);
    sphere(3.75);
    pop();
    pop();
    noFill();
    stroke(0);
    if (expression == "happy") {
      arc(0, 0, 9, 9, HALF_PI - QUARTER_PI, PI - QUARTER_PI);
    } else if (expression == "sad") {
      arc(0, 9, 9, 9, HALF_PI - (PI + QUARTER_PI), -QUARTER_PI);
    } else if (expression == "scared") {
      fill(0);

      ellipse(0, 2, 9, 6);
    }
    pop();
  };
}
