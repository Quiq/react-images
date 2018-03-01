function callAll (arr, thisArg, args) {
  arr.forEach(f => f && f.apply(thisArg, args));
}

export default callAll;