"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function buildPropGetter(propertyBuilders) {
  return function (customProps) {
    var mergedProps = Object.assign({}, customProps);
    Object.keys(propertyBuilders).forEach(function (k) {
      mergedProps[k] = propertyBuilders[k](mergedProps[k]);
    });
    return mergedProps;
  };
}

exports.default = buildPropGetter;