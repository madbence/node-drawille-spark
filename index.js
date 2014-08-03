'use strict';

var Canvas = require('drawille');

module.exports = function(numbers, lines) {
  lines = lines || 1;
  var width = Math.ceil(numbers.length / 2) * 2;
  var height = lines * 4;
  var canvas = new Canvas(width, height);
  var min = Math.min.apply(Math, numbers);
  var max = Math.max.apply(Math, numbers);
  numbers.forEach(function(n, index) {
    var h = Math.ceil((n - min) / (max - min) * (height - 1));
    for(var i = 0; i <= h; i++) {
      canvas.set(index, height - i - 1);
    }
  });
  return canvas.frame().slice(0, -1);
};
