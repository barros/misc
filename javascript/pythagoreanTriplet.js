/*
  Given an array of integers, return true if the array contains a Pythagorean triplet
  (a, b, c) => (a^2 + b^2 = c^2)
*/

function pythagoreanTriplet(input){
  var squared = input.map(val=>val**2); // square the values in the initial input array
  squared = squared.sort((val1,val2) => val1-val2); // sort the values in case the input was not already sorted
  /*
    pointer 'c' will begin at the last array element, pointer 'a' will begin at the beginning of the array,
    and pointer 'b' will begin one position behind 'c'
    if squared[a]+squared[b]=squared[c] -> return true,
    if squared[a]+squared[b]<squared[c] -> move 'a' forward 1,
    if squared[a]+squared[b]>squared[c] -> move 'b' back 1 position,
    else -> move 'c' back 1 position and begin the next for loop sequence
  */
  var c;
  for (c=squared.length-1; c>=0; c--){
    var
      a = 0
      b = c-1
    while (a<b){
      if (squared[a]+squared[b] == squared[c]){
        return true;
      } else if (squared[a]+squared[b] < squared[c]){
        a++;
      } else {
        b--;
      }
    }
  }
  // return false if 'c' reaches the beginning of the array without any successful pair found
  return false;
}

console.log(pythagoreanTriplet([1, 5, 3, 2, 4, 6])); // => returns true (3**2 + 4**2 = 5**2)