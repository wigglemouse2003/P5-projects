let playing, freq, amp;
let C = 32.7032,
  Db = 34.6478,
  D = 36.7081,
  Eb = 38.8909,
  E = 41.2034,
  F = 43.6535,
  Gb = 46.2493,
  G = 48.9994,
  Ab = 51.9131,
  A = 55,
  Bb = 58.2705,
  B = 61.7354;
var note;
let oscC, oscDb, oscD, oscEb, oscE, oscF, oscGb, oscG, oscAb, oscA, oscBb, oscB;

function setup() {
  amp = 1;
  oscC = createP("1 = C");
  oscDb = createP("2 = Db");
  oscD = createP("3 = D");
  oscEb = createP("4 = Eb");
  oscE = createP("5 = E");
  oscF = createP("6 = F");
  oscGb = createP("7 = Gb");
  oscG = createP("8 = G");
  oscAb = createP("9 = Ab");
  oscA = createP("0 = A");
  oscBb = createP("- = Bb");
  oscB = createP("= = B");
  registerServiceWorker("/addons/service-worker.js");
  var controllerWindow = createButton("Open the Controller");
  controllerWindow.mousePressed(openWin);
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(playOscillator);
  oscC = new p5.Oscillator("triangle");
  oscDb = new p5.Oscillator("triangle");
  oscD = new p5.Oscillator("triangle");
  oscEb = new p5.Oscillator("triangle");
  oscE = new p5.Oscillator("triangle");
  oscF = new p5.Oscillator("triangle");
  oscGb = new p5.Oscillator("triangle");
  oscG = new p5.Oscillator("triangle");
  oscAb = new p5.Oscillator("triangle");
  oscA = new p5.Oscillator("triangle");
  oscBb = new p5.Oscillator("triangle");
  oscB = new p5.Oscillator("triangle");
  C *= 4;
  Db *= 4;
  D *= 4;
  Eb *= 4;
  E *= 4;
  F *= 4;
  Gb *= 4;
  G *= 4;
  Ab *= 4;
  A *= 4;
  Bb *= 4;
  B *= 4;
  oscC.freq(C, 0.1);
  oscDb.freq(Db, 0.1);
  oscD.freq(D, 0.1);
  oscEb.freq(Eb, 0.1);
  oscE.freq(E, 0.1);
  oscF.freq(F, 0.1);
  oscGb.freq(Gb, 0.1);
  oscG.freq(G, 0.1);
  oscAb.freq(Ab, 0.1);
  oscA.freq(A, 0.1);
  oscBb.freq(Bb, 0.1);
  oscB.freq(B, 0.1);
}

