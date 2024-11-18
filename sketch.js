let bg;
let starFill;

let irBase = 50;  // Base inner radius
let orBase = 100; // Base outer radius
let breathSpeed = 0.05;  // Breathing effect speed

function setup() {
  createCanvas(400, 400);
  changeBGColor();
  starFill = randomColor(); 
  fill(starFill);
  noStroke(); 
}

function draw() {
  background(bg);

  // Breathing effect: fluctuate the inner and outer radii
  let ir = irBase + 20 * sin(frameCount * breathSpeed);  // Fluctuates by +/- 20
  let or = orBase + 30 * sin(frameCount * breathSpeed);  // Fluctuates by +/- 30

  drawStar(width / 2, height / 2, ir, or, 7);  // Draw star with breathing effect
}

function drawStar(mx = width / 2, my = height / 2, ir = 50, or = 100, numberOfSides = 7) {
  let numberOfPoints = numberOfSides * 2;
  let theta = 0;
  let dt = TWO_PI / numberOfPoints;

  beginShape();
  for (let i = 0; i < numberOfPoints; i++) {
    if (i % 2 === 0) {
      vertex(mx + ir * cos(theta + dt * i), my + ir * sin(theta + dt * i));
    } else {
      vertex(mx + or * cos(theta + dt * i), my + or * sin(theta + dt * i));
    }
  }
  endShape(CLOSE);
}

function randomColor(avenues = true) {
  if (avenues) {
    return color(randomAvenuesColor());
  } else {
    return color(random(255), random(255), random(255));
  }
}

function changeBGColor(avenues = true) {
  bg = randomColor(avenues);
}

function keyPressed() {
  if (key === 'b') {
    changeBGColor();
  }
}

// Hex Codes for the Official Avenues Colors 
const colors = { 
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C", 
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
}

function randomAvenuesColor() {
  return random(Object.values(colors));
}
