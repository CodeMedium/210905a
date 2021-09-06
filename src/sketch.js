/**
 * 210905 - 
 * Oz Ramos @TheCodeMedium
 * https://codemedium.com
 * ---
 * Twitter: https://twitter.com/thecodemedium
 * Instagram: https://www.instagram.com/thecodemedium/
 * Pinterest: https://www.pinterest.com/codemedium/
 * GitHub: https://github.com/codemedium
 * Ko-Fi: https://ko-fi.com/handsfreejs
 *---
 * (∩｀-´)⊃━☆ﾟ.*･｡ﾟ  "Any sufficiently advanced technology is indistinguishable from magic"
 * 		                - Arthur C. Clarke
 *---
 * Inspired by: https://www.pinterest.com/pin/165999936249530661/
 */

/**
 * Sketch entry point
 */
function setup() {
  // Param args
  params = Object.assign({
    bg: [0, 0, 0],
    colors: ['#ffffff', '#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0'],
    pixelRatio: .99
  }, getURLParams())
	createCanvas(windowWidth, windowHeight)
  pixelDensity(1)
  noLoop()
  redraw()
}

/**
 * Main draw loop
 */
function draw() {
  resizeCanvas(windowWidth, windowHeight)
  background(params.bg)
  noiseSeed(frameCount)
  
  // Blackspace
  // Randomly draw a white pixel across entire canvas
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (random() > params.pixelRatio) {
        let c = random(255)
        set(x, y, color(c, c, c))
      }
    }
  }
  updatePixels()

  translate(100, 0)
  // White vertical line
  loadPixels()
  noiseDetail(1.5, 1)
  for (let y = 0; y < height / 1.5; y++) {
    let a = noise(y) * 255
    noise(y) > .5 && set(100 + width / 2 - 2, y, color(a, a, a))
    set(99 + width / 2, y, color(255, 255, 255))
    set(100 + width / 2, y, color(255, 255, 255))
    noise(y + 100) > .5 && set(100 + width / 2 + 1, y, color(a, a, a))
  }
  updatePixels()

  // Red L line
  strokeWeight(1)
  stroke('#f70203')
  line(width / 2, height / 1.5 + 10, width / 2, height - height / 6 - 10)
  line(width / 2, height - height / 6 - 10, width / 2 + 20, height - height / 6 - 10)

  // Red rectangle
  noStroke()
  fill('#f70203')
  rect(width / 2 + 10, 0, width, height)

  // Orange bottom
  noStroke()
  fill('#fe5d01')
  rect(width / 2 + 10, height - height / 6, width, height)

  // Divider stripe
  fill(255, 255, 255, 50)
  rect(width / 2 + 10, height / 1.5, width, 10)
}

/**
 * Returns a color in colors
 */
function getColor (transparent = '') {
  return params.colors[Math.floor(random(params.colors.length))] + transparent
}















/**
 * Handle keypressed across multiple files
 */
function windowResized () {
  redraw()
}
function mousePressed () {
  redraw()
}
function keyPressed () {
  redraw()
  keypressFn.forEach(fn => fn())
}

/**
 * Split keypressed into multiple functions
 * - On my localhost I have another file to record the canvas into a video,
 *   but on OpenProcessing.org this file is not. Locally, the other file
 *   adds another function that starts recording if space is pressed
 * 
 * @see https://github.com/CodeMedium/subdivided-starships
 */
const keypressFn = [function () {
  switch (keyCode) {
    // Space
    case 32:
      break
    // 1
    case 49:
      break
    // 2
    case 50:
      break
    // 3
    case 51:
      break
    // 4
    case 52:
      break
    // 5
    case 53:
      break
  }
}]