function draw() {
  background(220);
  freq = constrain(map(mouseX, 0, width, 60, 500), -500, 500);
  // amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text("tap to play", 20, 20);
  text("freq: " + freq, 20, 40);
  text("amp: " + amp, 20, 60);

  keyIsDown(49) ? oscC.amp(amp, 0.1) : oscC.amp(0, 0.1);
  keyIsDown(50) ? oscDb.amp(amp, 0.1) : oscDb.amp(0, 0.1);
  keyIsDown(51) ? oscD.amp(amp, 0.1) : oscD.amp(0, 0.1);
  keyIsDown(52) ? oscEb.amp(amp, 0.1) : oscEb.amp(0, 0.1);
  keyIsDown(53) ? oscE.amp(amp, 0.1) : oscE.amp(0, 0.1);
  keyIsDown(54) ? oscF.amp(amp, 0.1) : oscF.amp(0, 0.1);
  keyIsDown(55) ? oscGb.amp(amp, 0.1) : oscGb.amp(0, 0.1);
  keyIsDown(56) ? oscG.amp(amp, 0.1) : oscG.amp(0, 0.1);
  keyIsDown(57) ? oscAb.amp(amp, 0.1) : oscAb.amp(0, 0.1);
  keyIsDown(48) ? oscA.amp(amp, 0.1) : oscA.amp(0, 0.1);
  keyIsDown(189) ? oscBb.amp(amp, 0.1) : oscBb.amp(0, 0.1);
  keyIsDown(187) ? oscB.amp(amp, 0.1) : oscB.amp(0, 0.1);
}
var num = 1;
function keyPressed() {
  key == "q" ? (note = "C") : null;
  key == "ArrowUp" && note == "C"
    ? ((C *= 2), oscC.freq(C))
    : key == "ArrowDown" && note == "C"
    ? ((C /= 2), oscC.freq(C))
    : null;
  key == "w" ? (note = "Db") : null;
  key == "ArrowUp" && note == "Db"
    ? ((Db *= 2), oscDb.freq(Db))
    : key == "ArrowDown" && note == "Db"
    ? ((Db /= 2), oscDb.freq(Db))
    : null;
  key == "e" ? (note = "D") : null;
  key == "ArrowUp" && note == "D"
    ? ((D *= 2), oscD.freq(D))
    : key == "ArrowDown" && note == "D"
    ? ((D /= 2), oscD.freq(D))
    : null;
  key == "r" ? (note = "Eb") : null;
  key == "ArrowUp" && note == "Eb"
    ? ((Eb *= 2), oscEb.freq(Eb))
    : key == "ArrowDown" && note == "Eb"
    ? ((Eb /= 2), oscEb.freq(Eb))
    : null;
  key == "t" ? (note = "E") : null;
  key == "ArrowUp" && note == "E"
    ? ((E *= 2), oscE.freq(E))
    : key == "ArrowDown" && note == "E"
    ? ((E /= 2), oscE.freq(E))
    : null;
  key == "y" ? (note = "F") : null;
  key == "ArrowUp" && note == "F"
    ? ((F *= 2), oscF.freq(F))
    : key == "ArrowDown" && note == "F"
    ? ((F /= 2), oscF.freq(F))
    : null;
  key == "u" ? (note = "Gb") : null;
  key == "ArrowUp" && note == "Gb"
    ? ((Gb *= 2), oscGb.freq(Gb))
    : key == "ArrowDown" && note == "Gb"
    ? ((Gb /= 2), oscGb.freq(Gb))
    : null;
  key == "i" ? (note = "G") : null;
  key == "ArrowUp" && note == "G"
    ? ((G *= 2), oscG.freq(G))
    : key == "ArrowDown" && note == "G"
    ? ((G /= 2), oscG.freq(G))
    : null;
  key == "o" ? (note = "Ab") : null;
  key == "ArrowUp" && note == "Ab"
    ? ((Ab *= 2), oscAb.freq(Ab))
    : key == "ArrowDown" && note == "Ab"
    ? ((Ab /= 2), oscAb.freq(Ab))
    : null;
  key == "p" ? (note = "A") : null;
  key == "ArrowUp" && note == "A"
    ? ((A *= 2), oscA.freq(A))
    : key == "ArrowDown" && note == "A"
    ? ((A /= 2), oscA.freq(A))
    : null;
  key == "[" ? (note = "Bb") : null;
  key == "ArrowUp" && note == "Bb"
    ? ((Bb *= 2), oscBb.freq(Bb))
    : key == "ArrowDown" && note == "Bb"
    ? ((Bb /= 2), oscBb.freq(Bb))
    : null;
  key == "]" ? (note = "B") : null;
  key == "ArrowUp" && note == "B"
    ? ((B *= 2), oscB.freq(B))
    : key == "ArrowDown" && note == "B"
    ? ((B /= 2), oscB.freq(B))
    : null;
  key == "a" ? (note = "all") : null;
  key == "ArrowUp" && note == "all"
    ? ((B *= 2),
      oscB.freq(B),
      (Bb *= 2),
      oscBb.freq(Bb),
      (A *= 2),
      oscA.freq(A),
      (Ab *= 2),
      oscAb.freq(Ab),
      (G *= 2),
      oscG.freq(G),
      (Gb *= 2),
      oscGb.freq(Gb),
      (F *= 2),
      oscF.freq(F),
      (E *= 2),
      oscE.freq(E),
      (Eb *= 2),
      oscEb.freq(Eb),
      (D *= 2),
      oscD.freq(D),
      (Db *= 2),
      oscDb.freq(Db),
      (C *= 2),
      oscC.freq(C))
    : key == "ArrowDown" && note == "all"
    ? ((B /= 2),
      oscB.freq(B),
      (Bb /= 2),
      oscBb.freq(Bb),
      (A /= 2),
      oscA.freq(A),
      (Ab /= 2),
      oscAb.freq(Ab),
      (G /= 2),
      oscG.freq(G),
      (Gb /= 2),
      oscGb.freq(Gb),
      (F /= 2),
      oscF.freq(F),
      (E /= 2),
      oscE.freq(E),
      (Eb /= 2),
      oscEb.freq(Eb),
      (D /= 2),
      oscD.freq(D),
      (Db /= 2),
      oscDb.freq(Db),
      (C /= 2),
      oscC.freq(C))
    : null;
  key == "v" ? (note = "vol") : null;
  var amp2;
  key == "ArrowUp" && note == "vol" && amp < 1 && keyIsPressed === true
    ? ((amp += 0.1), (amp2 = amp * 10), (amp2 = round(amp2)), (amp = amp2 / 10))
    : key == "ArrowDown" && note == "vol" && amp >= 0 && keyIsPressed === true
    ? ((amp -= 0.1), (amp2 = amp * 10), (amp2 = round(amp2)), (amp = amp2 / 10))
    : null;
  if (amp < 0) {
    amp = 0;
  }
  if (amp > 1) {
    amp = 1;
  }
}

function openWin() {
  controller = window.open(
    "controller/controller.html",
    "",
    "width=1500, height=200, resizable=no"
  );
  resizeWin();
}

function resizeWin() {
  controller.focus();
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  if (num == 1) {
    oscC.start();
    oscDb.start();
    oscD.start();
    oscEb.start();
    oscE.start();
    oscF.start();
    oscGb.start();
    oscG.start();
    oscAb.start();
    oscA.start();
    oscBb.start();
    oscB.start();
    num = 0;
  }
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 ove seconds
  // oscC.amp(0, 0.1, 0.1);
  // oscDb.amp(0, 0.1, 0.1);
  // oscD.amp(0, 0.1, 0.1);
  // oscEb.amp(0, 0.1, 0.1);
  // oscE.amp(0, 0.1, 0.1);
  // oscF.amp(0, 0.1, 0.1);
  // oscGb.amp(0, 0.1, 0.1);
  // oscG.amp(0, 0.1, 0.1);
  // oscAb.amp(0, 0.1, 0.1);
  // oscA.amp(0, 0.1, 0.1);
  // oscBb.amp(0, 0.1, 0.1);
  // oscB.amp(0, 0.1, 0.1);
  playing = false;
}
