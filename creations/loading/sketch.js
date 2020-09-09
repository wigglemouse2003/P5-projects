// have multiple buttons
// do when i have time: a = num value, a++, if a = 9, a = 0, inside the if: b = num value, ...
var num1 = 1;
var num2 = 0;
var show;
var ht1;
var swc = 0;
var frame = 0;
var blank;
var val = 2;
var valstore = 0;
var button;
var newnum;
var s = 1;
var maxi = 11;
let slider;
let sliderval;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  translate(width + 20 + 42.5, height / 2);
  blank = new Segments();
  for (var i = 1; i < 17; i++) {
    blank.seg1.show(i, 0);
    blank.seg2.show(i, 0);
    blank.seg3.show(i, 0);
    blank.seg4.show(i, 0);
    blank.seg5.show(i, 0);
    blank.seg6.show(i, 0);
    blank.seg7.show(i, 0);
  }
  ht1 = createP();
  ht1.position(windowWidth / 2 - width / 16, 0);
  ht1.style('color', 'white');
  slider = createSlider(1, 60, 5);
  slider.position(windowWidth / 2 - width / 8, 3.75 * windowHeight / 4)
  sliderval = createP();
  sliderval.position(slider.position().x + 150, slider.position().y - 30);
  sliderval.style('color', 'rgb(0, 255, 0)');
  sliderval.style('font-weight', '900');
  sliderval.style('font-size', '25px');
  // button = createButton("go");
  // button.mousePressed(click);
}

function draw() {
  translate(width + 20, height / 2);
  frameRate(slider.value());
  sliderval.html(slider.value());
  ht1.html(show);
  add();
  for (var k = 0; k < maxi - s; k++) {
    if (s === -13) {
      s = 0;
    }
    s--;
    if (val === ceil(maxi / 1) + 1) {
      valstore = 1;
      val = 2;
    } else {
      if (valstore != 1) {
        val++;
      }
      valstore = 0;
    }
    if (valstore === 1) {
      for (var i = 0; i < 3; i++) {
        newnum = Num(k + 1, 5, 1);
      }
      newnum = Num(k - 1, 5, 0);
    } else {
      for (var i = 0; i < 3; i++) {
        newnum = Num(k - 2 * s, val, 1);
      }
      newnum = Num(k + 1, val, 0);
    }
  }
  frame += 0.5;
}

function add() {
  if (frame % 5 == 0 && swc % 2 == 1) {
    num2 = num1 + num2;
    show = num2;
    return swc;
  } else if (frame % 5 == 0 && swc % 2 == 0) {
    num1 = num2 + num1;
    show = num1;
    return swc;
  }
  swc++;
}