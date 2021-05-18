// let objs = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B, 0x77, 0x1F, 0x4E, 0x3D, 0x4F, 0x47];
let objs = [		0x7B, 0x6D, 0x5F];
let index = 0;
let width = 100;
let height = 20;

function preload() {

}


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('myContainer');

  frameRate(1);
}

function draw() {
  background(40);

  sevenSeg(objs[index]);
  index = (index + 1) % objs.length;
}

function getColor(hex, shift) {
  let r = 255;
  let g = 0;
  let b = 0;
  let a = 255 * ((hex >> shift) & 1);
  return color(r, g, b, a);
}

function drawSeg(x, y, width, height) {
  triangle(x - 20, y + 10, x, y, x, y + height);
  rect(x, y, width, height);
  triangle(x + width + 20, y + 10, x + width, y, x + width, y + height);
}

function sevenSeg(val) {
  push();
  noStroke();
  noFill();


  // A
  push();
  translate(60, 40);
  fill(getColor(val, 6));
  drawSeg(0, 0, 100, 20);
  pop();

  // B
  push();
  translate(60 + width + 30, 40 + 30);
  rotate(PI / 2);
  fill(getColor(val, 5));
  drawSeg(0, 0, 100, 20);
  pop();

  // C
  push();
  translate(60 + width + 30, 40 + 30 + width + 40);
  rotate(PI / 2);
  fill(getColor(val, 4));
  drawSeg(0, 0, 100, 20);
  pop();

  // D
  push();
  translate(60, 40 + 30 + (width * 2) + 40 + 10);
  fill(getColor(val, 3));
  drawSeg(0, 0, 100, 20);
  pop();

  // E
  push();
  translate(60 - 10, 40 + 30 + width + 40);
  rotate(PI / 2);
  fill(getColor(val, 2));
  drawSeg(0, 0, 100, 20);
  pop();

  // F
  push();
  translate(60 - 10, 40 + 30);
  rotate(PI / 2);
  fill(getColor(val, 1));
  drawSeg(0, 0, 100, 20);
  pop();

  // G
  push();
  translate(60, 40 + 30 + width + 10);
  fill(getColor(val, 0));
  drawSeg(0, 0, 100, 20);
  pop();



  // // B
  // fill(getColor(val, 5));
  // rect(160, 60, 20, 100);

  // // C
  // fill(getColor(val, 4));
  // rect(160, 180, 20, 100);

  // // D
  // fill(getColor(val, 3))
  // drawSeg(60, 280, 100, 20);
  // rect(60, 280, 100, 20);

  // // E
  // fill(getColor(val, 2));
  // rect(40, 180, 20, 100);

  // // F
  // fill(getColor(val, 1));
  // rect(40, 60, 20, 100);

  // G
  // fill(getColor(val, 0));
  // rect(60, 160, 100, 20);

  pop();
}