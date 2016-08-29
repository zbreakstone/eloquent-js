'use strict';

function symbolLogger(symbol) {
  return function() {
    for (var i = symbol; i.length < 8; i += symbol) {
      console.log(i);
    }
  }
}

var logHash = symbolLogger('#');
var logStar = symbolLogger('*');
var logAt = symbolLogger('@');

logHash();
logStar();
logAt();
