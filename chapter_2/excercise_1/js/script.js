'use strict';

function symbolLogger(symbol) {
  var word = '';
  return function() {
    while (word.length < 7) {
      word = word + symbol;
      console.log(word);
    }
  }
}

var logHash = symbolLogger('#');
var logStar = symbolLogger('*');
var logAt = symbolLogger('@');

logHash();
logStar();
logAt();
