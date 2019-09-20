// Given a non-negative index k, return the kth level of the Pascal's triangle

var pascalLevel = function (k) {
  var levels = [[1], [1, 1]];
  if (k===0) return [];
  if (k===1 || k===2) return levels[k-1];

  for (pos=2; pos<k; pos++){ // for loop to build Pascal's triangle from the top-down
    var newLevel = [];
    var prevLen = levels[pos-1].length; // length of the previous row of numbers

    for (i=0; i<=prevLen; i++){ // for loop to build row of values
      if (i===0 || i===prevLen){ // if the current position is on either edge of triangle
        newLevel.push(1);
      } else { // from the previous row, add the sum of the value at the current and previous indices
        let newVal = levels[pos-1][i-1] + levels[pos-1][i];
        newLevel.push(newVal);
      }
    }

    levels.push(newLevel); // add new level to the list of rows
  }
  return levels[k-1];
}

console.log(pascalLevel(5)); // => [ 1, 4, 6, 4, 1 ]
/*
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1 <---
*/