function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  noStroke();
  background(0);
  rectMode(CENTER);
  Fill(0 + frameCount);

  rect(width / 2, height / 2, 26, 26);
  Fill(1 + frameCount);

  rect(width / 2, height / 2 + 25, 26, 26);
  Fill(2 + frameCount);

  rect(width / 2 + 25, height / 2 + 25, 26, 26);
  Fill(3 + frameCount);

  rect(width / 2 + 25, height / 2, 26, 26);
  Fill(4 + frameCount);

  rect(width / 2 + 25, height / 2 - 25, 26, 26);
  Fill(5 + frameCount);

  rect(width / 2, height / 2 - 25, 26, 26);
  Fill(6 + frameCount);

  rect(width / 2 - 25, height / 2 - 25, 26, 26);
  Fill(7 + frameCount);

  rect(width / 2 - 25, height / 2, 26, 26);
  Fill(8 + frameCount);

  rect(width / 2 - 25, height / 2 + 25, 26, 26);
  Fill(9 + frameCount);

  rect(width / 2 - 25, height / 2 + 50, 26, 26);
  Fill(10 + frameCount);

  rect(width / 2, height / 2 + 50, 26, 26);
  Fill(11 + frameCount);

  rect(width / 2 + 25, height / 2 + 50, 26, 26);
  Fill(12 + frameCount);

  rect(width / 2 + 50, height / 2 + 50, 26, 26);
  Fill(13 + frameCount);

  rect(width / 2 + 50, height / 2 + 25, 26, 26);
  Fill(14 + frameCount);

  rect(width / 2 + 50, height / 2, 26, 26);
  Fill(15 + frameCount);

  rect(width / 2 + 50, height / 2 - 25, 26, 26);
  Fill(16 + frameCount);

  rect(width / 2 + 50, height / 2 - 50, 26, 26);
  Fill(17 + frameCount);

  rect(width / 2 + 25, height / 2 - 50, 26, 26);
  Fill(18 + frameCount);

  rect(width / 2, height / 2 - 50, 26, 26);
  Fill(19 + frameCount);

  rect(width / 2 - 25, height / 2 - 50, 26, 26);
  Fill(20 + frameCount);

  rect(width / 2 - 50, height / 2 - 50, 26, 26);
  Fill(21 + frameCount);

  rect(width / 2 - 50, height / 2 - 25, 26, 26);
  Fill(22 + frameCount);

  rect(width / 2 - 50, height / 2, 26, 26);
  Fill(23 + frameCount);

  rect(width / 2 - 50, height / 2 + 25, 26, 26);
  Fill(24 + frameCount);

  rect(width / 2 - 50, height / 2 + 50, 26, 26);
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
