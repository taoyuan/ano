"use strict";

var Arduino = require('../lib/arduino');
var arduino = new Arduino();

// arduino.select('teensy:avr:teensy31');
arduino.select('Arduino_STM32:STM32F1:mapleMini');
// arduino.select('arduino:avr:uno');
console.log(arduino.getPlatformPreferences());