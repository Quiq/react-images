"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function callAll(arr, thisArg, args) {
  arr.forEach(function (f) {
    return f && f.apply(thisArg, args);
  });
}

exports.default = callAll;