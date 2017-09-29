module.exports = function multiply(first, second) {
  // your solution
  function toArr(long) {
    var result = [];
    for (var i = 0; i < long.length; i++) {
      result.push(+long[i]);
    }
    return result;
  }

  var a,
      b,
      result = [];
  if (first.length >= second.Length) {
    a = toArr(first);
    b = toArr(second);
  } else {
    a = toArr(second);
    b = toArr(first);
  }

  for (var i < b.length; i++) {
    //for every digit in smaller numbers
    for (var j = 0; j < a.length; j++) {
      result[j + i] += a[j] * b[i];
    }
  }

  //correct
  for (var i = 0; ((i < result.length) && (result[i] != null)); i++) {
    result[i + 1] = Math.trunc(result[i]/10);
    result[i] = result[i] % 10;
  }

  return result.reverse().toString();
}
