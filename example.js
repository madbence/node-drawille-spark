'use strict';

var spark = require('./');

var numbers = Array(80).join(0).split(0).map(function(_, i) {
  return Math.sin(i/10)
});

for(var i = 1; i < 5; i++) {
  console.log(spark(numbers, i));
}
