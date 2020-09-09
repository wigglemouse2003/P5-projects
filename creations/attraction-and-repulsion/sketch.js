var frame = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  noStroke();
  background(0);
  rectMode(CENTER);
  Fill(0 + frame);

  rect(width / 2, height / 2, 26, 26);
  Fill(1 + frame);

  rect(width / 2, height / 2 + 25, 26, 26);
  Fill(2 + frame);

  rect(width / 2 + 25, height / 2 + 25, 26, 26);
  Fill(3 + frame);

  rect(width / 2 + 25, height / 2, 26, 26);
  Fill(4 + frame);

  rect(width / 2 + 25, height / 2 - 25, 26, 26);
  Fill(5 + frame);

  rect(width / 2, height / 2 - 25, 26, 26);
  Fill(6 + frame);

  rect(width / 2 - 25, height / 2 - 25, 26, 26);
  Fill(7 + frame);

  rect(width / 2 - 25, height / 2, 26, 26);
  Fill(8 + frame);

  rect(width / 2 - 25, height / 2 + 25, 26, 26);
  Fill(9 + frame);

  rect(width / 2 - 25, height / 2 + 50, 26, 26);
  Fill(10 + frame);

  rect(width / 2, height / 2 + 50, 26, 26);
  Fill(11 + frame);

  rect(width / 2 + 25, height / 2 + 50, 26, 26);
  Fill(12 + frame);

  rect(width / 2 + 50, height / 2 + 50, 26, 26);
  Fill(13 + frame);

  rect(width / 2 + 50, height / 2 + 25, 26, 26);
  Fill(14 + frame);

  rect(width / 2 + 50, height / 2, 26, 26);
  Fill(15 + frame);

  rect(width / 2 + 50, height / 2 - 25, 26, 26);
  Fill(16 + frame);

  rect(width / 2 + 50, height / 2 - 50, 26, 26);
  Fill(17 + frame);

  rect(width / 2 + 25, height / 2 - 50, 26, 26);
  Fill(18 + frame);

  rect(width / 2, height / 2 - 50, 26, 26);
  Fill(19 + frame);

  rect(width / 2 - 25, height / 2 - 50, 26, 26);
  Fill(20 + frame);

  rect(width / 2 - 50, height / 2 - 50, 26, 26);
  Fill(21 + frame);

  rect(width / 2 - 50, height / 2 - 25, 26, 26);
  Fill(22 + frame);

  rect(width / 2 - 50, height / 2, 26, 26);
  Fill(23 + frame);

  rect(width / 2 - 50, height / 2 + 25, 26, 26);
  Fill(24 + frame);

  rect(width / 2 - 50, height / 2 + 50, 26, 26);
  frame += 1;
}

function Fill(color) {
  color = floor(color);
  if (color % 35 == 0) {
    fill(255, 0, 0);
  } else if (color % 35 == 5) {
    fill(0, 255, 0);
  } else if (color % 35 == 10) {
    fill(0, 0, 255);
  } else if (color % 35 == 15) {
    fill(255, 255, 0);
  } else if (color % 35 == 20) {
    fill(255, 0, 255);
  } else if (color % 35 == 25) {
    fill(0, 255, 255);
  } else if (color % 35 == 30) {
    fill(255, 255, 255);
  }
}
