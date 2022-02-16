#!/usr/bin/env node

const trianglify = require('trianglify')
const fs = require('fs')

const canvas = trianglify({
  width: 1920,
  height: 700,
  palette: {
    rtd: [
      '#de1e50',
      '#e76d23',
      '#ffc91e',
    ],
    dtr: [
      '#ffc91e',
      '#e76d23',
      '#de1e50',
    ],
    td: [
      '#e76d23',
      '#ffc91e',
    ],
    rt: [
      '#de1e50',
      '#e76d23',
    ],
    rtdb: [
      '#1171b0',
    ],
  },
  xColors: 'random',
  yColors: 'random',
  fill: false,
  strokeWidth: 3,
  colorFunction: trianglify.colorFunctions.sparkle(0.2),
}).toCanvas()
 
const file = fs.createWriteStream('trianglify.png')
canvas.createPNGStream().pipe(file)
