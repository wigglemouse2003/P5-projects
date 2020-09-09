// have multiple buttons
// do when i have time: a = num value, a++, if a = 9, a = 0, inside the if: b = num value, ...
var num1 = 1;
var num2 = 0;
var show;
var ht1;
var swc = 0;
var frame = 0;
var blank;
var dig = 0;
var val = 0;
var valstore = 0;
var d = 1;
var t = 1;
var button;
var newnum;
let slider;
let sliderval;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(25);
  translate(width - width / 8, height / 2);
  blank = new Segments();
  for (var i = 1; i < 11; i++) {
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
  translate(width - width / 8, height / 2);
  frameRate(slider.value());
  sliderval.html(slider.value());
  ht1.html(show);
  add();
  if (val === 9) {
    val = 0;
    go(1);
  } else {
    val++;
  }
  if (t === 11) {
    dig = 0;
    val = 0;
    valstore = 0;
    d = 1;
    t = 1;
    go(0);
  }
  for (var i = 0; i < 3; i++) {
    newnum = Num(dig, val, 1);
  }
  newnum = Num(dig, val, 0);
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





function go(f) {
  if (f === 1) {
    val = valstore + 1;
    valstore = val;

    if (valstore === 10) {
      valstore = 0;
      val = t;
      // dig = d;
      // val = 0;
      for (var i = 0; i < 3; i++) {
        newnum = Num(dig + 1, 0, 1);
      }
      newnum = Num(dig + 1, 0, 0);
      dig = d;
      t++;
      // d = 3;
      console.log(d);

    } else {
      d = dig + 2;
      dig++;
      // d = 0;
    }
    for (var i = 0; i < 3; i++) {
      newnum = Num(dig, val, 1);
    }
    newnum = Num(dig, val, 0);

  } else {
    for (var i = 0; i < 3; i++) {
      newnum = Num(1, 0, 1);
      newnum = Num(2, 0, 1);
      newnum = Num(3, 0, 1);
    }
  }
  val = 0;
  dig = 0;
}