function Character() {
  this.show = function (x, y, bgcolor, lookingX, lookingY, expression) {
    push();
    noStroke();
    fill(50, 0, 150);
    translate(x, y);
    scale(1.5);
    arc(0, -10, 35, 35, TWO_PI - HALF_PI, PI + QUARTER_PI);
    fill(bgcolor);
    circle(0, -10, 20);
    fill(50, 0, 150);
    rectMode(CENTER);
    rect(0, 0, 10, -60);
    circle(0, -30, 10);
    circle(0, 30, 10);
    fill(255);
    ellipse(-12.5, -10, 12.5, 12.5);
    ellipse(12.5, -10, 12.5, 12.5);
    fill(0);
    ellipse(cos(lookingX) * 2.5 + 12.5, sin(lookingY) * 2.5 - 10, 7.5, 7.5);
    ellipse(cos(lookingX) * 2.5 - 12.5, sin(lookingY) * 2.5 - 10, 7.5, 7.5);
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
