module.exports = function multiply(first, second) {
  // your solution
  function toArr(long) {
    var result = [];
    for (var i = 0; i < long.length; i++) {
      result.unshift(+long[i]);
    }
    //console.log('long='+long);
    //console.log('resolve='+result);
    return result;
  }

  function correct(array) {
    //console.log('to correct='+array);
    for (var i = 0; ((i < array.length) && (array[i] != null)); i++) {
      if (Math.trunc(array[i]/10) > 0) {
        //console.log('-----array['+i+']='+array[i]+' array['+(i+1)+']='+array[i+1]);

        //very accuracy!
        if (array[i + 1] != undefined) {
          array[i + 1] += Math.trunc(array[i]/10);
        } else {
          array[i + 1] = Math.trunc(array[i]/10);
        }


        if ( array[i + 1]!=array[i + 1] ) {
          //console.log('+++++array['+i+']='+array[i]+' array['+(i+1)+']='+array[i+1]);
        }
      }
      array[i] = array[i] % 10;
    }
    //console.log('after='+array);
    return array;
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

  for (var i =0; i < a.length; i++) {
    //for every digit in smaller numbers
    for (var j = 0; j < b.length; j++) {
      result[j + i] = a[i] * b[j] + ((result[j + i] > 0) ? result[j + i]:0);
    }
    //console.log('a['+i+']='+a[i]);
    //console.log('res='+result);
  }

  //correct
  result = correct(result);
  var temp = "";
  for (var i = result.length - 1; i>=0; i--) {
    temp += result[i].toString();
  }

  return temp;
}
